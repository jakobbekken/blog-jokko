{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_22
  ];

  shellHook = ''
    RED=$(tput setaf 1)
    GREEN=$(tput setaf 2)
    CYAN=$(tput setaf 6)
    MAGENTA=$(tput setaf 5)
    RESET=$(tput sgr0)
  
    REPO_NAME=$(basename "$(git rev-parse --show-toplevel)")
    BRANCH=$(git rev-parse --abbrev-ref HEAD)
    COMMITS=$(git rev-list --count HEAD)

    echo ""
    echo "$CYAN >> READY TO COOK! $RESET"
    echo "$GREEN Repo:  $RESET  $REPO_NAME"
    echo "$GREEN Branch:$RESET  $BRANCH"
    echo "$GREEN Commits:$RESET $COMMITS"
    echo ""

    export SHELL=$(which zsh)
    exec $SHELL

  '';
}

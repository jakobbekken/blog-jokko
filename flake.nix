{
  description = "Dev environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.05";
  };

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs { inherit system; };
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        packages = [
          pkgs.nodejs_22
        ];

        shellHook = ''
          echo "🚀 Hei sjef! Hva skal det være i dag?"
          echo "Node version: $(node -v)"
        '';
      };
    };
}


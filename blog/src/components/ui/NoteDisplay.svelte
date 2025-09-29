<script>
  import { onMount } from "svelte";
  import { renderScore } from "../../lib/renderScore.js";

  export let notes = [
    { key: "b/2", duration: "q" },
    { key: "c/3", duration: "q" },
    { key: "e/3", duration: "q" },
    { key: "e/3", duration: "q", accidental: "b", stem: "down" }
  ];

  let container;

  onMount(() => {
    renderScore(container, notes);
  });
</script>

<div class="bg-white rounded-xl" bind:this={container}></div>


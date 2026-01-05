<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { Renderer, Stave, Voice, Formatter } from "vexflow";
  import { parseNotes } from "@lib/music/noteParser";

  export let notes: string[] = [];
  export let clef: "treble" | "bass" = "treble";
  export let timeSignature = "4/4";

  let container: HTMLDivElement;
  let containerWidth = 0;
  let resizeObserver: ResizeObserver;

  const padding = 10;
  const height = 200;
  const color = "#b8b3aa";

  function getBeats(ts: string) {
    const [beats, value] = ts.split("/").map(Number);
    return { beats, value };
  }

  function render() {
    if (!container || containerWidth === 0) return;

    container.innerHTML = "";

    const renderer = new Renderer(container, Renderer.Backends.SVG);
    renderer.resize(containerWidth, height);

    const context = renderer.getContext();
    context.setFont("Arial", 10);
    context.setFillStyle(color);
    context.setStrokeStyle(color);

    const staveWidth = containerWidth - padding * 2;

    const stave = new Stave(padding, 40, staveWidth);
    stave.addClef(clef).addTimeSignature(timeSignature).setContext(context).draw();

    const staveNotes = parseNotes(notes, clef, color);

    const { beats, value } = getBeats(timeSignature);

    const voice = new Voice({
      numBeats: beats,
      beatValue: value,
    })
      .setStrict(false)
      .addTickables(staveNotes);

    new Formatter().joinVoices([voice]).format([voice], staveWidth - 20);

    voice.draw(context, stave);
  }

  onMount(() => {
    resizeObserver = new ResizeObserver(([entry]) => {
      const width = Math.floor(entry.contentRect.width);
      if (width !== containerWidth) {
        containerWidth = width;
        render();
      }
    });

    resizeObserver.observe(container);
  });

  onDestroy(() => {
    resizeObserver?.disconnect();
  });
</script>

<div bind:this={container} class="w-full"></div>

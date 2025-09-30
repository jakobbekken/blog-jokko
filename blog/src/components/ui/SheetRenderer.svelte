<script lang="ts">
  import { onMount } from "svelte";
  import { Renderer, Stave, StaveNote, Voice, Formatter, Accidental } from "vexflow";
  import { parseNotes } from "@lib/music/noteParser";
  

  export let notes: string[] = [];
  export let clef = "bass";
  export let timeSignature = "4/4";

  let container: HTMLDivElement;
  let containerWidth: number;
  let padding = 1;


  onMount(() => {
    container.innerHTML = "";


    const renderer = new Renderer(container, Renderer.Backends.SVG);
    renderer.resize(containerWidth, 200);
    const context = renderer.getContext();
    context.setFont("Arial", 10);

    const stave = new Stave(padding, 40, containerWidth - 2*padding);
    stave.addClef(clef).addTimeSignature(timeSignature);
    stave.setContext(context).draw();

    const staveNotes = parseNotes(notes, clef)

    const voice = new Voice({ numBeats: 4, beatValue: 4 }).setStrict(false);
    voice.addTickables(staveNotes);

    new Formatter().joinVoices([voice]).format([voice], 350);
    voice.draw(context, stave);
  });
</script>

<div class="p-4 bg-white rounded-xl">
<div class="" bind:clientWidth={containerWidth} bind:this={container}></div>
</div>
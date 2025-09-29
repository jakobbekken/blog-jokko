<script lang="ts">
  import { onMount } from "svelte";
  import { Renderer, Stave, StaveNote, Voice, Formatter, Accidental } from "vexflow";

  export let notes: string[] = [];
  export let clef = "bass";
  export let addTimeSignature = "4/4";

  let container;

  onMount(() => {
    container.innerHTML = "";

    const renderer = new Renderer(container, Renderer.Backends.SVG);
    renderer.resize(500, 200);
    const context = renderer.getContext();
    context.setFont("Arial", 10);

    const stave = new Stave(10, 40, 400);
    stave.addClef("bass").addTimeSignature("4/4");
    stave.setContext(context).draw();

    const notes = [
      new StaveNote({ clef: "bass", keys: ["f/2"], duration: "8" }), // quarter note
      new StaveNote({ clef: "bass", keys: ["g/2"], duration: "q" }), // quarter note
      new StaveNote({ clef: "bass", keys: ["a/3"], duration: "h" }), // quarter note
      new StaveNote({ clef: "bass", keys: ["b/3"], duration: "w" })  // quarter note
    ];

    notes[3].addModifier(new Accidental("b"), 0);
    notes.forEach(n => n.autoStem());

    const voice = new Voice({ numBeats: 4, beatValue: 4 }).setStrict(false);
    voice.addTickables(notes);

    new Formatter().joinVoices([voice]).format([voice], 350);
    voice.draw(context, stave);
  });
</script>

<div class="bg-white rounded-xl" bind:this={container}></div>
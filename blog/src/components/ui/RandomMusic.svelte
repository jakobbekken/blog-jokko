<script lang="ts">
  import SheetRenderer from "@components/ui/SheetRenderer.svelte";

  export let clef: "treble" | "bass" = "treble";

  const TIME_SIGNATURE = "4/4";
  const TOTAL_BEATS = 4;
  const CENTER_OCTAVE = clef === "bass" ? 3 : 4;
  const MIN_OCTAVE = clef === "bass" ? 3 : 4;
  const MAX_OCTAVE = clef === "bass" ? 5 : 6;

  // Based lydian D
  const scale = ["D", "E", "F#", "G#", "A", "B", "C#"];

  const durations = [
    { value: "q", beats: 1 },
    { value: "8", beats: 0.5 },
  ];

  function randomChoice<T>(arr: readonly T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  type Pitch = {
    degree: number;
    octave: number;
  };

  function pickNextPitch(prev: Pitch | null): Pitch {
    if (!prev) {
      return {
        degree: 0,
        octave: CENTER_OCTAVE,
      };
    }

    let step: number;
    const r = Math.random();

    if (r < 0.7) {
      step = Math.random() < 0.6 ? 1 : -1;
    } else if (r < 0.9) {
      step = randomChoice([-2, 2]);
    } else {
      step = randomChoice([-3, 3]);
    }

    let degree = prev.degree + step;
    let octave = prev.octave;

    if (degree < 0) {
      degree += scale.length;
      octave--;
    } else if (degree >= scale.length) {
      degree -= scale.length;
      octave++;
    }

    if (octave < CENTER_OCTAVE && Math.random() < 0.6) octave++;
    if (octave > CENTER_OCTAVE && Math.random() < 0.4) octave--;

    octave = Math.max(MIN_OCTAVE, Math.min(MAX_OCTAVE, octave));

    return { degree, octave };
  }

  let remainingBeats = TOTAL_BEATS;
  const notes: string[] = [];

  let pitch: Pitch | null = null;

  while (remainingBeats > 0) {
    const validDurations = durations.filter(d => d.beats <= remainingBeats);
    const duration = randomChoice(validDurations);

    pitch = pickNextPitch(pitch);

    notes.push(`${scale[pitch.degree]}/${pitch.octave}:${duration.value}`);
    remainingBeats -= duration.beats;
  }

  const last = notes[notes.length - 1];
  const [_, duration] = last.split(":");

  notes[notes.length - 1] = `D/${pitch?.octave ?? CENTER_OCTAVE}:${duration}`;
</script>

<div class="flex flex-col gap-4">
  <SheetRenderer {notes} {clef} timeSignature={TIME_SIGNATURE} />
</div>

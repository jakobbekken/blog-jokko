import { StaveNote, Accidental } from "vexflow";

export const parseNotes = (noteStrings: string[], clef: string) => {
  const staveNotes: StaveNote[] = [];

  noteStrings.forEach(noteString => {
    console.log(noteString);
    const [key, duration] = noteString.split(":");

    const staveNote = new StaveNote({ clef: clef, keys: [key], duration: duration });

    if (key.includes("b")) {
      staveNote.addModifier(new Accidental("b"), 0);
    } else if (key.includes("#")) {
      staveNote.addModifier(new Accidental("#"), 0);
    }

    staveNote.autoStem();

    staveNotes.push(staveNote);
  });

  return staveNotes;
};

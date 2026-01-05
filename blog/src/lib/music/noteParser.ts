import { StaveNote, Accidental } from "vexflow";

export const parseNotes = (noteStrings: string[], clef: string, color: string) => {
  const staveNotes: StaveNote[] = [];

  noteStrings.forEach(noteString => {
    const [key, duration] = noteString.split(":");

    const staveNote = new StaveNote({
      clef,
      keys: [key],
      duration,
    });

    if (key.includes("b")) {
      const accidental = new Accidental("b");
      accidental.setStyle({
        fillStyle: color,
        strokeStyle: color,
      });
      staveNote.addModifier(accidental, 0);
    } else if (key.includes("#")) {
      const accidental = new Accidental("#");
      accidental.setStyle({
        fillStyle: color,
        strokeStyle: color,
      });
      staveNote.addModifier(accidental, 0);
    }

    staveNote.autoStem();

    staveNote.setStyle({
      fillStyle: color,
      strokeStyle: color,
    });

    staveNote.setLedgerLineStyle({
      strokeStyle: color,
      fillStyle: color,
    });

    staveNotes.push(staveNote);
  });

  return staveNotes;
};

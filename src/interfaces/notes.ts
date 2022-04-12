
import { array, boolean, Decoder, iso8601, nullable, number, object, string } from "decoders"

export interface Note {
    title: string;
    description: string;
    tagList: string[];
    createdAt: Date;
    updatedAt: Date;
}

export const noteDecoder: Decoder<Note> = object({
    title: string,
    description: string,
    tagList: array(string),
    createdAt: iso8601,
    updatedAt: iso8601,
})


export interface MultipleNotes {
    notes: Note[];
    notesCount: number;
}

export const multipleNotes: Decoder<MultipleNotes> = object({
    notes: array(noteDecoder),
    notesCount: number,
})
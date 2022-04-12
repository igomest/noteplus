import { None, Option, Some } from "@sniptt/monads"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Note } from "../../interfaces/notes"

export interface HomeState {
    notes: Option<Note[]>
    tags: Option<string[]>
}

const initialState: HomeState = {
    notes: None,
    tags: None,
}

const slice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        startLoading: () => ({ notes: None, tags: None }),
        loadNotes: (state, { payload: notes}: PayloadAction<Note[]>) => {
            state.notes = Some(notes)
        },
        loadTags: (state, { payload: tags}: PayloadAction<string[]>) => {
            state.tags = Some(tags)
        }
    }
})

export const { startLoading, loadNotes, loadTags } = slice.actions

export default slice.reducer
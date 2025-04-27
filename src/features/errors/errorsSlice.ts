import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BBox { x: number; y: number; w: number; h: number }
export interface DocError { id: string; message: string; bbox: BBox }

interface ErrorsState {
  errors: DocError[];
  selectedErrorId: string | null;
}

const initialState: ErrorsState = { errors: [], selectedErrorId: null };

export const errorsSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    setErrors(state, action: PayloadAction<DocError[]>) {
      state.errors = action.payload;
    },
    selectError(state, action: PayloadAction<string | null>) {
      state.selectedErrorId = action.payload;
    },
  },
});

export const { setErrors, selectError } = errorsSlice.actions;
export default errorsSlice.reducer;

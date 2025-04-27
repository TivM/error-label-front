import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Project {
  id: number;
  name: string;
  createdAt: string;
}

interface ProjectsState {
  projects: Project[];
}

const initialState: ProjectsState = { projects: [] };

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects(state, action: PayloadAction<Project[]>) {
      state.projects = action.payload;
    },
    addProject(state, action: PayloadAction<Project>) {
      state.projects.push(action.payload);
    },
  },
});

export const { setProjects, addProject } = projectsSlice.actions;
export default projectsSlice.reducer;

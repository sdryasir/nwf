import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import ProjectData from '../data/ProjectsData'
import { IProjectState } from '../models/models';
// Define a type for the slice state



const initialState: IProjectState[] = ProjectData;

export const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    
  },
})

export const {  } = projectSlice.actions


export default projectSlice.reducer
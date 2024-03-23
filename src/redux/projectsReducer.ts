import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import ProjectData from '../data/ProjectsData'

// Define a type for the slice state

interface IProjectImages{
    url:string,
    isMain:boolean
}
interface IProjectState {
    id:string,
    title:string,
    description:string,
    images:IProjectImages[],
    leads:string[],
    fundsRequired:number,
    fundsCollected:number,
    startDate:string,
    endDate:string,
    locations:string[],
    remarks:string
}

const initialState: IProjectState[] = ProjectData;

export const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    
  },
})

export const {  } = projectSlice.actions


export default projectSlice.reducer
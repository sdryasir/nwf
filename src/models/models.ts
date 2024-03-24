interface IProjectImages{
    url:string,
    isMain:boolean
}
export interface IProjectState {
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
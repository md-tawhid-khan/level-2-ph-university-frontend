import type { TAcademicSemesterData } from "./academicManagement.type"

export type TRegisteredSemester={
    _id:string,
    academicSemester:TAcademicSemesterData,
    name:string,
    status:string,
    startDate:string,
    endDate:string,
    maxCredit:number,
    minCredit:number
}
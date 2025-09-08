export type TAcademicSemesterData={
    _id:string,
    name:string,
    year:string,
    code:string,
    startMonth:string,
    endMonth:string,
    createdAt:string,
    updatedAt:string
}

export type TAcademicFaculty={
    _id:string,
    name:string
}

export type TAcademicDepartmentFaculty = {
    _id:string,
    name:string,
    createdAt:string,
    updatedAt:string,
}


export type TAcademicDepartment={
    _id:string,
    name:string,
    academicFaculty:TAcademicDepartmentFaculty
}
import { useGetAcademicSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi"

const AcademicSemester=()=>{

    const  {data}=useGetAcademicSemesterQuery(undefined)

    console.log(data)

    
    return <div>
    <h1>this is academicSemesterPage</h1>
    </div>
}
export default AcademicSemester ;
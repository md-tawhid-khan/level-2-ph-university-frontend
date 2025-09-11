import { Button, Col, Flex } from "antd"
import { PHForm } from "../../../components/form/PHForm"
import PHInput from "../../../components/form/PHInput"
import PHSelect from "../../../components/form/PHSelect"
import { useAddCourseMutation, useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement.api"
import type { TResponse } from "../../../types"
import { toast } from "sonner"

const CreateCourse=()=>{

    const {data:allCourseData}=useGetAllCoursesQuery(undefined)

    const [addCourse,{isLoading}]=useAddCourseMutation()

    const preRequisiteCourseOption=allCourseData?.data?.map(item=>({
        value:item._id,
        label:item.title
    }))

    const onSubmit=async(data)=>{
        const courseData={
            ...data,
            code:Number(data.code),
            credits:Number(data.credits),
            preRequisiteCourse:data?.preRequisiteCourse? data?.preRequisiteCourse.map(item=>({
                 course:item,
                 isDelete:false
            })) : [] ,
        }

        // console.log({courseData})
          try {
                const res=await addCourse(courseData) as TResponse<any>
                console.log({res})
                if(res?.error) {
                   toast.error(res?.error?.data?.message,)
                }
                else{
                    toast.success("course created successfully",)
                }
               
            } catch (error) {
                toast.error("something went wrong",)
                console.log(error)
            }
              
    }

    if(isLoading){
        return (<div><h1>loading -----------</h1></div>)
    }

    return (
    <Flex  justify='center' align="center" >
        <Col span={6}>
            <PHForm onSubmit={onSubmit}
             >              
                <PHInput type='text' name='title' label='Title' ></PHInput>
               <PHInput type='text' name='prefix' label='Prefix' ></PHInput>
               <PHInput type='text' name='credits' label='Credits' ></PHInput>
               <PHInput type='text' name='code' label='Code' ></PHInput>
               <PHSelect label='preRequisiteCourse' name="preRequisiteCourse" options={preRequisiteCourseOption}  mode='multiple'/>
                <Button htmlType="submit">submit</Button>
            </PHForm>
        </Col>
        </Flex>
        )
}
export default CreateCourse
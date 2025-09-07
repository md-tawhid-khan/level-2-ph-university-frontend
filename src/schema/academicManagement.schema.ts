import z from "zod";

export const academicSemesterSchema=z.object({
        name:z.string({message:'please select a name'}),
        year:z.string({message:'please select a year'}),
        startMonth:z.string({message:'please select a month'}),
        endMonth:z.string({message:'please select a month'})
    })
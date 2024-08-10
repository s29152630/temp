"use server";

import { Folder } from "@mui/icons-material";
import { ZodError, z } from "zod";


const FormSchema = z.object({
    folderName: z.string({
        required_error: "folderName Required",
        invalid_type_error: "Please enter string",
    }).min(3, { message: "Must be 3 or more characters long" }),
    folderName2: z.string({
        required_error: "folderName2 Required",
        invalid_type_error: "Please enter string",
    }).min(5, { message: "Must be 5 or more characters long" })
});
// .refine((data) => {
//     return data.folderName === "test"
// }, {
//     message: "folderName must be test"
// },);

export type Fields = {
    folderName: string,
    folderName2: string,
}

export type FormState = {
    message: string,
    error: Record<keyof Fields, string> | undefined,
    fieldValues: Fields
}

export default async function submitAction(prevState: FormState, formData: FormData): Promise<FormState> {

    const folderName = formData.get("folderName") as string
    const folderName2 = formData.get("folderName2") as string

    try {
        const result = FormSchema.parse({
            folderName: folderName,
            folderName2: folderName2,
        });

        return {
            message: "success",
            error: undefined,
            fieldValues: {
                folderName: "",
                folderName2: ""
            }
        }
    } catch (error) {
        const zodError = error as ZodError;
        const errorMap = zodError.flatten().fieldErrors;

        console.log(errorMap)
        return {
            message: zodError.message,
            error: {
                folderName: errorMap["folderName"]? errorMap["folderName"][0]:"",
                folderName2: errorMap["folderName2"]? errorMap["folderName2"][0]:"",
            },
            fieldValues: {
                folderName: folderName,
                folderName2: folderName2
            }
        }
    }
}
"use client"

import SubmitButton from "@/component/button/SubmitButton";
import submitAction, { FormState } from "@/lib/action/SubmitAction";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";

export default function Form() {

    const formRef = useRef<HTMLFormElement>(null);
    const [formState, formAction] = useFormState(submitAction, {
        message: "",
        error: undefined,
        fieldValues: {
            folderName: "",
            folderName2: "",
        }
    } as FormState);

    useEffect(() => {
        if (formState.message === "success") {
            formRef.current?.reset();
        }
    }, [formState]);

    return (
        <form ref={formRef} action={formAction}>
            <label>
                name:
                <input type="text" name="folderName" defaultValue={formState?.fieldValues.folderName}></input>
                {
                    formState?.error?.folderName ? formState.error.folderName : ""
                }
            </label>
            <label>
                name2:
                <input type="text" name="folderName2" defaultValue={formState?.fieldValues.folderName2}></input>
                {
                    formState?.error?.folderName2 ? formState.error.folderName2 : ""
                }
            </label>

            <SubmitButton></SubmitButton>
        </form>
    );

}
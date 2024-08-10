"use client";

import submitAction, { FormState } from "@/lib/action/SubmitAction";
import { useActionState, useEffect, useRef } from "react";


export default function Form2() {

    const formRef = useRef<HTMLFormElement>(null);
    const [formState, formAction, isPending] = useActionState(submitAction, {
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
            <button type="submit" disabled={isPending}>Submit</button>
        </form>
    );
}
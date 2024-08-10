"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
    const status = useFormStatus();

    return (
        <button disabled={status.pending} type="submit">Submit</button>
    )

}
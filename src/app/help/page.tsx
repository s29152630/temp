"use client";

import { useEffect } from "react";

export default function Help() {

    useEffect(() => {
        throw new Error('This is a test error');
      }, []);
      
    return (
        <>
            Help Page <br />
        </>
    );
}
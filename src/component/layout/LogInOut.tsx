"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function LogInOut() {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                Hello, {session.user?.name}
                {/* <h1>{session?.user.access_token}</h1> */}
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            <button onClick={() => signIn("github")}>Sign in</button>
        </>
    );
}
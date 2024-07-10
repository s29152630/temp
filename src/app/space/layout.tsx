import React from "react";

export default function Layout({
    children,
    spaceParallel,
}: Readonly<{
    children: React.ReactNode;
    spaceParallel: React.ReactNode;
}>) {
    return (
        <>
            {children}
            {spaceParallel}
        </>
    );
}

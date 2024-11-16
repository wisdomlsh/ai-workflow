'use client'
import React from "react";
import type {ReactNode} from "react";

const Layout = ({children}: { children: ReactNode }) => {
    return (
        <>
            {children}
        </>
    );
};


export default Layout;

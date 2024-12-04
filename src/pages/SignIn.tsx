import React from "react";
import { Auth } from "../components/Auth";
import { Appbar } from "../components/Appbar";
export const Signin = () => {
    return <>
        <Appbar/>
        <Auth type="signin" />;
    
    </>
};
'use client'

import { EProgressActionEnum, ProgressContext } from "@/context";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";

export default function PathnameWatcher() {
    const pathname = usePathname(); // Get the router object

    const { dispatch } = useContext(ProgressContext)

    useEffect(() => {

        const validPathName = pathname.split('/compare')[1]

        console.log("Pathname changed:", pathname, validPathName);

        if (validPathName) {
            dispatch({ type: EProgressActionEnum.UPDATE_SUBSTEP_STATUS_VIA_PATHNAME, payload: { subStepPathname: validPathName } })
        }

        // Perform any action when the pathname changes
    }, [pathname,dispatch]); // Runs when `router.pathname` changes

    return null; // This component does not render anything
}

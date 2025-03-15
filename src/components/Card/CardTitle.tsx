import { useContext } from "react"
import { CardContext } from "./Card"

import clsx from "clsx"

export default function CardTitle({children}: React.ComponentPropsWithoutRef<"p">){

    const ctx = useContext(CardContext) 
    return (
        <p className={clsx(ctx === "withImage" ? "mt-6" : '' , "text-lg/7 font-medium text-gray-900 text-center capitalize")}>{children}</p>
    )
}
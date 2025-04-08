import clsx from "clsx"

export default function CardTitle({children}: React.ComponentPropsWithoutRef<"p">){
    return (
        <p className={clsx("text-lg/7 font-medium text-gray-900 text-center capitalize")}>{children}</p>
    )
}
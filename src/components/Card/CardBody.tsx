

export default function CardBody({children}: React.ComponentPropsWithoutRef<"p">){
    return (
        <p className="leading-6 font-normal text-center text-gray-500">{children}</p>
    )
}
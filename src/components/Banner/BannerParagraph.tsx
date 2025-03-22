import { cva, type VariantProps } from "cva";
import { useBannerContext } from "./Banner";


const paragraph = cva({
    base: 'text-sm   ',
    variants: {
        intent: {
            header: ' font-medium ml-3 inline-block' ,
            body: 'ml-7 mt-4 inline-block'
        }, 
        colors:{
            error: 'text-red-600 bg-red-100',
            info: 'text-blue-600 bg-blue-100',
            congratulations:  'text-green-600 bg-green-100',
            attention: 'text-yellow-600 bg-yellow-100'
        }
    }
})


export interface BannerParagraphProps 
        extends React.HTMLAttributes<HTMLParagraphElement>, 
        VariantProps<typeof paragraph> {}


export default function BannerParagraph({children, intent}: BannerParagraphProps){
    const ctx = useBannerContext()
    console.log(ctx)
    return <p className={paragraph({intent})}>{children}</p>
}
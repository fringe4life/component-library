import { createContext, type JSX } from "react";
import CardBody from "./CardBody";
import CardIcon from "./CardIcon";
import CardTitle from "./CardTitle";


import {cva, type VariantProps} from 'cva'

const card = cva({
    base: 'hover:shadow-xl  w-96 relative flex flex-col justify-center gap-5 py-8 px-5 rounded-lg bg-gray-50',
    variants: {
        intent: {
            withImage: 'mt-6',
            withoutImage: ''
        }
    },
    defaultVariants: {
        intent: 'withImage'
    }
})


export interface CardProps extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {}


    export const CardContext = createContext<CardProps["intent"]>("withImage")

/**
 * @abstract a card to be used with the 3 compound components, hence they are attached below
 * @param children the children to be passed into the Card container 
 * @returns JSX.Element to be rendered onto the page
 */
const Card = ({children, intent}: CardProps): JSX.Element => {
    return (
        <CardContext.Provider value={intent}>
            <div className={card({intent})}>
                {children}
            </div>
        </CardContext.Provider>
        
    )
}


Card.Body = CardBody;
Card.Icon = CardIcon;
Card.Title = CardTitle;

export default Card;
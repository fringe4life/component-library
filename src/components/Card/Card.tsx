import type {  JSX } from "react";
import CardBody from "./CardBody";
import CardIcon from "./CardIcon";
import CardTitle from "./CardTitle";


import {cva, type VariantProps} from 'cva'

const card = cva({
    base: 'has-[img]:mt-6 hover:shadow-xl  w-96 relative flex flex-col justify-center gap-5 py-8 px-5 rounded-lg bg-gray-50',
    
})


export interface CardProps extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {}



/**
 * @abstract a card to be used with the 3 compound components, hence they are attached below
 * @param children the children to be passed into the Card container 
 * @returns JSX.Element to be rendered onto the page
 */
const Card = ({children}: CardProps): JSX.Element => {
    return (
            <div className={card()}>
                {children}
            </div>
        
    )
}


Card.Body = CardBody;
Card.Icon = CardIcon;
Card.Title = CardTitle;

export default Card;
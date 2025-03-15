import {cva, type VariantProps} from 'cva';


const badge = cva({
    base: 'py-0.5 px-3', 
    variants: {
        shape: {
            square: 'rounded-sm',
            pill: 'rounded-xl'
        },
        colorChoice: {
            gray: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
            red: 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100',
            yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
            green: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
            blue: 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100',
            indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100',
            purple: 'bg-violet-100 text-violet-800 dark:bg-violet-800 dark:text-violet-100',
            pink: 'bg-pink-100 text-pink-800 dark:bg-pink-800 dark:text-pink-100'
        }
    },
    
})

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badge> {}


export default function Badge({children, colorChoice, shape}: BadgeProps){
    return <span className={badge({colorChoice, shape})}>{children}</span>
}
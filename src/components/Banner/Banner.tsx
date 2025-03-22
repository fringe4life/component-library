
import { cva, type VariantProps } from 'cva'

import error from '../assets/error.svg'
import info from '../assets/info.svg'
import congratulations from '../assets/congratulations.svg'
import attention from '../assets/attention.svg'

const banner = cva({
    variants: {
        type: {
            error: {
                icon: error,
                color: 'red-600'
            },
            info: {
                icon: info,
                color: 'blue-600'
            },
            congratulations: {
                icon: congratulations,
                color: 'green-600'
            },
            attention: {
                icon: attention,
                color: 'yellow-600'
            }
        }
    }
})




export interface BannerProps extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof banner> {}

export default function Banner({children, type}: BannerProps){
    
    return (
        <div>
            {children}
        </div>
    )
}
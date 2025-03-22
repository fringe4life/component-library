
import { cva, type VariantProps } from 'cva'

import error from '../../assets/error.svg'
import info from '../../assets/info.svg'
import congratulations from '../../assets/congratulations.svg'
import attention from '../../assets/attention.svg'
import BannerParagraph from './BannerParagraph'
import { createContext, useContext } from 'react'

const banner = cva({
    base: 'mx-auto max-w-160 w-4/5 p-4 rounded-md',
    variants: {
        intent: {
            error: 'text-red-600 bg-red-100',
            info: 'text-blue-600 bg-blue-100',
            congratulations:  'text-green-600 bg-green-100',
            attention: 'text-yellow-600 bg-yellow-100'
        }
    }
})

type BannerContext = VariantProps<typeof banner>['intent']
const BannerContext = createContext<BannerContext | null>(null)

export const useBannerContext = () => {
    const ctx = useContext(BannerContext)
    if(!ctx) throw new Error('No banner context')
        return ctx
}


export interface BannerProps extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof banner> {}

export default function Banner({children, intent}: BannerProps){
    let icon = info
    switch(intent) {
        case 'attention':
            icon = attention
            break
        case 'error':
            icon = error
            break
        case 'congratulations':
            icon = congratulations
            break
    }
    return (
        <BannerContext.Provider value={intent}>
        <div className={banner({intent})}>
            <img className='text-xl inline-block' src={icon} alt='' />{children}
        </div>
        </BannerContext.Provider>
    )
}

Banner.Paragraph = BannerParagraph


/**
 * @param src the string to be supplied for the icon
 * @param alt the alternative text in case the image fails to load 
 * @returns an img tag with some styling 
 */
export default function CardIcon({src, alt}: React.ComponentPropsWithoutRef<"img">){
    return (
        <img className="absolute -translate-y-6 top-0 left-(--cardImg)" src={src} alt={alt} />
    )
}
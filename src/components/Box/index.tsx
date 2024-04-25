interface Props {
    alignItems: string
    marginLeft: string
    bg: string
    color: string
    p: number
    width: number
}

function Caixa({alignItems, marginLeft, bg, color, p, width}: Props) {
    return (
        <Caixa 
        alignItems = {alignItems}
        marginLeft = {marginLeft}
        bg = {bg}
        color = {color}
        p = {p}
        width = {width}
        />
    )
}


export default Caixa
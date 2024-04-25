import { Grid, GridItem } from "@chakra-ui/react"
import Caixa from "../Box"

interface Props {
    children: React.ReactNode
}

function LayoutBox(props: Props) {
    const {children} = props
    return (
        <div>
        <Grid className="box" templateColumns='1fr' templateRows='64px auto 64px'>
            <GridItem>
                <Caixa alignItems='center' marginLeft='5px' bg='#e8e8e8' color='black'  p={2.5} width={430} />
            </GridItem>
            <GridItem>
                {children}
            </GridItem>
        </Grid>
        </div>
    )
}

export default LayoutBox
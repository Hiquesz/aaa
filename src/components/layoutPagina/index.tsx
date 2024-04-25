import { Grid, GridItem } from "@chakra-ui/react"
import Footer from "../footer"
import Topo from "../header"

interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
    const {children} = props
    return (
        <div>
        <Grid className="grid" templateColumns='1fr' templateRows='64px auto 64px'>
            <GridItem>
                <Topo />
            </GridItem>
            <GridItem>
                {children}
            </GridItem>
            <GridItem>
                <Footer />
            </GridItem>
        </Grid>
        </div>
    )
}

export default Layout
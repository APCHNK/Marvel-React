import ComicsList from "../comicsList/ComicsList"
import AppBanner from "../appBanner/AppBanner"
import { Helmet } from "react-helmet"
const Comics = () => {
    return (
        <>  
            <Helmet>
                <meta
                    name="description"
                    content="Comics Page"
                    />
                <title>Comics Page</title>
            </Helmet>
            <AppBanner/>
            <ComicsList/>
        </>
    )
}

export default Comics
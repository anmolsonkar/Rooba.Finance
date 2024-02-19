import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";
import Invest from "./Invest";
import Main from "./Main";
import Partners from "./Partners";

const Home = () => {
    return (
        <>
            <Header />
            <Main />
            <Cards />
            <Invest />
            <Partners />
            <Footer />
        </>);
}

export default Home;
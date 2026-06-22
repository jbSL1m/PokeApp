import Header from "../components/header";
import Footer from "../components/footer";
import PokeSearch from "../components/pokeSearch";

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <h2>Use the search bar below to find the Pokemon you are battling.</h2>
            </main>
            <PokeSearch />
            <Footer />
        </div>
    );
};

export default Home;
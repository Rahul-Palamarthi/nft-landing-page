import Header from "./components/Header";
import HomeSection from "./HeroSection";
import Clients from "./Clients";
import Collections from "./Collections";
import Team from "./Team";
import Services from "./Services";
import Outro from "./Outro";
import Testimonials from "./Testimonials";
import Faqs from "./Faqs";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <main>
                <HomeSection />
                <Clients />
                <Collections />
                <Team />
                <Services />
                <Testimonials />
                <Faqs />
                <Outro />
            </main>
            <Footer />
        </>
    );
}

export default App;

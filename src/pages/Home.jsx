import Banner from "../components/Banner";
import CarBook from "../components/CarBook";
import ChooseUs from "../components/ChooseUs";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Pick from "../components/Pick";
import Plan from "../components/Plan";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <CarBook />
      <Plan />
      <Pick />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}

export default Home;

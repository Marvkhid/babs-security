import AboutUs from "./Components/AboutUs";
import Content from "./Components/Content";
import Duties from "./Components/Duties";
import Footer from "./Components/Footer";
import Footers from "./Components/Footers";
import Form from "./Components/Form";
import NavBar from "./Components/NavBar";
import Objective from "./Components/Objective";
import OtherServices from "./Components/OtherServices";
import Reviews from "./Components/Reviews";
import Services from "./Components/Services";






export default function Home() {
  return (
   <main>
    <NavBar />
    <Content />
    <AboutUs />
    <Services />
    <OtherServices />
    <Form />
    <Duties />
    <Reviews />
    <Objective />
    <Footer />
    <Footers />
 

   </main>
  );
}

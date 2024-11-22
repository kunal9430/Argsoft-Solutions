
import IndustriesServe from "./Components/IndustriesServe"
import NavBar from "./Components/NavBar"
import OurClients from "./Components/OurClients"
import OurSDLC from "./Components/OurSDLC"
import OurServices from "./Components/OurServices"
import TechStack from "./Components/TechStack"
import Ourproducts from "./Components/OurProducts"
import ClientsReview from "./Components/ClientsReview"
import ContactUs from "./Components/ContactUs"
import Footer from "./Components/Footer"


function App() {
   return (
    <>
    <NavBar />
    <div className="bg-gradient-to-r from-indigo-500 to-indigo-800">
      <OurClients />
      <OurServices />
      <OurSDLC />
      <TechStack />
      <IndustriesServe />
      <Ourproducts />
      <ClientsReview />
      <ContactUs />
      <Footer />
    </div>
    </>
  )
}

export default App

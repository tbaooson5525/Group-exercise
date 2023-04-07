import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import Product from "./components/Products";

export default function App () {
  return (
      <div>
          <Navbar/>
          <Heading/>
          <Product/>
          <Location/>
          <Footer/>
      </div>
  )
}
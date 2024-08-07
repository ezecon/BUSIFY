import { Footer } from "../../Components/Footer/Footer";
import { Gallary } from "../../Components/Gallary/Gallary";
import TopRoutes from "../../Components/TopRoutes/TopRoutes";
import WhyUs from "../../Components/WhyUs/WhyUs";


export default function Home() {
  return (
    <div>
        <WhyUs/>
        <Gallary/>
        <TopRoutes/>
        <Footer/>
    </div>
  )
}

import Booster from "./components/Boosters";
import Carrousel from "./components/Carrousel";
import Footer from "./components/Footer";
import Simulator from "./components/Simulator";

export default function Home() {
   return (
      <>
         <Carrousel />
         <Simulator />
         <Booster />
         <Footer />
      </>
   );
}

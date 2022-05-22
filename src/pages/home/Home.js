import Cards from "../../features/cards/Cards";
import Links from "../../features/links/Links";
import Navbar from "../../features/navbar/Navbar";
import Sliders from "../../features/sliders/Sliders"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Sliders />
      <Cards />
      <Links />
    </div>
  );
}

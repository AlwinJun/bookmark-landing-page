import Hero from "components/Hero";
import FeaturesTab from "components/FeaturesTab";
import DownloadExtensions from "components/DownloadExtensions";
import FAQs from "components/FAQs";
import Contact from "components/Contact";
import Footer from "components/Footer";

function App() {
  return (
    <div className="font-rubic text-grayish-blue" id="top">
      <Hero />
      <FeaturesTab />
      <DownloadExtensions />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

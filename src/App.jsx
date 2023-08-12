import Hero from "components/Hero";
import FeaturesTab from "components/FeaturesTab";
import DownloadExtensions from "components/DownloadExtensions";
import FAQs from "components/FAQs";
import Contact from "components/Contact";

function App() {
  return (
    <div className="font-rubic text-grayish-blue" id="top">
      <Hero />
      <FeaturesTab />
      <DownloadExtensions />
      <FAQs />
      <Contact />
    </div>
  );
}

export default App;

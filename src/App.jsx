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
      <main>
        <FeaturesTab />
        <DownloadExtensions />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

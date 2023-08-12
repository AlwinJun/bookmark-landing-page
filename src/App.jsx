import Hero from "components/Hero";
import FeaturesTab from "components/FeaturesTab";
import DownloadExtensions from "components/DownloadExtensions";

function App() {
  return (
    <div className="font-rubic text-grayish-blue" id="top">
      <Hero />
      <FeaturesTab />
      <DownloadExtensions />
    </div>
  );
}

export default App;

import { useState } from "react";
import data from "src/data";

export default function FeaturesTab() {
  const [tabs, setTabs] = useState(data.features);
  const [currentTab, setCurrentTab] = useState(0);

  const { image, title, desc } = tabs[currentTab];

  return (
    <section className="features my-8">
      <h2>Features</h2>
      <p className="text-body mx-auto mb-8 sm:w-3/4">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>

      <ul className="mb-8 flex flex-col px-4 last-of-type:border-b sm:mb-12 sm:flex-row sm:justify-center sm:last-of-type:border-b-0">
        {tabs.map((tab, index) => {
          const activeBorder = currentTab === index ? " border-b-soft-red" : "";
          return (
            <li
              key={tab.id}
              className={`${activeBorder} last: border-t border-slate-300 py-1 text-base  sm:border-b sm:border-t-0 
              `}
            >
              <button
                type="button"
                className={`${activeBorder} border-b sm:mx-4 sm:border-b-0`}
                onClick={() => setCurrentTab(index)}
              >
                {tab.tabButton}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="grid items-center lg:grid-cols-2 lg:justify-between lg:gap-20">
        <div className="relative mb-6">
          <img src={image} alt="illustration" className="mx-auto" />
          <div className="blob blob-left"></div>
        </div>
        <div className="mt-8 lg:text-left">
          <h3 className="mb-2 text-primary font-medium text-dark-blue lg:text-2xl">
            {title}
          </h3>
          <p className="text-body mb-3">{desc}</p>
          <button
            type="button"
            className="hidden rounded-md bg-soft-blue p-2 text-sm text-white lg:block"
          >
            More info
          </button>
        </div>
      </div>
    </section>
  );
}

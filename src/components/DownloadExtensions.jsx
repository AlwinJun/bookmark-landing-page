import chrome from "images/logo-chrome.svg";
import firefox from "images/logo-firefox.svg";
import opera from "images/logo-opera.svg";
import dots from "images/bg-dots.svg";

export default function DownloadExtensions() {
  return (
    <section className="download-at my-8  mt-14">
      <h2> Download the extension</h2>
      <p className="text-body mx-auto sm:w-3/4">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <div className="mx-auto mt-8 flex w-[90%] flex-row flex-wrap justify-center gap-8 md:h-[24rem] md:flex-nowrap">
        <article className=" h-fit max-w-[16rem]  shadow-xl">
          <div className="flex flex-col place-items-center p-4 pt-8">
            <img src={chrome} alt="chrome" className="mb-6" />
            <p className="mb-1 text-lg font-medium text-dark-blue">
              Add to Chrome
            </p>
            <p className="text-sm"> Minimum version 62 </p>
          </div>
          <img src={dots} alt="dots" />
          <div className="p-4">
            <button
              type="button"
              className="text-white rounded-md bg-soft-blue px-4 py-2 text-xs"
            >
              Add & Install Extension
            </button>
          </div>
        </article>
        <article className=" h-fit max-w-[16rem]  shadow-xl md:self-center">
          <div className="flex flex-col place-items-center p-4 pt-8">
            <img src={firefox} alt="chrome" className="mb-6" />
            <p className="mb-1 text-lg font-medium text-dark-blue">
              Add to Firefox
            </p>
            <p className="text-sm"> Minimum version 55 </p>
          </div>
          <img src={dots} alt="dots" />
          <div className="p-4">
            <button
              type="button"
              className="text-white rounded-md bg-soft-blue px-4 py-2 text-xs"
            >
              Add & Install Extension
            </button>
          </div>
        </article>
        <article className=" h-fit max-w-[16rem]  shadow-xl md:self-end">
          <div className="flex flex-col place-items-center p-4 pt-8">
            <img src={opera} alt="chrome" className="mb-6" />
            <p className="mb-1 text-lg font-medium text-dark-blue">
              Add to Opera
            </p>
            <p className="text-sm"> Minimum version 46 </p>
          </div>
          <img src={dots} alt="dots" />
          <div className="p-4">
            <button
              type="button"
              className="text-white rounded-md bg-soft-blue px-4 py-2 text-xs"
            >
              Add & Install Extension
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

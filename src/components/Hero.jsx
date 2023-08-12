import heroIllustration from "images/illustration-hero.svg";
import Navbar from "components/Navbar";
import Buttons from "components/Buttons";

const Hero = () => {
  return (
    <>
      <Navbar />
      <section className="hero mb-8 mt-[7rem] overflow-hidden px-4 py-6 md:px-10 lg:mt-[8rem] lg:grid lg:grid-cols-2 lg:items-center lg:justify-center lg:gap-8 lg:px-14">
        <div className="relative lg:order-2">
          <img src={heroIllustration} alt="illustration" className="mx-auto" />

        </div>
        <div className="mt-10 text-center lg:order-1 lg:text-left">
          <h1 className="mx-auto mb-5 w-11/12 text-2xl font-medium text-dark-blue sm:text-3xl lg:mx-0 lg:text-4xl xl:text-5xl">
            A Simple Bookmark Manager
          </h1>
          <p className="text-body mb-5">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex flex-col justify-center  gap-4  xsm:flex-row xsm:items-center lg:justify-start">
            <Buttons
              type="button"
              btnClass="rounded-md bg-soft-blue px-3 py-2 text-base text-white lg:px-4 lg:py-2"
              link="#"
              text="Get it on Chrome"
              linkClass="text-sm lg:text-base xl:text-primary"
            />
            <Buttons
              type="button"
              btnClass="rounded-md bg-white px-3 py-2 text-base text-dark-blue shadow-xl lg:px-4 lg:py-2"
              link="#"
              text=" Get it on Firefox"
              linkClass="text-sm lg:text-base xl:text-primary"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

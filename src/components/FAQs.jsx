import Accordion from "components/Accordion";
import data from "src/data.js";

export default function FAQs() {
  return (
    <section className="mx-auto my-8 mt-14 max-w-xl px-8 text-center">
      <h2>Frequently Asked Questions</h2>
      <p className="text-body mx-auto sm:w-[90%]">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <section className="mt-8 border-t border-slate-300">
        <Accordion data={data.faqs} />
      </section>
      <button className="mx-auto mt-6 rounded-md bg-soft-blue px-4 py-2 text-white">
        <a href="#">More info</a>
      </button>
    </section>
  );
}

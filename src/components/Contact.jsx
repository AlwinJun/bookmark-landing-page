import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");

  return (
    <section className="mt-14 bg-soft-blue px-8 py-12">
      <div className="mx-auto max-w-md text-center">
        <p className="text-body mb-1 tracking-[0.25em] text-white">
          35,000+ already joined
        </p>
        <h2 className="mb-4 text-white">
          Stay up-to-date with what we’re doing
        </h2>
        <form action="" className="flex flex-col gap-4 sm:flex-row">
          <div className="flex w-full flex-col">
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-8 rounded-md border-2 p-2 text-sm text-slate-700  outline-none placeholder:text-slate-400 "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="h-8 w-full rounded-md bg-soft-red px-4 text-sm text-white sm:w-[30%]"
          >
            Contact
          </button>
        </form>
      </div>
    </section>
  );
}

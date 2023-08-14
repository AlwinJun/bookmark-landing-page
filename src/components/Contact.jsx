import { useState } from "react";

import Buttons from "components/Buttons";

import error from "images/icon-error.svg";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  return (
    <section
      className="mx-auto mt-14 max-w-8xl bg-soft-blue px-8 py-12"
      id="contact"
    >
      <div className="mx-auto max-w-md text-center">
        <p className="text-body mb-1 tracking-[0.25em] text-white">
          35,000+ already joined
        </p>
        <h2 className="mb-4 text-white">
          Stay up-to-date with what we’re doing
        </h2>
        <form
          action=""
          className="flex flex-col gap-4 sm:flex-row"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            const emailRegex =
              /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            emailRegex.test(email)
              ? setIsValidEmail(true)
              : setIsValidEmail(false);
          }}
        >
          <div
            className={`flex w-full flex-col ${
              !isValidEmail && "animate-shake"
            } `}
          >
            <div className="relative grid">
              <input
                type="email"
                placeholder="Enter your email address"
                className={`h-8 rounded-md border-2 p-2 text-sm text-slate-700  outline-none placeholder:text-slate-400 ${
                  !isValidEmail && "rounded-b-none border-soft-red"
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="absolute right-2 top-1/2 w-4 -translate-y-1/2">
                {!isValidEmail && <img src={error} alt="error" />}
              </div>
            </div>
            {!isValidEmail && (
              <span className="scale rounded-md rounded-t-none bg-soft-red px-2 pb-1 text-left text-xs font-light italic text-white">
                "Oops, make sure it's a valid email"
              </span>
            )}
          </div>
          <Buttons
            type="submit"
            btnClass="h-8 w-full rounded-md bg-soft-red px-4 text-sm text-white sm:w-[30%] hover:border hover:border-soft-red hover:text-soft-red hover:bg-white active:scale-95"
            text="Contact"
          />
        </form>
      </div>
    </section>
  );
}

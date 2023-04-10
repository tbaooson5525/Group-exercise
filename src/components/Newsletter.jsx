export default function Newsletter() {
  return (
    <section>
      {/* Container */}
      <div className="mx-4">
        {/* Newsletter-container */}
        <div className="pb-5 pt-12 px-5">
          <div className="text-center mb-9">
            <h2 className="text-blue-900 text-2xl mp-3">Newsletter</h2>
            <p className="my-4 text-base font-light text-gray-500">
              Sign up and receive 20% off your first online order!
            </p>
          </div>
          <div className="relative w-full mx-auto max-w-lg">
            <div className="mr-3 w-full">
              <input
                className="leading-6 py-1.5 pl-2.5 pr-14 w-full text-[15px] font-extralight text-gray-200 border border-gray-300 rounded"
                type="text"
                placeholder="your@email.com"
              />
            </div>
            <button className="absolute top-1 right-5 opacity-10 hover:opacity-60">
              <svg
                className="svg-icon icon-mail"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.33335 3.33337H16.6667C17.5834 3.33337 18.3334 4.08337 18.3334 5.00004V15C18.3334 15.9167 17.5834 16.6667 16.6667 16.6667H3.33335C2.41669 16.6667 1.66669 15.9167 1.66669 15V5.00004C1.66669 4.08337 2.41669 3.33337 3.33335 3.33337Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M18.3334 5L10 10.8333L1.66669 5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

<<<<<<< Updated upstream
import Offcanvas from "./OffCanvas";

export default function NavBar() {
  return (
    <section>
      {/*Container */}
      <div className="relative" >
        {/* Navbar Container */}
        <div className="fixed top-0 left-0 right-0">

        <div className="flex justify-between items-center h-16 w-auto ml-5 mr-5 bg-white ">
          {/* Navbar Offcanvas */}
          <Offcanvas></Offcanvas>

          {/* Icon web */}
          <div>
            <img
                className="w-32"
              src="https://cdn.shopify.com/s/files/1/0691/4641/files/Frame_3_387x81.png?v=1613533611"
              alt=""
            />
          </div>
          {/* catelogy */}
          <div className="hidden lg:block ">

          </div>
          {/* Icon cart */}
          <div>
            <div className="flex items-centers gap-4">
              <a href="">
                <svg
                  className="w-5"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10L15 4M21 10H3M21 10L19.6431 16.7845C19.2692 18.6542 17.6275 20 15.7208 20H8.27922C6.37249 20 4.73083 18.6542 4.35689 16.7845L3 10M3 10L9 4"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="">
                <svg
                  className="w-5"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Interface / Search_Magnifying_Glass">
                    <path
                      id="Vector"
                      d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
                      stroke="#000000"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </a>
            </div>
        </div>
          </div>
        </div>
      </div>
    </section>
=======
export default function NavBar() {
  return (
    <div>
      {/*Container */}
      <div>
        {/* Navbar Container */}
        <div>
          {/* Icon web */}
          <div></div>
          {/* catelogy */}
          <div></div>
          {/* Icon cart */}
          <div></div>
        </div>
      </div>
    </div>
>>>>>>> Stashed changes
  );
}

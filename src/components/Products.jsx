export default function Product () {
    return (
        <section>
            {/* Product Header */}
            <div className="py-16 mx-3.5 mt-12 text-center">
                <h2 className="text-3xl text-sky-900 tracking-[.035em]">We make products that help you create art everyday.</h2>
            </div>

            {/* Product Grid */}
            <div className="grid place-items-center grid-cols-2 md:grid-cols-3 px-[53px] mb-4 gap-x-[20.062px]">
                {/* Product 1 */}
                <div className="text-center md:mb-8">
                    <img className="self-center" src="product-1-sm.jpg" alt="" />
                    <p className="text-[#4f4f4f] text-[10.25px] tracking-widest mt-5">POKETO</p>
                    <h4 className="text-[#06356a] mt-[6.6875px] leading-[1.2] text-lg">
                        <a href="#">Circle Block Notepad</a>
                    </h4>
                    <p className="text-[17px] text-[#4f4f4f] leading-7">$8.00</p>
                </div>

                {/* Product 2 */}
                <div className="text-center md:mb-8">
                    <img className="self-center" src="product-2-sm.jpg" alt="" />
                    <p className="text-[#4f4f4f] text-[10.25px] tracking-widest mt-5">POKETO</p>
                    <h4 className="text-[#06356a] mt-[6.6875px] leading-[1.2] text-lg">
                        <a href="#">Modern Fruit Postcards</a>
                    </h4>
                    <p className="text-[17px] text-[#4f4f4f] leading-7">$10.00</p>
                </div>

                {/* Product 3 */}
                <div className="text-center md:mb-8">
                    <img className="self-center" src="product-3-sm.jpg" alt="" />
                    <p className="text-[#4f4f4f] text-[10.25px] tracking-widest mt-5">POKETO</p>
                    <h4 className="text-[#06356a] mt-[6.6875px] leading-[1.2] text-lg">
                        <a href="#">Lucite Tape Dispenser</a>
                    </h4>
                    <p className="text-[17px] text-[#4f4f4f] leading-7">$24.00</p>
                </div>

                {/* Product 4 */}
                <div className="text-center md:mb-8">
                    <img className="self-center" src="product-4-sm.jpg" alt="" />
                    <p className="text-[#4f4f4f] text-[10.25px] tracking-widest mt-5">POKETO</p>
                    <h4 className="text-[#06356a] mt-[6.6875px] leading-[1.2] text-lg">
                        <a href="#">Lucite Shape Stands</a>
                    </h4>
                    <p className="text-[17px] text-[#4f4f4f] leading-7">from $12.00</p>
                </div>

                {/* Product 5 */}
                <div className="text-center md:mb-8">
                    <img className="self-center" src="product-5-sm.jpg" alt="" />
                    <p className="text-[#4f4f4f] text-[10.25px] tracking-widest mt-5">POKETO</p>
                    <h4 className="text-[#06356a] mt-[6.6875px] leading-[1.2] text-lg">
                        <a href="#">Eric Trine Octahedron Ring Planter</a>
                    </h4>
                    <p className="text-[17px] text-[#4f4f4f] leading-7">$55.00</p>
                </div>

                {/* Product 6 */}
                <div className="text-center md:mb-8">
                    <img className="self-center" src="product-6-sm.jpg" alt="" />
                    <p className="text-[#4f4f4f] text-[10.25px] tracking-widest mt-5">POKETO</p>
                    <h4 className="text-[#06356a] mt-[6.6875px] leading-[1.2] text-lg">
                        <a href="#">Modernist's Coloring Book Vol. 2</a>
                    </h4>
                    <p className="text-[17px] text-[#4f4f4f] leading-7">Sold out</p>
                </div>            

            </div>

            {/* Sale Picture  */}
            <div className="mx-[53px] text-center bg-cover bg-[url('sale-notebook.jpg')]">
                <a href="">
                    <p className="text-white text-sm md:text-base lg:text-xl pt-9 max-w-[300px] mx-auto">Don't miss out!</p>
                    <p className="text-white py-5 max-w-[280px] mx-auto text-3xl">25% OFF NOTEBOOKS</p>
                </a>
            </div>

            {/* Notebook Grid */}
            <div>
                {/* Product Grid */}
                <div className="grid place-items-center grid-cols-2 md:grid-cols-4 px-[53px] mb-4 gap-x-[20.062px]">
                    {/* Product 1 */}
                    <div className="text-center md:mb-8">
                        <img className="self-center" src="notebook-1.jpg" alt="" />
                        <p className="text-[#4f4f4f] text-[10.25px] tracking-widest mt-5">POKETO</p>
                        <h4 className="text-[#06356a] mt-[6.6875px] leading-[1.2] text-lg">
                            <a href="#">Solid Object Notebook</a>
                        </h4>
                        <p className="text-[17px] text-[#4f4f4f] leading-7">$18.00</p>
                        <p className="line-through text-[#a7a7a7] decoration-1">$24.00</p>
                    </div>

                    {/* Product 2 */}
                    <div className="text-center md:mb-8">
                        <img className="self-center" src="notebook-2.jpg" alt="" />
                        <p className="text-[#4f4f4f] text-[10.25px] tracking-widest mt-5">POKETO</p>
                        <h4 className="text-[#06356a] mt-[6.6875px] leading-[1.2] text-lg">
                            <a href="#">Solid Object Notebook</a>
                        </h4>
                        <p className="text-[17px] text-[#4f4f4f] leading-7">$18.00</p>
                        <p className="line-through text-[#a7a7a7] decoration-1">$24.00</p>
                    </div>

                    {/* Product 3 */}
                    <div className="text-center md:mb-8">
                        <img className="self-center" src="notebook-3.jpg" alt="" />
                        <p className="text-[#4f4f4f] text-[10.25px] tracking-widest mt-5">POKETO</p>
                        <h4 className="text-[#06356a] mt-[6.6875px] leading-[1.2] text-lg">
                            <a href="#">Solid Object Notebook</a>
                        </h4>
                        <p className="text-[17px] text-[#4f4f4f] leading-7">$18.00</p>
                        <p className="line-through text-[#a7a7a7] decoration-1">$24.00</p>
                    </div>

                    {/* Product 4 */}
                    <div className="text-center md:mb-8">
                        <img className="self-center" src="notebook-4.jpg" alt="" />
                        <p className="text-[#4f4f4f] text-[10.25px] tracking-widest mt-5">POKETO</p>
                        <h4 className="text-[#06356a] mt-[6.6875px] leading-[1.2] text-lg">
                            <a href="#">Solid Object Notebook</a>
                        </h4>
                        <p className="text-[17px] text-[#4f4f4f] leading-7">$18.00</p>
                        <p className="line-through text-[#a7a7a7] decoration-1">$24.00</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
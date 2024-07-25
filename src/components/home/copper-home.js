import React from 'react';

const CopperHome = () => {
    return (
        <div className="px-[8%]">
            <div className="flex lg:flex-row ">
                <div className="mb-16 rounded-2xl bg-[#141D38] p-24 lg:w-[55%]">
                    <p className="pe-40 text-white">
                        Copper Clad Laminates (CCLs) are vital in the production
                        of Printed Circuit Boards (PCBs), which form the
                        foundation of most electronic devices. These laminates
                        consist of a thin layer of copper foil bonded to a
                        reinforcing substrate, typically made from fiberglass or
                        other insulating materials. The copper provides
                        excellent electrical conductivity, essential for
                        creating the intricate pathways that connect various
                        components on a PCB. The substrate, on the other hand,
                        offers the necessary mechanical strength and stability,
                        ensuring the PCB can withstand physical stresses and
                        maintain its structural integrity over time.
                    </p>
                </div>
                <div className="lg:w-[45%]">
                    <img src="/assets/home/image.png" alt="Copper clad" />
                </div>
            </div>
        </div>
    );
};

export default CopperHome;

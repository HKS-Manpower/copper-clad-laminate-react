import React from 'react';

const AboutUs = () => {
    return (
        <div className="px-[8%] py-[3%]">
            <div className="flex items-center justify-between">
                <div className="w-[40%]">
                    <h1 className="Heading ">About Us</h1>
                    <div className="w-[18%] border border-[#E51E25]"></div>
                    <div className="Text mt-8">
                        At THE COPPER CLAD LAMINATES, we specialize in
                        connecting Indian OEMs with top-tier global
                        manufacturers of copper clad laminates. Our mission is
                        to simplify the sourcing process, foster seamless
                        communication, and ensure access to high-quality
                        materials essential for the production of printed
                        circuit boards (PCBs). With a user-friendly interface,
                        verified listings, and direct inquiry capabilities, we
                        bridge the gap between innovation and quality in the
                        electronics industry. Join us and experience a
                        streamlined approach to finding and collaborating with
                        the best CCL manufacturers worldwide.
                    </div>
                    <div className="Text mt-10 w-fit cursor-pointer rounded-full border border-[#0E0E0E] p-4 px-10 font-medium text-[#0E0E0E]">
                        Learn More
                    </div>
                </div>
                <div className="w-[50%]">
                    <img alt="" src="/public/assets/images/About_us.jpg" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

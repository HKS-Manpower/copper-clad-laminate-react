import React from 'react';

const AboutUs = ({ aboutData, showOneData }) => {
    const dataToDisplay = showOneData ? aboutData.slice(0, 1) : aboutData;

    return (
        <div className=" flex flex-col gap-16 px-[8%] py-[3%]">
            {dataToDisplay?.map((item, index) => (
                <div
                    key={index}
                    className={`flex items-center justify-between ${item.bgColor}`}
                >
                    <div className={`mx-auto w-[40%] ${item.orderClass}`}>
                        <h1 className={`Heading ${item.textColor}`}>
                            {item.heading}
                        </h1>
                        <div className="w-[18%] border border-[#E51E25]"></div>
                        <div className={`Text mt-8 ${item.textColor}`}>
                            {item.description}
                        </div>

                        {item.buttonText && (
                            <div className="Text mt-10 w-fit cursor-pointer rounded-full border border-[#0E0E0E]  p-4 px-10 font-medium text-[#0E0E0E]">
                                {item.buttonText}
                            </div>
                        )}
                    </div>
                    <div className="w-[50%]">
                        <img alt={item.heading} src={item.imageSrc} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AboutUs;

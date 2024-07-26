import React from 'react';

const AboutUs = ({ aboutData, showOneData, orderClass }) => {
    const dataToDisplay = showOneData ? aboutData.slice(0, 1) : aboutData;

    return (
        <div className=" flex flex-col gap-16 px-[8%] py-[3%]">
            {dataToDisplay?.map((item, index) => (
                <div
                    key={index}
                    className={`flex items-center justify-between ${item.bgColor}`}
                >
                    <div
                        className={`mx-auto lg:w-[40%]  ${
                            orderClass && index === 0
                                ? 'order-2'
                                : item.orderClass
                        }`}
                    >
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
                    <div className=" bg-yellow-200 lg:w-[53%]">
                        <img alt={item.heading} src={item.imageSrc} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AboutUs;

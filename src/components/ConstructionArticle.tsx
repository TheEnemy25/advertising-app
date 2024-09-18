import React from "react";
import Button from "./Button";

interface ConstructionArticleProps {
    title: string;
    imageSrc: string;
    sections: {
        number: string;
        heading: string;
        description: string;
    }[];
    buttonLabel: string;
    buttonBorderColor: string;
}

const ConstructionArticle: React.FC<ConstructionArticleProps> = ({
    title,
    imageSrc,
    sections,
    buttonLabel,
    buttonBorderColor,
}) => {
    return (
        <article className="lg:px-20 pb-20 bg-gray-800 w-full h-full flex items-center justify-center mx-auto flex-col">
            <div className="flex">
                <img src={imageSrc} alt={title} />
            </div>
            <div className="mt-10">
                <h1 className="text-5xl font-roboto text-lime-400 text-center">
                    {title}
                </h1>
                <div className="flex mt-10 px-10 lg:px-0 justify-between flex-col lg:flex-row w-full">
                    {sections.map((section, index) => (
                        <div key={index} className="flex flex-col lg:flex-row">
                            <div>
                                <h1 className="text-5xl font-roboto text-lime-400">{section.number}</h1>
                                <p className="mt-5 mb-3 text-white">{section.heading}</p>
                                <p className="text-gray-400">{section.description}</p>
                            </div>

                            {index < sections.length - 1 && (
                                <div className="my-10 lg:my-0 lg:mt-0 flex lg:w-1 lg:mx-10 ">
                                    <hr className="w-full h-1 lg:w-1 lg:h-full bg-lime-400 rounded-3xl" />
                                </div>
                            )}

                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center mt-20">
                    <Button borderColor={buttonBorderColor}>{buttonLabel}</Button>
                </div>
            </div>
        </article>
    );
};

export default ConstructionArticle;

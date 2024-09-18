import React from "react";
import Button from "./Button";

interface ProductArticleProps {
  headingNumber?: string;
  headingColor?: string;
  title: string;
  description: string;
  imageSrc: string;
  buttonLabel: string;
  buttonBorderColor: string;
}

const ProductArticle: React.FC<ProductArticleProps> = ({
  headingNumber,
  headingColor = "text-lime-400",
  title,
  description,
  imageSrc,
  buttonLabel,
  buttonBorderColor,
}) => {
  return (
    <article className="flex flex-col bg-black w-full h-full py-20 lg:pl-20 pr-0">
      {headingNumber && (
        <h1 className={`${headingColor} text-6xl font-roboto pl-10 lg:pl-4`}>
          {headingNumber}
        </h1>
      )}
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between  pl-10 lg:pl-0">
        <div className="pt-24 w-full">
          <h1 className="text-3xl font-roboto text-white">{title}</h1>
          <p className="text-gray-400 max-w-[583px]">{description}</p>
          <div className="flex items-center justify-center mt-20 lg:justify-start">
            <Button borderColor={buttonBorderColor}>{buttonLabel}</Button>
          </div>
        </div>
        <div className="flex mt-10">
          <img src={imageSrc} alt={title} />
        </div>
      </div>
    </article>
  );
};

export default ProductArticle;

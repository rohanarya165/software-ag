import React from "react";
import BannerAG from "../banner/BannerAG";

type Props = {};

const QuestionOne = (props: Props) => {
  return (
    <div>
      <BannerAG />
      <div className="m-8 text-[20px]">
        <div className="text-center">
          This Web app is made up of React.js Type-script and library used for
          this is AntDesign, TailwindCSS
        </div>
        <div className="text-center">
          This layout contains header footer left pannel(Slider menubar which
          redirect to answers of all the questions) and content. The above one
          is Infographic Carousel
        </div>
      </div>
    </div>
  );
};

export default QuestionOne;

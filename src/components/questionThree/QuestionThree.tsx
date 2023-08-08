import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import CardAG from "./CardAG";
import { cardData } from "./CardData";

type Props = {};

const QuestionThree = (props: Props) => {
  return (
    <div>
      <div>
        <img
          src="https://marketplace.canva.com/EAE2cQaUHVA/1/0/1600w/canva-black-minimal-motivation-quote-linkedin-banner-HoRi-2buBWk.jpg"
          className="h-auto max-w-full"
          alt="..."
        />
      </div>
      <div className="flex justify-between flex-wrap my-4">
        <Select
          defaultValue="All"
          style={{ width: 120 }}
          onChange={() => {}}
          options={[
            { value: "All", label: "All" },
            { value: "example", label: "example" },
            { value: "example - 2", label: "example - 2" },
          ]}
        />
        <Input
          style={{ width: 120 }}
          placeholder="Enter your username"
          suffix={<SearchOutlined />}
        />
      </div>
      <div className="my-4 flex justify-between gap-4 flex-wrap">
        {cardData.map((item: any) => {
          return <CardAG title={item.title} desc={item.desc} />;
        })}
      </div>
    </div>
  );
};

export default QuestionThree;

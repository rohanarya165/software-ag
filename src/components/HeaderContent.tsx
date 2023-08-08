import { Input } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { SearchOutlined , TrademarkCircleFilled } from "@ant-design/icons";

type Props = {};

const HeaderContent = (props: Props) => {
  return (
    <div className="mt-2 mx-4 lg:flex md:flex gap-8">
      <Input
        style={{ height: "45px" }}
        placeholder="Enter your username"
        suffix={<SearchOutlined />}
      />
      <AppstoreOutlined style={{ color: "white", fontSize: "40px" }} />
      <TrademarkCircleFilled style={{ color: "white", fontSize: "40px" }} />
    </div>
  );
};

export default HeaderContent;

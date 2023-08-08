import { Input } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";

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
     <div className="h-[44px] w-[70px] bg-white rounded-full"></div>
    </div>
  );
};

export default HeaderContent;

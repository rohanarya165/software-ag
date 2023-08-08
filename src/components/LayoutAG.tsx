import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CaretRightFilled,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Space } from "antd";
import { Footer } from "antd/es/layout/layout";
import QuestionOne from "./questionOne/QuestionOne";
import QuestionTwo from "./questionTwo/QuestionTwo";
import QuestionThree from "./questionThree/QuestionThree";
import HeaderContent from "./HeaderContent";

const { Header, Sider, Content } = Layout;

const LayoutAG: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setselectedKey] = useState("1");
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const viewContent = () => {
    switch (selectedKey) {
      case "1":
        return <QuestionOne />;
      case "2":
        return <QuestionTwo />;
      case "3":
        return <QuestionThree />;
      default:
        return <QuestionOne />;
    }
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{minHeight : "100vh"}}>
        <div className="demo-logo-vertical mt-6 " />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={(e) => {
            setselectedKey(e.key);
          }}
          items={[
            {
              key: "1",
              icon: <CaretRightFilled />,
              label: "Question-1",
            },
            {
              key: "2",
              icon: <CaretRightFilled />,
              label: "Question-2",
            },
            {
              key: "3",
              icon: <CaretRightFilled />,
              label: "Question-3",
            },
          ]}
          style={{padding: collapsed ? "0px" : "0px 20px"}}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#1776bf" , height : "auto" }}>
          <div className="flex justify-between flex-wrap">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <HeaderContent/>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
          }}
        >
          {viewContent()}
        </Content>
        <Footer style={{background: "#1776bf" }}> <div className="text-white text-center">Footer</div></Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutAG;

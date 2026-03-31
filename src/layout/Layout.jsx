import { Layout } from "antd";
import { Outlet, useOutletContext } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const { Content, Header: AntHeader,Footer:AntFooter } = Layout;

const AppLayout = () => {

  return (
    <Layout style={{ minHeight: "100vh", fontFamily: "Poppins, sans-serif" }}>

      {/* Main Layout */}
      <Layout
      >
        {/* Header */}
        <AntHeader
          className="!p-0 !h-auto bg-gray-50 sticky top-0 z-20"
          style={{ padding: 0, height: "auto", lineHeight: "normal" }}
        >
          <Header />
        </AntHeader>

        {/* Content */}
        <Content className="bg-white">
            <Outlet />
        </Content>
         {/* Footer */}
        <AntFooter
          className="!p-0 !h-auto bg-gray-50 sticky top-0 z-20"
          style={{ padding: 0, height: "auto", lineHeight: "normal" }}
        >
          <Footer />
        </AntFooter>
      </Layout>
    </Layout>
  );
};

export const useAppLayout = () => {
  return useOutletContext();
};

export default AppLayout;
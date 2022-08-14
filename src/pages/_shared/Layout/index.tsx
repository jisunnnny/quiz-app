import { Outlet } from "react-router-dom";
import Header from "../Header";

import { CommonLayout, ContentsBox } from "./layout.style";

const Layout = () => {
  return (
    <CommonLayout>
      <Header />
      <ContentsBox>
        <Outlet />
      </ContentsBox>
    </CommonLayout>
  );
};

export default Layout;

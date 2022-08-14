import { useNavigate } from "react-router-dom";
import { Logo } from "assets/svgs";

import { HeaderBox } from "./header.style";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderBox>
      <Logo type="button" onClick={() => navigate("/")} width={150} height={60} />
    </HeaderBox>
  );
};

export default Header;

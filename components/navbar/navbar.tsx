import { LoginButton, Header } from "./navbar.style";
import Image from "next/image";
const Navbar = () => {
  return (
    <Header>
      <Image src="/images/logo.png" alt="navbar logo" width={50} height={50} />
      <nav>
        <LoginButton>Login</LoginButton>
      </nav>
    </Header>
  );
};

export default Navbar;

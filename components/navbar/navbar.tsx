import { LoginButton, Header } from "./navbar.style";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <Header>
      <Link href="/" onClick={() => window.location.reload()}>
        <Image
          src="/images/logo.png"
          alt="navbar logo"
          width={50}
          height={50}
        />
      </Link>
      <nav>
        <LoginButton>Login</LoginButton>
      </nav>
    </Header>
  );
};

export default Navbar;

import { LoginButton, Header } from "./navbar.style";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { SearchContext } from "../../contexts/search-context";
const Navbar = () => {
  const { setSearched } = useContext(SearchContext);
  return (
    <Header>
      <Link href="/" onClick={() => setSearched(false)}>
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

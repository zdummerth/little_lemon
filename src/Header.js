import logo from "./assets/logo.png";
import Nav from "./Nav";
export default function Header() {
  return (
    <header>
      <img
        // src="https://cdn.glitch.com/6f1d3c1e-1c5b-4b7e-9f0e-5b1b0f0b0b0f%2Flogo.svg?v=1625729386329"
        src={logo}
        alt="logo"
      />
      <Nav />
    </header>
  );
}

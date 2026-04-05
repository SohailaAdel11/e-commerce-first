import logo from "./photos/logo1.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";

export default function Navbar() {
  return (
    <div style={{ display: "flex" }}>
      <img src={logo} alt="logo" />
      <h5 style={{ color: "#FE8A00" }}>
        Minimal <span style={{ color: "#F61B5A" }}>Shop</span>ping
      </h5>
      {/* <FontAwesomeIcon icon={byPrefixAndName.fas["user"]} /> */}
    </div>
  );
}

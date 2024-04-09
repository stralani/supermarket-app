import "./Header.scss";
import { TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Dropdown from "../../Components/Dropdown";

function Header() {
  return (
    <div className="header">
      <h1>Fiverr</h1>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />

      <Dropdown trigger={<FontAwesomeIcon icon={faUser} size="xl" />} />
    </div>
  );
}

export default Header;

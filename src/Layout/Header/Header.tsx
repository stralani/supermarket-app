import "./Header.scss";
import { TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function Header() {
  return (
    <div className="header">
      <h1>Fiverr</h1>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <FontAwesomeIcon icon={faUser} size="xl" />
    </div>
  );
}

export default Header;

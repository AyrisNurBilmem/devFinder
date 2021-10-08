import React from "react";
import "./styles/css/styles.css";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";

const Toggle = ({ theme, toggleTheme }) => {
  let sun = (
    <p>
      LIGHT <MdIcons.MdWbSunny />
    </p>
  );

  let moon = (
    <p>
      DARK <IoIcons.IoMdMoon />
    </p>
  );

  return (
    <div className="theme-div" onClick={toggleTheme}>
      {theme === "dark" ? sun : moon}
    </div>
  );
};

export default Toggle;

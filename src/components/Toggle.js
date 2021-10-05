import React from "react";
import "./styles/css/styles.css";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";

const Toggle = ({ theme, toggleTheme }) => {
  let sun = (
    <div>
      <p>
        LIGHT <MdIcons.MdWbSunny />
      </p>
    </div>
  );

  let moon = (
    <div>
      <p>
        DARK <IoIcons.IoMdMoon />
      </p>
    </div>
  );

  return (
    <div className="theme-div" onClick={toggleTheme}>
      {theme === "dark" ? sun : moon}
    </div>
  );
};

export default Toggle;

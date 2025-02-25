import { Button, Chip, Divider, IconButton, MenuItem } from "@jamsr-ui/react";
import Link from "next/link";
import data from "@/data/Menu";
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { FiMoon } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";
import { Logout, Moon, Sun } from "./svgs";


const Menu1 = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <div >
            {item.items.map((subItem, subIndex) => (
              <Link href={subItem.url} key={subIndex}>
                <MenuItem
                  className="py-3 text-md  text-neutral-300 "
                  startContent={<div className="h-5 w-5 text-neutral-300">{subItem.icon}</div>}
                >
                  <span>{subItem.title}</span>
                </MenuItem>
              </Link>
              
            ))}
            
          </div>
          {index !== data.length - 1 && <Divider className="mx-2" />}
        </React.Fragment>
      ))}

      <MenuItem  onClick={toggleTheme} className="py-3 text-md text-neutral-300 " startContent={<div className="h-5 w-5  text-neutral-300">{theme === 'light' ?  <Moon />:<Sun/> } </div>}>
         
        <span>
          Change Appearance
        </span>
          </MenuItem>
          <MenuItem color="danger" onClick={toggleTheme} className="py-3 text-md text-neutral-300 " startContent={<div className="h-5 w-5 text-neutral-300"><Logout/> </div>}>
         
        <span>
          Logout
        </span>
          </MenuItem>
    </>
  );
};

export default Menu1;

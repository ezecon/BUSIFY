import { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaIceCream,FaCartPlus } from "react-icons/fa";
import { MdTableRestaurant } from "react-icons/md";
import { FaBus } from "react-icons/fa6";

export function NavMenu() {


 
  const [openNav, setOpenNav] = useState(false);
  const [data, setdata] = useState(true);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      
      {/*here*/}
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 bg-black text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium playwrite-gb-s-regular"
        >
         <Link to="/" className="flex gap-2"><span className="text-[goldenrod] font-bold font-playwrite-gb-s"> BUSIFY</span> <FaBus className="text-xl text-[goldenrod]"/> </Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          {data ? (
            
            <Menu>
                  <MenuHandler>
                  <Avatar
                         src={'https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg'}
                          alt="avatar"
                          withBorder={true}
                          className="p-0.5 border-red-50"
                        />
                  </MenuHandler>
                  <MenuList>
                    <Link to="/profile"><MenuItem>Profile</MenuItem></Link>
                    <Link to="/dashboard"><MenuItem>Dashboard</MenuItem></Link>
                    <MenuItem >Logout</MenuItem>
                  </MenuList>
           </Menu>
          ) : (
            <>
              <Link to="/login">
                <Button variant="text" size="sm" className="hidden lg:inline-block text-white">
                  <span>Log In</span>
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="gradient" size="sm" className="hidden lg:inline-block check-button">
                  <span>Sign In</span>
                </Button>
              </Link>
            </>
          )}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Link to="/login">
              <Button fullWidth variant="text" size="sm" className="text-white">
                <span>Log In</span>
              </Button>
            </Link>
            <Link to="/register">
              <Button fullWidth variant="text" size="sm" className="text-white">
                <span>Sign In</span>
              </Button>
            </Link>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}

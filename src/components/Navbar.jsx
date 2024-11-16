import React, { useState } from "react";
import logo from "./../assets/artLogo.jpeg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiUserCircleDuotone } from "react-icons/pi";
import { IoLogInOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import NavItems from "./NavItems";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import all_products from "../assets/all_product";
import { useNavigate } from "react-router-dom";

function Navbar({ setUserLoggedIn }) {
  const inputRef = useRef(null);
  const { items, totalQuantity } = useSelector((state) => state.cart);
  const suggestionRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestionsItems, setSuggestionsItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const clickOutSide = (event) => {
      if (
        suggestionRef.current &&
        !suggestionRef.current.contains(event.target) &&
        !inputRef.current.contains(event.target)
      ) {
        setSuggestionsItems([]);
      }
    };

    window.addEventListener("mousedown", clickOutSide);

    return () => window.removeEventListener("mousedown", clickOutSide);
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filteredProduct = all_products.filter((product) => {
        return product.name.toLowerCase().includes(value.toLowerCase());
      });
      setSuggestionsItems(filteredProduct);
    }
  };

  const handleLogout = () => {
    navigate('/login');
    setUserLoggedIn(false);
  };

  return (
    <nav className="p-5 border-b border-gray-200 sticky top-0 bg-white z-10">
      <div>
        {/* firstrow */}
        <section className="flex items-center justify-between p-2">
          <div className="flex space-x-1 items-center">
            <img className="h-8" src={logo}></img>
            {/* <h1 className="text-xl tracking-wide font-semibold">Tinny Tones</h1> */}
          </div>

          <section>
          <div className="flex justify-center items-center">
            <ul className="flex space-x-5">
              <NavItems to="/" text="HOME" />
              <NavItems to="/portrait" text="SKETCHES" />
              <NavItems to="/miniature" text="MINIATURE PAINTINGS" />
              <NavItems to="/still" text="STILL-LIFE" />
            </ul>
          </div>
        </section>

          <div className="w-46 mt-2 relative">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search "
              onChange={handleChange}
              className="w-full focus:outline-none p-2 font-normal bg-white focu border border-gray-400 rounded-none"
            />
            {suggestionsItems.length > 0 ? (
              <ul
                ref={suggestionRef}
                className="absolute z-10  bg-white max-h-60 overflow-y-auto border mt-2 border-gray-200 w-full"
              >
                {suggestionsItems.map((item) => (
                  <li className="my-2 hover:bg-gray-100 p-2">
                    <Link className="flex  gap-4 items-center">
                      <img className="w-6 h-6 object-cover" src={item.image} />
                      <span className="text-[14px]">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
          <div className="flex item-center gap-5">
            {/* <Link to="/">
              <PiUserCircleDuotone className="text-2xl"/>
              <span
                className="text-xs font-normal hover:underline"
                onClick={handleLogout}
              >
                Artist Page
              </span>
            </Link> */}

<a href="https://artistpanel.netlify.app/" rel="noopener noreferrer">
<PiUserCircleDuotone className="text-2xl"/>
  <span className="text-xs font-normal hover:underline" >
    Artist panel
  </span>
</a>

            <Link to="/sign-in-page">
              <IoLogInOutline className="text-2xl" />
              <span
                className="text-xs font-normal hover:underline"
                onClick={handleLogout}
              >
                SIgn-In
              </span>
            </Link>

            <Link to="">
              <GoHeart className="text-2xl" />
              <span className="text-xs font-normal hover:underline">Saved</span>
            </Link>

            <Link className="relative" to="/cart">
              <HiOutlineShoppingBag className="text-2xl" />
              <span className="text-xs font-normal hover:underline">Cart</span>
              {totalQuantity > 0 ? (
                <span className="w-5 absolute -top-3 left-2 h-5 bg-green-500 text-xs rounded-full text-white flex items-center justify-center">
                  {totalQuantity}
                </span>
              ) : (
                ""
              )}
            </Link>
          </div>
        </section>

        {/* second row
        <section>
          <div className="flex justify-center items-center">
            <ul className="flex space-x-10">
              <NavItems to="/" text="HOME" />
              <NavItems to="/portrait" text="SKETCHES" />
              <NavItems to="/miniature" text="MINIATURE PAINTINGS" />
              <NavItems to="/still" text="STILL-LIFE" />
            </ul>
          </div>
        </section> */}
      </div>
    </nav>
  );
}

export default Navbar;

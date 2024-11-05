import React from 'react'
import {
    BarChart,
    SearchRounded,
    ShoppingCartRounded,
  } from "@mui/icons-material";

const Header = () => {
  return (
      <header>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc"
        alt="logo"
        className="logo"
      />

      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        {/* <div className={`${!cart ? "noCartItem" : "cart_content"}`}>
          <p>{cart ? cart.length : ""}</p>
        </div> */}
      </div>

      <div className="profileContainer">
        <div className="imgBox">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937"
            alt="my img"
          />
        </div>
        <h2 className="userName">Vetrivel Ravi</h2>
      </div>

      <div className="toggleMenu">
        <BarChart className="toggleIcon" />
      </div>

  </header>

    
  );
}

export default Header

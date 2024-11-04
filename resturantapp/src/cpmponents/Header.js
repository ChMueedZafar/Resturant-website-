import React from 'react'
import {
    BarChart,
    SearchRounded,
    ShoppingCartRounded,
  } from "@mui/icons-material";
const Header = () => {
  return  <header>
        <img src='' alt='logo'></img>
       <div className='inputbox'>
       <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
      </div>

      <div className="profileContainer">
        <div className="imgBox">
          <img
            src=""
            alt=""
          />
        </div>
        <h2 className="userName">Mueed Zafar</h2>
      </div>

      <div className="toggleMenu">
        <BarChart className="toggleIcon" />
</div>
    </header>


    
}

export default Header

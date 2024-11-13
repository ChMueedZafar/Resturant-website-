import { AccountBalanceRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import MenuContainer from './Components/MenuContainer';
import BannerName from './Components/BannerName'
import Bannerimg from './Assets/banner img cartoon.png'
import SubMenuContainer from './Components/SubMenuContainer';
import MenuCard from './Components/MenuCard';
import {MenuItems,Items} from './Components/Data'
import { ItemCard } from './Components/ItemCard';

function App() {

  useEffect(() => {

    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

      // MenuCard Active Toggle

     const menuCards = document 
     .querySelector(".rowContainer")
     .querySelectorAll(".rowMenuCard")

     function setMenuCardActive () {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
     } 

     menuCards.forEach((n) => n.addEventListener("click", setMenuCardActive));
  },[]);
  
  return (
    <div className='App'>

     {/* Header Secation  */}

    <Header></Header>

      {/* Main Container  */}
      
     <main>
      {/* Banner */}
      <div className='menuContainer'>
        <div className='banner'>
           <BannerName name={'Mueed,s'} discount={20} link={'#'}/>
            <img src={Bannerimg} alt='bannerimg' className='deliveryPic '/>
        </div>
             {/* dish container main*/}
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"} />
            </div>
            <div className="rowContainer">
            {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id}>
                   <MenuCard imgSrc={data.imgSrc} name={data.name} isActive = {data.id === 1 ? true : false}/>
                  </div>
                ))}
              
            </div>
             {/* dish container */}
                 
            <div className="dishitemContainer">
              <ItemCard imgSrc={"https://tse2.mm.bing.net/th?id=OIP.4nCvKzh707VhLt4DAArAJQHaFz&pid=Api&P=0&h=220"} name={"Burger Bistro"} ratings={5} price={"7.5"} />
            </div>
          </div>
      </div>
      <div className='rightMenu'></div>  
      </main>

       {/* Menu Bottom */}

       <div className='bottomMenu'>
        <ul id='menu'>

          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<HomeRounded/>} isHome/>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Chat/>} ></MenuContainer>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<AccountBalanceRounded/>} ></MenuContainer>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Favorite/>} ></MenuContainer>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<SummarizeRounded/>} ></MenuContainer>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Settings/>} ></MenuContainer>
          <div className='indicator'></div>

        </ul>
        
       </div>
       </div>

);
}

export default App;

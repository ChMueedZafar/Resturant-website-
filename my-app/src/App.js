import { AccountBalanceRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import { useEffect,useState } from 'react';
import './App.css';
import Header from './Components/Header';
import MenuContainer from './Components/MenuContainer';
import BannerName from './Components/BannerName'
import Bannerimg from './Assets/banner img cartoon.png'
import SubMenuContainer from './Components/SubMenuContainer';
import MenuCard from './Components/MenuCard';
import {MenuItems,Items} from './Components/Data'
import { ItemCard } from './Components/ItemCard';
import DebitCard from './Components/DebitCard';
import CartItem from './Components/CartItem';

function App() {
// dish container
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "buger01")
  );


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
  },[isMainData]);


  // seat main dish items on filter
  const setData = (itemId) =>{
    setMainData(Items.filter((element) => element.itemId === itemId))
    
  }
  
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
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                   <MenuCard imgSrc={data.imgSrc}
                  name={data.name}
                  isActive = {data.id === 1 ? true : false}/>
                  </div>
                ))}
              
            </div>
             {/* dish container */}
                 
            <div className="dishitemContainer">
              {
                isMainData && isMainData.map(data => (
                  <ItemCard key={data.id} 
                  itemId = {data.id}
                  imgSrc={data.imgSrc}
                  name={data.name}
                  ratings={data.ratings} 
                  price={data.price} />
                ))
              } 
            </div>
          </div>
      </div>

         {/* right Menu */}
      <div className='rightMenu'>
        <div className="debitCardContainer">
          <div className="debitCard">
            <DebitCard/>
          </div>
        </div>
         <div className='cardCheckOutContainer'>
         <SubMenuContainer name={"Carts Items"}/>

          <div className='cartContainer'>
            <div className='cartItems'>
               <CartItem name={"Burger Bristo"}
               imgSrc={"https://www.pngarts.com/files/3/Burger-Transparent-Images.png"} 
              qty={"4"}
              price={"7.95"}/> 
              </div>
            </div>
            <div className="totalSection">
              <h3>Total</h3>
              <p>
                <span>$ </span>45.0
              </p>
            </div>
            <button className='checkOut'>Check Out</button>
          </div>
         </div>
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

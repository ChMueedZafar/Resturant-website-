import { AccountBalanceRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import MenuContainer from './Components/MenuContainer';
import BannerName from './Components/BannerName'
import Bannerimg from './Assets/banner img cartoon.png'
function App() {

  useEffect(() => {

    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
  },[]);
  
  return (
    <div className='App'>

  
     {/* Header Secation  */}
    <Header></Header>

      {/* Main Container  */}
     <main>
      <div className='menuContainer'>
        <div className='banner'>
           <BannerName name={'Mueed,s'} discount={20} link={'#'}/>
             <img src={Bannerimg} alt='bannerimg' className='deliveryPic '/>
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

import { AccountBalanceRounded, Chat, Favorite, Home, Settings, SummarizeRounded } from '@mui/icons-material';
import './App.css';
import Header from './Components/Header';
import MenuContainer from './Components/MenuContainer';
function App() {
  return (
    <div className='App'>
  
     {/* Header Secation  */}
    <Header></Header>

      {/* Main Container  */}
     <main>
      <div className='menuContainer'></div>
      <div className='rightMenu'></div>
      </main>

       {/* Menu Bottom */}

       <div className='bottomMenu'>
        <ul id='menu'>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Home></Home>} ></MenuContainer>
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

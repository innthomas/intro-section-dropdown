import React,{useState} from 'react';
import logo from '../images/logo.svg';
import iconArrowDown from '../images/icon-arrow-down.svg';
import iconArrowUp from '../images/icon-arrow-up.svg';
import menuIcon from "../images/icon-menu.svg";
import closeIcon from "../images/icon-close-menu.svg";
import './Header.css';
import FeaturesModal from './FeaturesModal';
import CompanyModal from './CompanyModal';
import MobileMenu from './MobileMenu';


const Header = () => {
  const [isOpenFeatures,setIsOpenFeatures]= useState(false);
  const [isOpenCompany,setIsOpenCompany]= useState(false);
  const [isOpenMenu,setIsOpenMenu]= useState(false);
  const openFeaturesModal = ()=>{
    setIsOpenFeatures(current=>!current)
  }
  const openCompanyModal = ()=>{
    setIsOpenCompany(current=>!current)
  }
  const openMenu = ()=>{
    setIsOpenMenu(current=>!current)
  }
  
 

  return (
    
    <header className="App-header flex-row">
      <div className="App-headerMain flex-row">
        <div className="App-headerMainLogoDiv">

       <img className='App-headerMainLogoImg' src={logo} alt="Logo" />
        </div>
        <div className='App-headerFeatures mobile-none' onClick={openFeaturesModal}>
      Features
      {isOpenFeatures?  <img className='App-headerFeatures-img' src={iconArrowUp} alt="iconArrowDown" />: <img className='App-headerFeatures-img' src={iconArrowDown} alt="iconArrowDown" />}
      
       {isOpenFeatures && 
       <FeaturesModal/>}
       </div>
      
       <div className='App-headerCompany mobile-none' onClick={openCompanyModal}>
      Company
      {isOpenCompany?  <img className='App-headerCompany-img' src={iconArrowUp} alt="iconArrowDown" />: <img className='App-headerCompany-img' src={iconArrowDown} alt="iconArrowDown" />}
      
       {isOpenCompany && 
       <CompanyModal/>}
       </div>
       <div className='career mobile-none'>
       Careers
       </div>
         
      <div className='about mobile-none'>

       About
      </div>
       </div>
    
       <div className='App-headerSide flex-row '>
         <div className="App-headerSideLogin mobile-none">
         Login
         </div>
         <div className="App-headerSideRegister mobile-none">
         Register
         </div>
         
     </div>
     <div className={` App-headerSideMenu hide `}>
       <div className={isOpenMenu && `menuContainer`}>
         <div className={isOpenMenu && `menuModal`}>
          
         {isOpenMenu? <img className='close-icon' src={closeIcon} alt="close icon" onClick={openMenu}/>: <img className='menu-icon' src={menuIcon} alt="menu icon" onClick={openMenu}/>}
         {isOpenMenu && <MobileMenu/>}
         </div>
       </div>
     
         </div>
    
  </header>
  )
}

export default Header
import React,{useState} from 'react';
import iconArrowDown from '../images/icon-arrow-down.svg';
import iconArrowUp from '../images/icon-arrow-up.svg';
import CompanyModal from './CompanyModal';
import FeaturesModal from './FeaturesModal';
import './MobileMenu.css';




const MobileMenu = () => {
  const [isOpenFeatures, setIsOpenFeatures] = useState(false);
  const[isOpenCompany,setIsOpenCompany] = useState(false);
  const openFeatures =()=>{
    setIsOpenFeatures(current=>!current)
  }
  const openCompany =()=>{
    setIsOpenCompany(current=>!current)
  }
  return (
    <div className="mobilemenu">
        <div className='features-mobile' onClick={openFeatures}>
            Features  {isOpenFeatures  ?<img src={iconArrowUp } alt="iconArrowUp " /> :<img src={iconArrowDown } alt="iconArrowDown " />}
            {isOpenFeatures && <FeaturesModal/>}
        </div>
        <div className='company-mobile' onClick={openCompany}>
            Company  {isOpenCompany ?<img src={iconArrowUp } alt="iconArrowUp " /> : <img src={iconArrowDown } alt="iconArrowDown " />}
            {isOpenCompany && <CompanyModal/>}
        </div>
        <div>
          Careers
        </div>
        <div>
          About
        </div>
        <div className='login-register'>
         <div>
           Login
         </div>
         <div className='register'>
          Register
         </div>
        </div>
    </div>
  )
}

export default MobileMenu
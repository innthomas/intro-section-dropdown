import React from 'react';
import imageHero from '../images/image-hero-desktop.png';
import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";
import './Main.css';

const Main = () => {
  return (
      <div className='main-div flex-row'>

    <main className='main'>
        <h1 className='main-header'>Make<br className='main-br'></br> remote work</h1>

<p className='main-paragraph'>Get your team in sync, no matter your location.<br></br>Streamline processes, 
create team rituals, and<br></br> watch productivity soar.
</p>

<div className='learn-more'>Learn more</div>
    <div className='footer-img'>
     <img src={databiz} alt="databiz" />
     <img src={audiophile} alt="audiophile" />
     <img src={meet} alt="meet" />
     <img src={maker} alt="maker" />
    </div>
    </main>
    <div className='img-hero'>
    <img src={imageHero} alt="img hero" className='imageHero'/>
    </div>
      </div>
  )
}

export default Main
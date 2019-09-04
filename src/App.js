import React from 'react';
import './styles/main.scss';
import NavLogoCenter from './Components/NavLogoCenter/NavLogoCenter';
import BannerWithImage from './Components/BannerWithImage/BannerWithImage';
import logo from './images/cupcake_logo.svg';
import bannerImage from './images/pumpkin_banner.jpg';

function App() {
  return (
    <div className="App">
    {/* Pass in leftNavItems, rightNavItems, and logo (image url) */}
      <NavLogoCenter
        leftNavItems={[{text: 'waffles', dropDownOptions: [{text: 'more stuff'}, {text: 'some options'}, {text: 'this is fun'}]}, {text: 'burritos'}, {text: 'pancakes'}]}
        rightNavItems={[{text: 'About'}, {text: 'Classes', dropDownOptions: [{text: 'Class Info'}, {text: 'Something Else'}]}, {text: 'Location'}]}
        logo={logo}
      />
      {/* Pass in bannerImage, backgroundSize, backgroundPosition */}
      <BannerWithImage 
        bannerImage={bannerImage}
        backgroundSize="cover"
        backgroundPosition="center"
      />
    </div>
  );
}

export default App;

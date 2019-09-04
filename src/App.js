import React from 'react';
import './styles/main.scss';
import NavLogoCenter from './Components/NavLogoCenter/NavLogoCenter';
import logo from './images/cupcake_logo.svg';

function App() {
  return (
    <div className="App">
      <NavLogoCenter
        leftNavItems={[{text: 'waffles', dropDownOptions: [{text: 'more stuff'}, {text: 'some options'}, {text: 'this is fun'}]}, {text: 'burritos'}, {text: 'pancakes'}]}
        rightNavItems={[{text: 'About'}, {text: 'Classes', dropDownOptions: [{text: 'Class Info'}, {text: 'Something Else'}]}, {text: 'Location'}]}
        logo={logo}
      />
    </div>
  );
}

export default App;

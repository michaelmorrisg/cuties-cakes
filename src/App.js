import React from 'react';
import './styles/main.scss';
import NavLogoCenter from './Components/NavLogoCenter/NavLogoCenter';

function App() {
  return (
    <div className="App">
      <NavLogoCenter
        leftNavItems={[{text: 'waffles', dropDownOptions: [{text: 'more stuff'}]}, {text: 'burritos'}, {text: 'pancakes'}]}
        rightNavItems={[{text: 'buffalo sauce'}, {text: 'tacos'}, {text: 'something'}]}
      />
    </div>
  );
}

export default App;

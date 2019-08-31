import React from 'react';
import './styles/main.scss';
import NavLogoCenter from './Components/NavLogoCenter/NavLogoCenter';

function App() {
  return (
    <div className="App">
      <NavLogoCenter
        leftNavItems={[{text: 'waffles', dropDownOptions: [{text: 'more stuff'}, {text: 'some options'}, {text: 'this is fun'}]}, {text: 'burritos'}, {text: 'pancakes'}]}
        rightNavItems={[{text: 'About'}, {text: 'Classes', dropDownOptions: [{text: 'Class Info'}, {text: 'Something Else'}]}, {text: 'Location'}]}
      />
    </div>
  );
}

export default App;

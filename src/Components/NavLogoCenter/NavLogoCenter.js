import React, { Component } from 'react';
import NavItem from '../../Components/NavItem/NavItem';

class NavLogoCenter extends Component {

    render(props) {
        return (
            <div className="nav-main">
                <div className="nav-left">
                    {this.props.leftNavItems.map(navItem => {
                        return <NavItem text={navItem.text} dropDownOptions={navItem.dropDownOptions}/>
                    })}
                </div>
                <div className="nav-right">
                    {this.props.rightNavItems.map(navItem => {
                        return <NavItem text={navItem.text} dropDownOptions={navItem.dropDownOptions}/>
                    })}
                </div>
            </div>
        )
    }
}

export default NavLogoCenter;
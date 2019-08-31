import React, { Component } from 'react';
import NavItem from '../../Components/NavItem/NavItem';

class NavLogoCenter extends Component {

    renderLeftNav(props) {
        let item; 
        if(this.props.leftNavItems) {
            item = this.props.leftNavItems.map((navItem, i) => {
                return <NavItem key={i} text={navItem.text} dropDownOptions={navItem.dropDownOptions}/>
            });
        }
        return item;
    }
    renderRightNav(props) {
        let item; 
        if(this.props.rightNavItems) {
            item = this.props.rightNavItems.map((navItem, i) => {
                return <NavItem key={i} text={navItem.text} dropDownOptions={navItem.dropDownOptions}/>
            });
        }
        return item;
    }

    render(props) {
        return (
            <div className="nav-main">
                <div className="nav-left">
                    {this.renderLeftNav()}
                </div>
                <div className="nav-center">
                    
                </div>
                <div className="nav-right">
                    {this.renderRightNav()}
                </div>
            </div>
        )
    }
}

export default NavLogoCenter;
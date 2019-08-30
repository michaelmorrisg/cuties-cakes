import React, { Component } from 'react';

class NavLogoCenter extends Component {

    render(props) {
        return (
            <div className="nav-main">
                <div className="nav-left">
                    {this.props.leftNavItems.map(navItem => {
                        return <div>{navItem.text}</div>
                    })}
                </div>
                <div className="nav-right">
                    {this.props.rightNavItems.map(navItem => {
                        return <div>{navItem.text}</div>
                    })}
                </div>
            </div>
        )
    }
}

export default NavLogoCenter;
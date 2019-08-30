import React, { Component } from 'react';

class NavItem extends Component {

    render(props) {
        return (
            <div className="nav-item">
                <div>{this.props.text}</div>
                <div className="dropdown-main">
                    {/* {this.props.dropDownOptions.map(option => {
                        return <div>{option.text}</div>
                    })} */}
                </div>
            </div>
        )
    }
}

export default NavItem;
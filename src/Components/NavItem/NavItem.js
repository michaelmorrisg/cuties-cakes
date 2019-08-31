import React, { Component } from 'react';

class NavItem extends Component {

    renderDropdownOptions(props) {
        let item; 
        if(this.props.dropDownOptions) {
            item = this.props.dropDownOptions.map(option => {
                return <div>{option.text}</div>
            });
        }
        return item;
    }

    render(props) {
        return (
            <div className="nav-item">
                <div>{this.props.text}</div>
                <div className="dropdown-main">
                    {/* {this.props.dropDownOptions.map(option => {
                        return <div>{option.text}</div>
                    })} */}
                    {this.renderDropdownOptions()}
                </div>
            </div>
        )
    }
}

export default NavItem;
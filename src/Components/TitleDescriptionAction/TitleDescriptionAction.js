import React, {Component} from 'react';
import ButtonBuilder from '../ButtonBuilder/ButtonBuilder';

class TitleDescriptionAction extends Component {

    render() {
        return (
            <div className="title-description-action-main">
                <h1 style={{fontSize:this.props.titleSize}}>{this.props.textTitle}</h1>
                <br/>
                <h4 style={{fontSize:this.props.descriptionSize}}>{this.props.textDescription}</h4>
                <br/>
                <ButtonBuilder 
                    buttonText="Learn More"
                    buttonColor="$secondary-accent"
                />
            </div>
        )
    }
}

export default TitleDescriptionAction;
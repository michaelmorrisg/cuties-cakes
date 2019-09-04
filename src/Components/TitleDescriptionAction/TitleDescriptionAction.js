import React, {Component} from 'react';
import ButtonBuilder from '../ButtonBuilder/ButtonBuilder';

class TitleDescriptionAction extends Component {

    render() {
        return (
            <div className="title-description-action-main">
                <h1>Cutie's Cakes</h1>
                <br/>
                <h4>Some random description about how great cakes can be.</h4>
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
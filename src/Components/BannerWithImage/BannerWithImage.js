import React, {Component} from 'react';

class BannerWithImage extends Component {

    render() {
        return (
            <div 
                className="banner-main" 
                style={{
                    backgroundImage: `url(${this.props.bannerImage})`,
                    backgroundSize: this.props.backgroundSize ? this.props.backgroundSize : "",
                    backgroundPosition: this.props.backgroundPosition ? this.props.backgroundPosition : "",
                    }}
            >
            </div>
        )
    }
}

export default BannerWithImage;
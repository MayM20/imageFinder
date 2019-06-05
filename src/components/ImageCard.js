import React from "react";
import "../styles.css";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spans: 0
    };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    this.setState({ spans: spans });
  };

  render() {
    const { urls, description, user, likes } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <a title={`View the photo by ${user.name}`}>
          <div className="container">
            <img ref={this.imageRef} src={urls.regular} alt={description} />
            <div className="desc-image">
              <div className="top-right">
                <i className="fas fa-heart" />
                {likes}
              </div>
              <div className="bottom-left">{user.name}</div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default ImageCard;

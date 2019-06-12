import React from "react";
import "../styles.css";
import { Button, Icon, Image, Modal } from "semantic-ui-react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spans: 0,
      isModalOpen: false
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

  handleClick = () => {
    this.setState({
      isModalOpen: !this.state.isOpen
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  render() {
    const { urls, description, user, likes } = this.props.image;
    return (
      <React.Fragment>
        <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
          <a title={`View the photo by ${user.name}`}>
            <div className="container">
              <img
                ref={this.imageRef}
                src={urls.regular}
                alt={description}
                className="special-cursor"
                onClick={this.handleClick}
              />
              <div className="desc-image">
                <div className="top-right">
                  <Modal
                    open={this.state.isModalOpen}
                    closeIcon
                    onClose={this.closeModal}
                  >
                    <Modal.Header>
                      <div className="block-align">
                        <div>{user.name}</div>
                        <div>{likes}</div>
                      </div>
                    </Modal.Header>
                    <Modal.Content image>
                      <Image
                        wrapped
                        size="medium"
                        src={urls.regular}
                        alt="{}"
                        centered
                      />
                    </Modal.Content>
                  </Modal>
                  {/* <ModalExample {...this.props} /> */}
                  <i className="fas fa-heart" />
                  {likes}
                </div>
                <div className="bottom-left">{user.name}</div>
              </div>
            </div>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default ImageCard;

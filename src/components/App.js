import React from "react";
import unsplash from "../API/Unsplash";
import SearchInput from "./SearchInput";
import ImageList from "./ImageList";
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });

    this.setState({
      images: response.data.results
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>UNSPLASH IMAGE FINDER</h1>
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchInput onSubmit={this.onSearchSubmit} />
          Found: {this.state.images.length} images
          <ImageList images={this.state.images} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

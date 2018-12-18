import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

import Content from '../../components/Content';
import FOOTBALL_IMG from '../../database/photos';

class GalleryPhoto extends Component {
  render() {
    return (
      <Content>
        <h1>Галерея фотографий</h1>
        <div className="football-image-gallery">
          <Gallery className="football-image-gallery" images={FOOTBALL_IMG} enableImageSelection={false} />
        </div>
      </Content>
    );
  }
}

export default GalleryPhoto;

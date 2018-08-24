import React from 'react';
import LeftButton from './container/LeftButton';
import RightButton from './container/RightButton';
import MainDisplay from './container/MainDisplay';
import Thumbnails from './container/Thumbnail';
import { PictureContent, PictureSource, PictureHead } from './datainfo';

const App = () => (
  <main>
    <div className="main-background">
      <div className="show-image">
        <LeftButton />
        <MainDisplay title={PictureHead} descibe={PictureContent} src={PictureSource} />
        <RightButton />
      </div>
      <div className="preview-image">
        <Thumbnails src={PictureSource[0]} index="0" />
        <Thumbnails src={PictureSource[1]} index="1" />
        <Thumbnails src={PictureSource[2]} index="2" />
        <Thumbnails src={PictureSource[3]} index="3" />
        <Thumbnails src={PictureSource[4]} index="4" />
        <Thumbnails src={PictureSource[5]} index="5" />
        <Thumbnails src={PictureSource[6]} index="6" />
        <Thumbnails src={PictureSource[7]} index="7" />
      </div>
    </div>
  </main>
);

export default App;

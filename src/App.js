import React from 'react';
import LeftButton from './container/LeftButton';
import RightButton from './container/RightButton';
import MainDisplay from './container/MainDisplay';
import { PictureContent, PictureSource, PictureHead } from './datainfo';

const App = () => (
  <main>
    <div className="main-background">
      <div className="show-image">
        <LeftButton />
        <MainDisplay title={PictureHead} descibe={PictureContent} src={PictureSource} />
        <RightButton />
      </div>
    </div>
  </main>
);

export default App;

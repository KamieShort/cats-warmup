import React from 'react';
import cats from '../../cats';
import ImageItem from '../ImageItem/ImageItem';

import './Main.css';

export default function Main() {
  return (
    <div className="main">
      {cats.map((item) => (
        <ImageItem
          key={item.name}
          type={item.type}
          url={item.url}
          year={item.year}
          lives={item.lives}
          isSidekick={item.isSidekick}
        />
      ))}
    </div>
  );
}

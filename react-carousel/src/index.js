import React from 'react';
import ReactDOM from 'react-dom';
import './slider.css'
import Slider from './Slider '
import registerServiceWorker from './registerServiceWorker';

const IMAGE_DATA = [
    {
      src: require('./images/demo1.jpg'),
      alt: 'images-1',
    },
    {
      src: require('./images/demo2.jpg'),
      alt: 'images-2',
    },
    {
      src: require('./images/demo3.jpg'),
      alt: 'images-3',
    },
    {
      src: require('./images/demo4.jpg'),
      alt: 'images-3',
    },
  ];

ReactDOM.render(
    <Slider
        items={IMAGE_DATA}
        speed={1.2}
        delay={2.1}
        pause={true}
        autoplay={true}
        dots={true}
        arrows={true}
    />, 
    document.getElementById('root')
);

registerServiceWorker();

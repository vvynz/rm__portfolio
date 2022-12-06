import React from 'react';

import "./ScrollToTop.scss";

import { images } from '../../constants';

export default function ScrollToTop() {
  return(
    <>
    <img className='up-icon' src={images.up} />
    </>
  );
}
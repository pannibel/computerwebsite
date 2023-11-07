
import React, { useEffect } from 'react';
import { P5Wrapper } from 'react-p5-wrapper';
import dvd_logo from '../../public/images/dvd_logo.png';

function Sketch(p) {
  let x;
  let y;
  let xspeed;
  let yspeed;
  let dvd;
  let r, g, b;
  let canvas;

  const pickColor = () => {
    r = p.random(100, 256);
    g = p.random(100, 256);
    b = p.random(100, 256);
  };

  const draw = () => {
    p.background(0);
    p.tint(r, g, b);
    p.image(dvd, x, y);

    x = x + xspeed;
    y = y + yspeed;

    if (x + dvd.width >= canvas.width) {
      xspeed = -xspeed;
      x = canvas.width - dvd.width;
      pickColor();
    } else if (x <= 0) {
      xspeed = -xspeed;
      x = 0;
      pickColor();
    }

    if (y + dvd.height >= canvas.height) {
      yspeed = -yspeed;
      y = canvas.height - dvd.height;
      pickColor();
    } else if (y <= 0) {
      yspeed = -yspeed;
      y = 0;
      pickColor();
    }
  };

  useEffect(() => {
    canvas = p.createCanvas(window.innerWidth, window.innerHeight);
    x = p.random(canvas.width);
    y = p.random(canvas.height);
    xspeed = 5;
    yspeed = 5;
    pickColor();

    dvd = p.loadImage(dvd_logo);
  }, []);

  return <div><P5Wrapper Sketch={p} /></div>;
};

export default Sketch;
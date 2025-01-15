import React from 'react';
import style from './Hero.module.scss';

export const Hero = ({ backgroundUrl, position }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundPosition: `${position}`,
      }}
      className={style.heroStyling}
    >
    </section>
  );
};

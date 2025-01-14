import React from 'react';
import style from './Hero.module.scss';

export const Hero = ({ backgroundUrl }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
      className={style.heroStyling}
    >
    </section>
  );
};

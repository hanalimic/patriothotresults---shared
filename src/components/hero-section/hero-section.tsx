import React from 'react';

export const HeroSection = () => {
  return (
    <section className="hero-image" style={{  
      backgroundImage: "url(" + process.env.PUBLIC_URL + '/assets/images/background.jpg' + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="site-titles__wrapper">
        <h1 className="site-titles__main-title">Patriot</h1>
        <h2 className="site-titles__sub-title">SWIMMING & WATER POLO CLUB</h2>
        <h3 className="site-titles__title">Watch & follow tournaments</h3>
      </div>
    </section>
  )
}
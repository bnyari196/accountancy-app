import React from 'react'

import BreadCrumbs from '../components/BreadCrumbs'

type SubPageHeroProps = {
    title: string;
    subtitle: string;
    imageUrl: string;
    showButton?: boolean;
  };
  
  const SubPageHero = ({ title, subtitle, imageUrl, showButton = false }: SubPageHeroProps) => {
    return (
      <div
        className="hero min-h-screen bg-cover bg-center m-0 p-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="w-full px-4 flex items-center text-neutral-content">
          <div className="max-w-md">
            <span className="mb-5 text-5xl font-bold block">
            <BreadCrumbs/>
              {title}
              </span>
            <p className="mb-5">{subtitle}</p>
            {showButton && (
              <button className="btn btn-primary">Book a Free Consultation</button>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default SubPageHero;
  

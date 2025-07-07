import React from 'react'

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
        <div className="hero-overlay top-0"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <span className="mb-5 text-5xl font-bold">{title}</span>
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
  

import React from 'react';

const ServicesCarousel = () => {
  const cards = [
    {
      src: "/calculator.jpg",
      alt: "Bookkeeping",
      title: "Bookkeeping & Accounts",
      description: "Hassle-free bookkeeping and accounts, giving you clear insight into your finances.",
    },
    {
      src: "/Tax.jpg",
      alt: "Tax Returns",
      title: "Self-Assessment & Tax Returns",
      description: "Simple, accurate self-assessment and tax return services—done on time, every time.",
    },
    {
      src: "/VAT.jpg",
      alt: "VAT",
      title: "VAT & Compliance",
      description: "VAT made easy. We handle your returns and compliance so you can focus on your business.",
    },
    {
      src: "/business-advice.jpg", // You'll need to add this image to your public folder
      alt: "Business Support",
      title: "Business Support & Advisory",
      description: "Practical support and guidance on financial planning, cash flow, and budgeting—so you can make clear, confident decisions.",
    },
  ];

  return (
    <section className="py-8 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-stretch">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col w-full border rounded-xl shadow-lg bg-white border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={card.src}
                alt={card.alt}
                className="w-full h-52 object-cover rounded-t-xl"
              />
              <div className="flex flex-col justify-between flex-grow p-6">
                <div className="flex-grow">
                  <h3 className="mb-3 text-2xl font-bold tracking-tight text-rose-900">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 text-lg">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;

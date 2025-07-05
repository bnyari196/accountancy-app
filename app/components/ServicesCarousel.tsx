import React from 'react';

const ServicesCarousel = () => {
  const cards = [
    {
      src: "/calculator.jpg",
      alt: "Tax",
      title: "Tax Return Services",
      description: "We simplify tax returns for individuals and small businesses — fast, accurate, and hassle-free.",
    },
    {
      src: "/VAT.jpg",
      alt: "VAT",
      title: "VAT & Compliance",
      description: "Stay compliant with VAT regulations and let us handle your submissions and record-keeping.",
    },
    {
      src: "/Tax.jpg",
      alt: "Accounting",
      title: "Accounting & Bookkeeping",
      description: "Professional accounting solutions tailored to your business — from ledgers to financial reports.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 p-5 justify-center items-stretch">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <img
            src={card.src}
            alt={card.alt}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="flex flex-col justify-between flex-grow p-5">
            <div className="flex-grow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {card.title}
              </h5>
              <p className="text-gray-700 dark:text-gray-400">
                {card.description}
              </p>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-rose-500 rounded-lg hover:bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-400 dark:bg-rose-700 dark:hover:bg-rose-800 dark:focus:ring-rose-900"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCarousel;

import React from "react";
import Image from "next/image";

export default function Stats() {
  const stats = [
    {
      value: "607+ Million",
      label: "Processed Transactions Value",
      prefix: "",
      prefixColor: "",
      icon: "/image/dollar.svg",
    },
    {
      value: "1.7+ Billion",
      label: "Transactions Count",
      prefix: "",
      prefixColor: "",
    },
    {
      value: "33.6+ Million",
      label: "Unique Customer Interactions",
      prefix: "",
      prefixColor: "",
    },
  ];

  return (
    <section className="py-20 w-full max-w-[1440px] mx-auto bg-white px-6">
      <div className="flex flex-col md:flex-row justify-between items-center w-full relative">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center justify-center p-6 md:p-2 lg:p-8 w-full text-center">
              <h2 className="text-3xl md:text-[22px] lg:text-[32px] font-extrabold flex flex-wrap justify-center items-center mb-3 lg:mb-4 text-brand-primary">
                {stat.icon && (
                  <Image src={stat.icon} alt="icon" width={19} height={22} className="lg:w-[20px] md:w-[13px] w-[17px] " />
                )}
                {stat.prefix && (
                  <span className={`${stat.prefixColor}`}>{stat.prefix}</span>
                )}
                <span>{stat.value}</span>
              </h2>
              <p className="text-brand-primary font-semibold text-[12px] md:text-[10px] lg:text-[14px] text-center max-w-[200px] md:max-w-[150px] lg:max-w-none mx-auto">{stat.label}</p>
            </div>
            {/* Vertical Gradient Divider for Desktop */}
            {index < stats.length - 1 && (
              <div className="hidden md:block w-[2px] h-32 bg-gradient-to-b from-transparent via-brand-primary to-transparent opacity-60"></div>
            )}
            {/* Horizontal Gradient Divider for Mobile */}
            {index < stats.length - 1 && (
              <div className="md:hidden w-[80%] mx-auto h-[2px] bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-60"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

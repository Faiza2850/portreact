import React from "react";

export const Title = ({ subTitle, title }) => {
  return (
    <div className="text-center mb-8">
      <p className="text-3xl font-bold text-gray-100 text-center mb-6"> {title}</p>
      <h2 className="text-3xs font-bold text-gray-500">{subTitle}</h2>
    </div>
  );
};

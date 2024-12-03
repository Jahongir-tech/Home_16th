import React from "react";

const NotFoundPage = () => {
  return (
    <section className="h-[500px] w-full flex justify-center items-center flex-col gap-4">
      <h2 className="text-5xl font-bold text-red-500">This route not found</h2>
      <p className="text-4xl font-medium">404</p>
    </section>
  );
};

export default NotFoundPage;

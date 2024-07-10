/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

export const Slider = () => {
  const [sliderPosition, setSliderPosition] = useState(85);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    handleMove(event.clientX, rect);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      handleMove(touch.clientX, rect);
    }
  };

  const handleInteractionStart = () => setIsDragging(true);
  const handleInteractionEnd = () => setIsDragging(false);

  const getTitle = () => {
    return sliderPosition < 50 ? "After " : "Before ";
  };

  return (
    <div className="  ">
      <div
        className="relative  flex flex-col items-center justify-center w-full py-10 "
        onMouseUp={handleInteractionEnd}
        onTouchEnd={handleInteractionEnd}
      >
        <div
          className={`relative w-full  overflow-hidden select-none  rounded-xl bg-slate-100
         `}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={handleInteractionStart}
          onTouchStart={handleInteractionStart}
        >
          <div className="py-5  border border-white flex justify-center items-center  ">
            <p className=" text-black text-2xl font-semibold ">{getTitle()}</p>
            <img
              src="./logofull.png"
              alt="Logo"
              className="w-32  cursor-pointer scale-150"
              onClick={() => {
                window.location.href = "./";
              }}
            />
          </div>

          <img
            src="https://media.licdn.com/dms/image/D5612AQFT7x0r3SPQIA/article-cover_image-shrink_720_1280/0/1687930477581?e=2147483647&v=beta&t=iEvw9MRo5gP_tgOEWEhoDAkzpjsGuFQYUgkpWfp-57k"
            alt="pic"
            className="w-full  h-64  lg:w-[35rem] lg:h-80 object-cover "
          />
          <img
            src="https://media.licdn.com/dms/image/D4E10AQEFzwrOrjd_6Q/image-shrink_800/0/1719460810889?e=2147483647&v=beta&t=riT2FDvsWKlX1KFiBRBxmAHyqQ7aUnQGlgjS6HbFvbs"
            alt="pic"
            className="w-full  h-64  lg:w-[35rem] lg:h-80 object-cover "
          />
          {/* <div className="py-10  border-t border-white flex justify-center items-center">
            <p className=" text-white text-2xl font-semibold">{getTitle()}</p>
          </div> */}

          <div
            className="absolute top-0 left-0 right-0 w-full h-full  overflow-hidden select-none py-[113px]"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src="https://trainingmag.com/wp/wp-content/uploads/2023/12/shutterstock_1633494952-696x464.jpg"
              alt="pic"
              className="w-full  h-64  lg:w-[35rem] lg:h-80 object-cover "
            />
            <img
              src="https://nailted.com/blog/wp-content/uploads/2023/02/An-employee-leaving-a-company-with-bad-employer-branding-1024x614.jpg"
              alt="pic"
              className="w-full  h-64  lg:w-[35rem] lg:h-80 object-cover "
            />
          </div>
          <div
            className="absolute top-0 bottom-0 w-1 bg-red-400 cursor-ew-resize"
            style={{
              left: `calc(${sliderPosition}% - 1px)`,
            }}
          >
            <div className="bg-red-400  absolute rounded-full h-3 w-3 scale-150 -left-1 top-[calc(55%)]" />
          </div>
          {/* <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold  p-1 rounded-xl  ">
            {getTitle()}
          </div> */}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import background from '../assets/bgImage.mp4';


    const BackgroundVideo = () => {
      return (
        <div>
          <video autoPlay loop muted className=" absolute top-0 left-0 w-full h-full object-cover z-0">
            <source src={background} type="video/mp4" />
            Your browser does not support the video tag.
          
          </video>
          <div className="absolute top-0 left-0 w-full flex justify-center z-10 mt-[10px]">
        <h1 className="text-6xl text-white font-bold">Currency Converter</h1>
      </div>
        </div>
      );
    };

    export default BackgroundVideo;
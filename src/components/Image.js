import React from "react";

const Image = ({ image }) => {
  return (
    <div>
      <div className="w-full bg-gray-100 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center">
        <div>
          <img
            className="object-center object-cover h-auto w-full"
            src={image.webformatURL}
            alt="p"
          />
        </div>
        <div className=" px-3 py-8 sm:py-6">
          <p className="text-xl text-gray-700 mb-2">
            
            Download: <span className="font-bold">{image.downloads}</span>
          </p>
          <p className="text-xl text-gray-700 mb-2">
            
            Likes: <span className="font-bold">{image.likes}</span>
          </p>
          <p className="text-xl text-gray-700 mb-2">
            
            Views: <span className="font-bold">{image.views}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Image;

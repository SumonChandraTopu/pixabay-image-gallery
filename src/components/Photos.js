import React, { useEffect, useState } from "react";
import Form from "./Form";
import Image from "./Image";

const Photos = () => {
  
  const [ term, setTerm ] = useState('');
  const [ isLoading, setIsLoading ] = useState(true);
  const [ images, setImages ] = useState([]); 

  const apiKey = "23271946-3099fb476ccc7fc86af16ec5e"
  const api = `https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true`;
  // const api = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`;

  useEffect( () => {
    fetch(api)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits)
      setIsLoading(false)
    })
  },[term] )
  // console.log(images);
  
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <Form images={images} searchText={ (text) => setTerm(text) } />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center  mt-32">No Images Found</h1> }

        { isLoading ? <h1 className="text-6xl	p-4 font-bold">Loading....</h1> :
          images.map(image => <Image key={image.id} image={image} />)
        }
      </div>
    </div>
  );
};

export default Photos;

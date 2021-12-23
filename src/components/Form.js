import React, { useState } from "react";

const Form = ({searchText}) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text)
    }
    searchText('')
  return (
    <form onSubmit={onSubmit} className="bg-white rounded-md py-10 px-12 shadow-lg">
      <h1 className="text-xl mt-2 text-center font-semibold text-gray-600">
        Search for images
      </h1>
      <div className="mt-6 flex space-x-4 m-10 justify-center">
       
        <input
          onChange={ (e) => setText(e.target.value) }
          placeholder="write here..."
          className="bg-gray-100 rounded-md py-2 px-4 border-2 outline-none"
        />
        <button type="submit" className="bg-yellow-400 px-4 rounded-md font-semibold">
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;

import React from "react";

const Author = ({ author }) => {
  return (
    <div className="  mx-auto mt-20 mb-8 p-12 relative rounded-xl bg-black bg-opacity-20 shadow-lg">
      <div className="absolute -top-14">
        <img
          alt={author.name}
          src={author.photo.url}
          height="100px"
          width="100px"
          className="align-middle rounded-full shadow-lg"
        />{" "}
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;

import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col text-center gap-4 font-titleFont mb-10">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
       {title}
      </h3>
      <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">{des}</h1>
    </div>
  );
}

export default Title
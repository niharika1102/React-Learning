import React from 'react'

const Navabar = ({title}) => {
  return (
    <header className="h-16 bg-[#149eca]/70 flex items-center justify-center px-6 shadow-md">
      <h1 className="text-text text-2xl font-semibold text-center">{title}</h1>
    </header>
  );
}

export default Navabar
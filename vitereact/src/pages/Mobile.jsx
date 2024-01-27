import React, { useState } from 'react';

function Mobile({ onCategoryChange }) {

  const [name, setName] = useState('');

  const handleClick = () => {
    onCategoryChange(name);
  };

  return (
    <>
      <div>Mobile</div>
      <input
        type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)}
      />
      <div onClick={handleClick} className='btn btn-primary'>
        button
      </div>

      <div>
        {name}
      </div>
    </>
  );
}

export default Mobile;
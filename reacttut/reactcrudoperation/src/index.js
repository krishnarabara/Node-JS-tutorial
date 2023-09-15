import React, { useState } from 'react';

const CreateItem = () => {
  const [item, setItem] = useState('');

  const handleInputChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform API call or update state with the new item
    console.log('New item:', item);
    setItem('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={item} onChange={handleInputChange} />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default CreateItem;

import React, { useState } from "react";
import { nanoid } from 'nanoid';

function Form() {
  const [description, setDescription] = useState("");

  const [quantity, setQuantity] = useState(1);

  function addItemHandler(event) {
    event.preventDefault();

    if (!description) return; //Do nothing if no description

    const newItem = {description, quantity, packed:false, id: nanoid() }
    console.log(newItem)

    setDescription("");
    setQuantity(1);
  }

  return (
    <div className="bg-form text-body flex items-center justify-center gap-4 py-6">
      <h3 className="mr-6 font-bold">What do you need for your 😍 trip?</h3>
      <form
        className="flex items-center justify-center gap-4"
        onSubmit={addItemHandler}
      >
        <select
          className="form"
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className="form"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Item..."
          max="30"
        />
        <button className="text-body font-semibold border-none rounded-[10rem] px-6 py-1 text-base cursor-pointer uppercase bg-stats">
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;

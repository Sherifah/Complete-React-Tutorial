import React, { useState } from "react";
import Item from "./Item";

function PackingList(props) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = props.items;

  if (sortBy === "description")
    sortedItems = props.items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = props.items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  const itemsList = sortedItems.map((item) => {
    return (
      <Item
        key={item.id}
        id={item.id}
        description={item.description}
        quantity={item.quantity}
        isPacked={item.packed}
        deleteItem={props.deleteItem}
        toggleChecked={props.toggleChecked}
      />
    );
  });

  return (
    <div className="text-list p-8 flex justify-between flex-col gap-12 items-center">
      <ul className="list-none w-[80%] grid gap-4 justify-center content-start grid-cols-listLayout">
        {itemsList}
      </ul>

      <div>
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          className="uppercase px-6 py-1 text-sm font-bold mx-3 my-0"
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button
          onClick={props.deleteAllItems}
          className="btn uppercase px-6 py-1 text-sm font-bold mx-3 my-0"
        >
          Clear list
        </button>
      </div>
    </div>
  );
}

export default PackingList;

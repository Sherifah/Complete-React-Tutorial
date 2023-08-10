import React from "react";
import Item from "./Item";

function PackingList(props) {
  const itemsList = props.initialItems.map((item) => {
    return (
      <Item
        key={item.id}
        description={item.description}
        quantity={item.quantity}
        isPacked={item.packed}
      />
    );
  });

  return (
    <div className="text-list p-8 flex justify-between flex-col gap-12 items-center">
      <ul className="list-none w-[80%] grid gap-4 justify-center content-start grid-cols-listLayout">
        {itemsList}
      </ul>

      <div>
        <select className="uppercase px-6 py-1 text-sm font-bold mx-3 my-0">
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button className="btn uppercase px-6 py-1 text-sm font-bold mx-3 my-0">
          Clear list
        </button>
      </div>
    </div>
  );
}

export default PackingList;

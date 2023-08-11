import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function TravelList() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function toggleChecked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function deleteAllItems() {
    const confirmed = window.confirm(
      "are you sure you want ot delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="font-body font-medium w-[100%] h-[100vh] grid grid-rows-layout">
      <Logo />
      <Form addItem={addItem} />
      <PackingList
        items={items}
        deleteItem={deleteItem}
        toggleChecked={toggleChecked}
        X
        deleteAllItems={deleteAllItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default TravelList;

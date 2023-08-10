import React, { useState } from "react";

function Item(props) {
  const [isPacked, setIsPacked] = useState(props.isPacked);

  return (
    <li className="flex items-center gap-3">
      <input
        type="checkbox"
        value={isPacked}
        onChange={() => setIsPacked((prev) => !prev)}
        className="h-4 w-4 accent-form"
      />

      <span className={isPacked === true ? "line-through" : "no-underline"}>
        {props.quantity} {props.description}
      </span>

      <button className="cursor-pointer bg-none border-none text-sm">❌</button>
    </li>
  );
}

export default Item;

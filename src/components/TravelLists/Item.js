import React from "react";

function Item(props) {
  // const [isPacked, setIsPacked] = useState(props.isPacked);

  return (
    <li className="flex items-center gap-3">
      <input
        type="checkbox"
        value={props.isPacked}
        onChange={() => props.toggleChecked(props.id)}
        className="h-4 w-4 accent-form"
      />

      <span className={props.isPacked === true ? "line-through" : "no-underline"}>
        {props.quantity} {props.description}
      </span>

      <button
        onClick={() => props.deleteItem(props.id)}
        className="cursor-pointer bg-none border-none text-sm"
      >
        ❌
      </button>
    </li>
  );
}

export default Item;

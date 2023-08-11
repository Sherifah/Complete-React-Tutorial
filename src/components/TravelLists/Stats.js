import React from "react";

function Stats(props) {
  if (!props.items.length)
    return (
      <p className="bg-stats text-center font-bold px-0 py-4 text-body">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = props.items.length;
  const numPacked = props.items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numPacked / numItems) * 100);

  return (
    <div>
      <footer className="bg-stats text-center font-bold px-0 py-4 text-body">
        {/* <em>
          {
            percentPacked === 100 ? 'You got everything! Ready to go ✈️' : `💼 You have ${numItems} items on your list, and you already packed
            ${numPacked} (${percentPacked}%)`
          }
        </em> */}

        {percentPacked === 100 ? (
          <em>You got everything! Ready to go ✈️</em>
        ) : (
          <em>
            💼 You have {numItems} items on your list, and you already packed{" "}
            {numPacked} ({percentPacked}%)
          </em>
        )}
      </footer>
    </div>
  );
}

export default Stats;

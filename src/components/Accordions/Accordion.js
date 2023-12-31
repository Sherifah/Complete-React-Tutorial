import React, { useState } from "react";
import Faq from "./Faq";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function Accordion() {
  const [curOpen, setCurOpen] = useState(null);

  const faqList = faqs.map((data, index) => (
    <Faq title={data.title} text={data.text} num={index} key={index} id={index} curOpen={curOpen} onOpen={setCurOpen}/>
  ));
  return <div className="accordion">{faqList}</div>;
}

export default Accordion;

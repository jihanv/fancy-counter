import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import CountButtons from "./ButtonContainer";
import { useState } from "react";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <CountButtons setCount={setCount} locked={locked} />
    </div>
  );
}

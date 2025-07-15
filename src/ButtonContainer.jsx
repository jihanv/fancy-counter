import CountButton from "./CountButton";

export default function ButtonContainer({ setCount, locked }) {
  return (
    <div className="button-container">
      <CountButton setCount={setCount} type="minus" locked={locked} />
      <CountButton setCount={setCount} type="plus" />
    </div>
  );
}

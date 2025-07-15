import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ setCount, type }) {
  return (
    <button
      className="count-btn"
      onClick={() => {
        type === "minus"
          ? setCount((prev) => prev - 1)
          : setCount((prev) => prev + 1);
      }}
    >
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}

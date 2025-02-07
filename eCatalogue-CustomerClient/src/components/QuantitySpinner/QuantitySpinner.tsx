import React, { useState } from "react";
import "./QuantitySpinner.css";

type QuantitySpinnerProps = {
  initialValue?: number; // Αρχική τιμή (default: 1)
  min?: number; // Ελάχιστη τιμή (default: 1)
  max?: number; // Μέγιστη τιμή (default: 99)
  onChange?: (value: number) => void; // Callback για αλλαγή τιμής
};

const QuantitySpinner: React.FC<QuantitySpinnerProps> = ({
  initialValue = 0,
  min = 0,
  max = 15,
  onChange,
}) => {
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => {
    setValue((prev) => {
      const newValue = Math.min(prev + 1, max);
      if (onChange) onChange(newValue);
      return newValue;
    });
  };

  const decrement = () => {
    setValue((prev) => {
      const newValue = Math.max(prev - 1, min);
      if (onChange) onChange(newValue);
      return newValue;
    });
  };

  return (
    <div className="quantity-spinner">
      <button className="decrement-btn" onClick={decrement}>
        –
      </button>
      <span className="quantity-value">{value}</span>
      <button className="increment-btn" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default QuantitySpinner;

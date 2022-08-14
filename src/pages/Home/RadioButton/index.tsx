import { useState } from "react";

interface Props {
  list: Array<{
    name: string;
    label: string;
  }>;
  initValue: string;
  onClick: (item: string) => void;
}

const RadioButton = ({ list, initValue, onClick }: Props) => {
  const [selected, setSelected] = useState(initValue);

  const handleItemClick = (e: string) => {
    setSelected(e);
    onClick(e);
  };

  return (
    <>
      {list.map((item) => {
        return (
          <li key={item.name}>
            <label>
              <input
                type="radio"
                value={item.name}
                checked={selected === `${item.name}`}
                onChange={() => handleItemClick(item.name)}
              />
              {item.label}
            </label>
          </li>
        );
      })}
    </>
  );
};

export default RadioButton;

"use client";

import { IoArrowForward } from "react-icons/io5";
import { ChangeEventHandler, KeyboardEventHandler } from "react";

interface CustomInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  onEnter: () => void;
  checked: boolean;
  onCheckboxChange: () => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  placeholder,
  onEnter,
  checked,
  onCheckboxChange,
}) => {
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onEnter();
    }
  };

  return (
    <div className="relative flex items-center w-[540px] h-[67px] bg-[#222630] dark:bg-[#323642] border border-border dark:border-border-dark rounded-md shadow-md dark:shadow-lg">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        className="w-full h-full bg-transparent outline-none text-white  placeholder-gray-400 dark:text-white  dark:placeholder-gray-500 pl-4 rounded-md transition-colors duration-300"
      />
      <IoArrowForward
        onClick={onEnter}
        className="absolute right-2 text-lg text-gray-400 dark:text-gray-300 hover:text-gray-300 dark:hover:text-gray-100 cursor-pointer transition-colors duration-300"
      />
    </div>
  );
};

export default CustomInput;

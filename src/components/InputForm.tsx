//InputForm.tsx
import TooltipProperties from "./TooltipProperties";
import {
  HiOutlineTrash,
  HiHashtag,
  HiAtSymbol,
  HiPhone,
  HiOutlinePaperClip,
} from "react-icons/hi";
import { useState } from "react";

interface InputFormProps {
  index: number;
  openIdTooltipProps: number;
  setOpenIdTooltipProps: React.Dispatch<React.SetStateAction<number>>;
  removeInputForm: (index: number) => void;
  updateInputForm: (index: number, value: string, type: string) => void;
}

export default function InputForm({
  index,
  openIdTooltipProps,
  setOpenIdTooltipProps,
  removeInputForm,
  updateInputForm,
}: InputFormProps) {
  const [propertieSelected, setPropertieSelected] = useState("");
  const [inputValue, setInputValue] = useState("");

  let timeoutId: NodeJS.Timeout;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  const handleBlur = () => {
    updateInputForm(index, inputValue, propertieSelected);
  };

  const validatePropertie = () => {
    switch (propertieSelected) {
      case "title":
        return <span className="text-xs font-semibold text-gray-600">Aa</span>;
        break;

      case "number":
        return <HiHashtag />;
        break;

      case "email":
        return <HiAtSymbol />;
        break;

      case "phone_number":
        return <HiPhone />;
        break;

      case "url":
        return <HiOutlinePaperClip />;
        break;

      default:
        return <span className="text-xs font-semibold text-gray-600">Aa</span>;
        break;
    }
  };

  return (
    <div key={index} className="flex items-center justify-start gap-2 ">
      <div
        onMouseEnter={() => setOpenIdTooltipProps(index)}
        onMouseLeave={() => setOpenIdTooltipProps(123)}
        className="relative flex cursor-pointer items-center justify-center rounded-xl bg-gray-200 px-2 py-2"
      >
        <> {validatePropertie()}</>
        {openIdTooltipProps === index && (
          <TooltipProperties
            setOpenIdTooltipProps={setOpenIdTooltipProps}
            setPropertieSelected={setPropertieSelected}
          />
        )}
      </div>
      <input
        type="text"
        name="name"
        className="rounded-md border-[1px] border-indigo-200 px-3 py-1 text-[14px] "
        onChange={handleChange}
        autoComplete="off"
        onBlur={handleBlur}
      />
      <button
        onClick={() => removeInputForm(index)}
        className="rounded-full bg-gray-200 p-1 hover:bg-red-500"
      >
        <HiOutlineTrash size={10} color="white" />
      </button>
    </div>
  );
}

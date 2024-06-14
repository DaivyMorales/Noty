import {
  HiHashtag,
  HiAtSymbol,
  HiPhone,
  HiOutlinePaperClip,
} from "react-icons/hi";
import { useEffect } from "react";

interface TooltipPropetiesProps {
  setOpenIdTooltipProps: React.Dispatch<React.SetStateAction<number>>;
  setPropertieSelected: React.Dispatch<React.SetStateAction<string>>;
  // setProperties: React.Dispatch<React.SetStateAction<object>>;
}

export default function TooltipProperties({
  setOpenIdTooltipProps,
  setPropertieSelected,
  // setProperties
}: TooltipPropetiesProps) {
  return (
    <div
      onClick={(e) => {}}
      className="absolute left-0 top-[25px] z-50 flex w-[100px] flex-col gap-2 rounded-md border-[1px] bg-white px-1 py-2 text-xs"
    >
      <div className="px-2">
        <p>Type</p>
      </div>
      <ul className="flex flex-col gap-1">
        <li
          onClick={() => {
            setPropertieSelected("title");
            setOpenIdTooltipProps(123)
           
          }}
          className="flex cursor-pointer items-center justify-start gap-1 rounded-[4px] px-2 hover:bg-gray-200"
        >
          <span>Aa</span> Text
        </li>
        <li
          onClick={() => {
            setPropertieSelected("number");
            setOpenIdTooltipProps(123)
           
          }}
          className="flex cursor-pointer items-center justify-start gap-1 rounded-[4px] px-2 hover:bg-gray-200"
        >
          <HiHashtag /> Number
        </li>
        <li
          onClick={() => {
            setPropertieSelected("email");
            setOpenIdTooltipProps(123)
           
          }}
          className="flex cursor-pointer items-center justify-start gap-1 rounded-[4px] px-2 hover:bg-gray-200"
        >
          <HiAtSymbol /> Email
        </li>
        <li
          onClick={() => {
            setPropertieSelected("phone_number");
            setOpenIdTooltipProps(123)
           
          }}
          className="flex cursor-pointer items-center justify-start gap-1 rounded-[4px] px-2 hover:bg-gray-200"
        >
          {" "}
          <HiPhone />
          Phone
        </li>
        <li
          onClick={() => {
            setPropertieSelected("url");
            setOpenIdTooltipProps(123)
           
          }}
          className="flex cursor-pointer items-center justify-start gap-1 rounded-[4px] px-2 hover:bg-gray-200"
        >
          <HiOutlinePaperClip /> URL
        </li>
      </ul>
    </div>
  );
}

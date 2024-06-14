//FormDatabaseName.tsx
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { HiExclamationCircle, HiOutlineArrowSmRight } from "react-icons/hi";
import InputForm from "./InputForm";
interface FormDatabaseNameProps {
  setOnNext: React.Dispatch<React.SetStateAction<number>>;
  pageId: string;
}
import { debounce } from "lodash";
import { RiNotionFill } from "react-icons/ri";

export default function FormDatabaseName({
  setOnNext,
  pageId,
}: FormDatabaseNameProps) {
  const [statusNotionDB, setStatusNotionDB] = useState(123);
  const [titleState, setTitleState] = useState("");
  const [descriptionState, setDescriptionState] = useState("");
  const [colorPreviewForm, setColorPreviewForm] = useState(
    "bg-[#191919] text-white",
  );
  const [openIdTooltipProps, setOpenIdTooltipProps] = useState(0);
  const [inputForms, setInputForms] = useState<{ [key: string]: any }[]>([]);
  const [openDescription, setOpenDescription] = useState(false);
  const [propertiesState, setPropertiesState] = useState({});
  const [mainValue, setMainValue] = useState("Name");

  const addInputForm = () => {
    setInputForms([...inputForms, {}]);
  };

  const removeInputForm = (index: number) => {
    const newInputForms = [...inputForms];
    newInputForms.splice(index, 1);
    setInputForms(newInputForms);
  };

  const updateInputForm = (index: number, value: any, type: string) => {
    const newInputForms = [...inputForms];
    newInputForms[index] = { name: value };
    setInputForms(newInputForms);

    formik.setValues((prevValues) => ({
      ...prevValues,
      properties: {
        ...prevValues.properties,
        [value]: {
          [type]: {},
        },
      },
    }));
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      properties: {
        [mainValue]: {
          title: {},
        },
      },
    },
    onSubmit: async (values) => {
      try {
        const body = {
          parent: {
            type: "page_id",
            page_id: pageId,
          },
          title: [{ type: "text", text: { content: values.title } }],
          description: [
            { type: "text", text: { content: values.description } },
          ],
          properties: values.properties,
        };

        const response = await axios.post("api/notion", body);
        console.log(response);

        if (response.status === 200) {
          setStatusNotionDB(response.status);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  console.log(formik.values.properties);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const textValue = event.target.value;

    setTitleState(textValue);
    formik.handleChange(event);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const textValue = event.target.value;

    setDescriptionState(textValue);
    formik.handleChange(event);
  };

  const handleMainField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMainValue = event.target.value;

    formik.setValues((prevValues) => ({
      ...prevValues,
      properties: {
        ...prevValues.properties,
        [newMainValue]: {
          title: {},
        },
      },
    }));
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="absolute z-10 h-[500px] w-[700px] rounded-full bg-indigo-200 blur-[90px]" />
      <div className="z-50 flex h-full w-full items-center justify-center gap-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
          className="border-[1px]border-indigo-100 flex w-[500px]  flex-col items-start justify-start gap-5  rounded-xl bg-white p-5 shadow-md"
        >
          <div className="flex flex-col ">
            <h2>Create database</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              dolorum.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <label htmlFor="title" className="flex items-center gap-1">
                Title{" "}
                <span className="cursor-pointer text-gray-600">
                  <HiExclamationCircle color="" size={12} />
                </span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="title"
                  className="rounded-md border-[1px] border-indigo-200 px-3 py-1 text-[14px]"
                  onChange={handleTitleChange}
                  placeholder="My books"
                />
                {!openDescription && (
                  <button
                    onClick={() => setOpenDescription(true)}
                    className="flex items-center justify-center gap-2 rounded-md border-[1px] px-2  py-1 text-[10px] font-medium "
                  >
                    Add description
                  </button>
                )}
              </div>
            </div>

            {openDescription && (
              <div className="flex flex-col">
                <label htmlFor="title" className="flex items-center gap-1">
                  Description
                </label>
                <textarea
                  name="description"
                  className="rounded-md border-[1px] border-indigo-200 px-3 py-1 text-[14px]"
                  placeholder="My books"
                  style={{
                    height: "100px ",
                    width: "300px",
                    overflowY: "hidden",
                    resize: "none",
                  }}
                  rows={1}
                  onChange={handleDescriptionChange}
                />
              </div>
            )}
          </div>

          <div className="flex flex-col items-start justify-start gap-3">
            <div className="flex flex-col gap-1">
              <h2>Fields</h2>
              <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <span
              className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-indigo-500 px-6 py-1 text-[12px] font-bold text-white"
              onClick={addInputForm}
            >
              Add
            </span>

            <div className="flex items-center justify-start gap-2 ">
              <div
                // onMouseEnter={() => setOpenIdTooltipProps(index)}
                // onMouseLeave={() => setOpenIdTooltipProps(123)}
                className="relative flex cursor-pointer items-center justify-center rounded-xl bg-gray-200 px-2 py-2"
              >
                <span className="text-xs font-semibold text-gray-600">Aa</span>
              </div>
              <input
                type="text"
                name="mainValueInput"
                className="rounded-md border-[1px] border-indigo-200 px-3 py-1 text-[14px] "
                onChange={handleMainField}
                autoComplete="off"
                value={mainValue}
              />
            </div>
            {inputForms.map((_, index) => (
              <InputForm
                key={index}
                index={index}
                removeInputForm={removeInputForm}
                openIdTooltipProps={openIdTooltipProps}
                setOpenIdTooltipProps={setOpenIdTooltipProps}
                updateInputForm={updateInputForm}
              />
            ))}
          </div>

          <div className="flex w-full items-center justify-between">
            <button className="font-poppins flex items-center justify-center gap-2 rounded-md border-[1px] px-6 py-3 text-[12px] font-bold text-gray-700">
              Cancel
            </button>
            <button
              type="submit"
              className="font-poppins flex items-center justify-center gap-2 rounded-md bg-indigo-500 px-6 py-3 text-[12px] font-bold text-white"
            >
              Export to Notion
              <RiNotionFill size={20} />
            </button>
          </div>
        </form>
        {titleState.length > 1 && (
          <>
            <div className="rounded-full border-[1px] bg-gray-300 p-1  ">
              <HiOutlineArrowSmRight size={22} />
            </div>

            <div className="0 z-50 flex flex-col items-center justify-center gap-4 rounded-lg p-5">
              <div className="flex w-full items-center justify-center gap-2">
                <div
                  onClick={() => setColorPreviewForm("bg-[#191919] text-white")}
                  className="h-[22px] w-[22px] cursor-pointer rounded-full border-2 border-gray-200 bg-[#191919]"
                ></div>
                <div
                  onClick={() => setColorPreviewForm("bg-white")}
                  className="h-[22px] w-[22px] cursor-pointer rounded-full border-2 border-gray-200 bg-white"
                ></div>
                <div
                  onClick={() =>
                    setColorPreviewForm("bg-indigo-400 text-white")
                  }
                  className="h-[22px] w-[22px] cursor-pointer rounded-full border-2 border-gray-200 bg-indigo-400"
                ></div>
              </div>
              <form
                className={` ${colorPreviewForm} flex w-[300px] flex-col items-center justify-start gap-3 rounded-lg p-5`}
              >
                <div className="flex w-full flex-col items-start justify-start">
                  <h2>{titleState}</h2>
                  <p>{descriptionState}</p>
                </div>

                <div className="flex w-full flex-col">
                  <label htmlFor="title" className="flex items-center gap-1">
                    {mainValue}
                  </label>
                  <input
                    type="text"
                    name="mainValueInput"
                    className="rounded-md border-[1px] border-indigo-200 px-3 py-1 text-[14px]"
                    onChange={formik.handleChange}
                    placeholder={`Your ${mainValue}`}
                  />
                </div>

                {inputForms.map((item, index) => (
                  <div key={index} className="flex w-full flex-col">
                    <label htmlFor="title" className="flex items-center gap-1">
                      {item.name}
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="rounded-md border-[1px] border-indigo-200 px-3 py-1 text-[14px]"
                      onChange={formik.handleChange}
                      placeholder={`Your ${item.name}`}
                    />
                  </div>
                ))}

                {inputForms.length >= 1 && (
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-500 px-6 py-3 text-[12px] font-bold text-white"
                  >
                    Send
                  </button>
                )}
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

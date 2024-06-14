import { HiLink } from "react-icons/hi";

interface PageURLTutorialProps {
  setOnNext: React.Dispatch<React.SetStateAction<number>>;
  setPageId: React.Dispatch<React.SetStateAction<string>>;
}

export default function PageIdTutorial({
  setOnNext,
  setPageId,
}: PageURLTutorialProps) {
  const handlePageUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    const textValue = event.target.value;
    setPageId(textValue);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-indigo-500">2. Copy Page ID from your page</h2>
      <video
        width="640"
        height="360"
        autoPlay
        muted
        loop
        playsInline
        className="rounded-lg shadow-lg"
      >
        <source src="/share_page_link.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-col gap-1">
        <label htmlFor="">Page ID</label>
        <div className="flex w-[350px] items-center justify-start gap-2 rounded-md border-[2px] border-indigo-200 bg-white px-2 py-2">
          <HiLink size={20} />
          <input
            type="text"
            className="input-page-url w-full"
            onChange={handlePageUrl}
            placeholder="Ex: 66ba254316fa4a09bbcdf99d2253d779"
          />
        </div>
      </div>
      <div className="flex w-full justify-end" onClick={() => setOnNext(3)}>
        <button className="font-poppins flex items-center justify-center gap-2 rounded-md border-[1px] border-indigo-300 bg-indigo-500 px-6 py-3 text-[12px] font-bold text-white ">
          Next step
        </button>
      </div>
    </div>
  );
}

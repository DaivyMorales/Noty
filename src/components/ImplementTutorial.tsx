interface ImplementTutotialProps {
  setOnNext: React.Dispatch<React.SetStateAction<number>>;
}

export default function ImplementTutorial({
  setOnNext,
}: ImplementTutotialProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-indigo-500">
        1. Link your Notion page to Noty integration
      </h2>
      <video
        width="640"
        height="360"
        autoPlay
        muted
        loop
        playsInline
        className="rounded-lg shadow-lg"
      >
        <source src="/integration_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex w-full justify-end" onClick={() => setOnNext(2)}>
        <button className="font-poppins flex items-center justify-center gap-2 rounded-md border-[1px] border-indigo-300 bg-indigo-500 px-6 py-3 text-[12px] font-bold text-white ">
          Next step
        </button>
      </div>
    </div>
  );
}

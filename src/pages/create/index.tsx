import { useState } from "react";
import ImplementTutorial from "@/components/ImplementTutorial";
import FormDatabaseName from "@/components/FormDatabaseName";
import PageIdTutorial from "@/components/PageIdTutorial";
import { useRouter } from "next/router";
import axios from "axios";

export default function Create() {
  const [onNext, setOnNext] = useState(1);
  const [pageId, setPageId] = useState("");

  const router = useRouter();
  const { code } = router.query;

  const requestNotionToken = async () => {
    const body = {
      code: code,
    };
    const response = await axios.post("/api/notion/token", body);
    console.log(response);
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      {/* <p>{code}</p>
      <button onClick={() => requestNotionToken()}>generate token</button> */}
      {onNext === 1 && <ImplementTutorial setOnNext={setOnNext} />}
      {onNext === 2 && (
        <PageIdTutorial setOnNext={setOnNext} setPageId={setPageId} />
      )}
      {onNext === 3 && (
        <FormDatabaseName setOnNext={setOnNext} pageId={pageId} />
      )}
    </div>
  );
}

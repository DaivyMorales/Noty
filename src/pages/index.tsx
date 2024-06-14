import Image from "next/image";
import { RiNotionFill } from "react-icons/ri";
import { HiHand } from "react-icons/hi";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { env } from "@/env";

export default function Home() {


  return (
    <div className="relative flex h-screen w-screen items-center justify-center gap-4 ">
      <div className="absolute -top-[500px] right-[0px] z-10 h-[700px] w-full rounded-lg bg-indigo-300 blur-[90px]"></div>
      <div className="relative z-50 grid h-full w-full grid-cols-2 gap-10  ">
        <div className="flex flex-col items-start justify-center gap-4 p-10">
          {/* <h1>Noty</h1> */}
          {/* <div className="">
            Created by Joao
          </div> */}
          <h1 className="font-poppins text-6xl font-black leading-none tracking-tighter">
            Create fast forms and save it in your Notion Database
            {/* <span className="font-inter flex font-medium">
              <RiNotionFill /> 
            </span> Notion Database */}
          </h1>
          <p className="font-medium text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            assumenda minima temporibus est possimus totam mollitia?
          </p>
          <div className="flex w-full items-start justify-start gap-3">
            <input
              type="text"
              className="w-[350px] rounded-md border-[2px] border-indigo-500 bg-white py-2 pl-2"
              placeholder="yourawsomeemail@noty.com"
            />
            <button
              onClick={() => signIn()}
              className="font-poppins flex items-center justify-center gap-2 rounded-md bg-indigo-500 px-6 py-3 text-[12px] font-bold text-white"
            >
              JOIN WAITLIST <HiHand size={20} />
            </button>

            <Link
              
              href={`https://api.notion.com/v1/oauth/authorize?owner=user&client_id=faa9345b-b71e-4116-b643-fbc069aeecf8&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcreate&response_type=code`}
            >
              Sign In with Notion
            </Link>
          </div>
        </div>

        <div className=" flex items-center justify-center">
          <div className="">
            <img src="/Mac.png" className=" " alt="notion" />
          </div>
        </div>
      </div>
    </div>
  );
}

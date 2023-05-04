"use client";
import { AiOutlineFileAdd } from "react-icons/ai";

const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full transition shadow-sm hover:shadow-md cursor-pointer">
      <div className="flex flex-row items-center justify-center">
        <div className="text-sm font-semibold px-6">Search</div>
        <div className="hiiden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          Dashboard
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block">Create report</div>
          <div className="bg-rose-500 p-2 rounded-full text-white">
            <AiOutlineFileAdd className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

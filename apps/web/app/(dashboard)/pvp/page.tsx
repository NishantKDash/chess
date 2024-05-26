import React from "react";

const page = (): JSX.Element => {
  return (
    <div className="flex p-5 sm:pl-72 h-screen">
      <div className="flex-col  h-[56rem] w-2/3 bg-gray-700">
        <div className="text-slate-200 bg-gray-600">User1</div>
        <div>Board</div>
        <div className="text-slate-200 bg-gray-600">User2</div>
      </div>
    </div>
  );
};

export default page;

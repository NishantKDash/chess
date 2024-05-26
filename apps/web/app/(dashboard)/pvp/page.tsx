import React from "react";
import ChessBoard from "../../components/ChessBoard";

const page = (): JSX.Element => {
  return (
    <div className="flex p-5 sm:pl-72 h-screen">
      <div className="flex-col  h-[56rem] w-2/3 bg-gray-700">
        <div className="text-slate-200 bg-gray-600 m-2 p-2">User1</div>
        <div className="m-2 p-2">
          <ChessBoard></ChessBoard>
        </div>
        <div className="text-slate-200 bg-gray-600 m-2 p-2">User2</div>
      </div>
    </div>
  );
};

export default page;

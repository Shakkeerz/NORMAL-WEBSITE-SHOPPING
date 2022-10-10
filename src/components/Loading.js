import React from "react";

function Loading() {
    const loadingCardNums = [1,2,3,4,5,6,7,8]
  return (
    
    <>
    <div className="flex flex-wrap gap-2">
    {loadingCardNums.map(num=>{
       return (
        <div className="  shadow-lg">
        <div className=" shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex flex-col space-x-4">
            <div className=" bg-slate-700 h-[270px] w-[250px]"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
       )
    })}
    </div>
    
      
    </>
  );
}

export default Loading;

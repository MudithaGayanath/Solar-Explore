import React from "react";

function MsgHistory({obj}) {
  const headers = ["Date", "Message"];
  return (
    <div className="w-full h-screen   mt-16  flex justify-center items-center ">

    <table className=" border-solid border-2    w-full h-screen ">
      <thead >
        <tr className="text-center h-14 uppercase ">
          {headers.map((h) => {
            return <td>{h}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {
          obj.map((o,index)=>{
            return(
              <tr key={o.date} className={` h-14 text-center border-solid border-2 ${(index % 2 == 0)?"bg-gray-900":""}  `}>
                <td>{o.date}</td>
                <td>{o.msg}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    </div>
  );
}

export default MsgHistory;

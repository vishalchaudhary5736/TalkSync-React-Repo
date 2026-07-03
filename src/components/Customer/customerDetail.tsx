import { Outlet,useParams } from "react-router-dom";
import { CustomerAccount } from "./CustomerAccount";
import { useFetchUserQuery } from "../../features/customer/customerApi";

export const CustomerDetails = () => {
  const {id} = useParams()
  const {data,isLoading,isError} = useFetchUserQuery({id})

  return (
    <>
     <div className="p-8 h-full w-full flex">
         <div className=" w-full border border-slate-200 rounded-md">
        <div className="flex flex-row h-full">
          <div className="w-1/4 border-r border-r-slate-200 h-full"><CustomerAccount user={data?.resdata} isLoading = {isLoading} isError={isError}/></div>
          <div className="flex-1"><Outlet context={{user:data?.resdata,isLoading,isError}} /></div>
        </div>
      </div>
     </div>
    </>
  );
};

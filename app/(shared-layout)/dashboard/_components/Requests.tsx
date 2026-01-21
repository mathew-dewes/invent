
import { RequestChart } from "./charts/RequestChart";
import RequestCard from "./RequestCard";
import { getRequestCardData, getRequestChartData } from "@/lib/queries/request";


export default async function Requests() {


    const requests = await getRequestCardData();
    const chartData = await getRequestChartData();

    const urgentRequestCount = requests.filter((i => (i.status !=="COMPLETE" && i.status !== "READY" ))).length
    const completedRequests = requests.filter((i => i.status === "COMPLETE"));
    const openRequests = requests.filter((i => i.status === "OPEN"));
    const pendingRequests = requests.filter((i => i.status === "PENDING"));
    const readyRequests = requests.filter((i => i.status === "READY"));
  
    

    return (
        <div className="border-2 p-3 rounded-xl bg-secondary">
            <h1 className="font-semibold text-xl py-3 ml-1">Requests</h1>
            <div className="grid grid-cols-4 gap-3">
                <div className="col-span-2">
                    <RequestChart chartData={chartData} activeRequestCount={urgentRequestCount} />
                </div>

                <div className="col-span-2 flex flex-col gap-5">
                    <div className="grid grid-cols-2 gap-3">
                        {openRequests.length > 0 && <RequestCard title="Open" status="OPEN" total={openRequests.length} requests={openRequests}  />}
                        {pendingRequests.length > 0 && <RequestCard title="Pending" status="PENDING" total={pendingRequests.length} requests={pendingRequests} />}
                        {readyRequests.length > 0 && <RequestCard title="Ready" status="READY" total={readyRequests.length} requests={readyRequests} /> }
                        {completedRequests.length > 0 && <RequestCard title="COMPLETE" status="COMPLETE" total={completedRequests.length} requests={completedRequests} />}
             

                    </div>
           


                </div>








            </div>

        </div>
    )
}
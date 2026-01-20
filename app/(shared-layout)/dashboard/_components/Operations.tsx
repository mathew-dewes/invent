import OperationsCard from "./OperationsCard";

export default function Operations() {
    return (
        <div className="border-2 p-3 rounded-xl bg-secondary">
        <h1 className="font-semibold text-xl py-3 ml-1">Operations Overview:</h1>
            <div className="flex gap-10">
                <OperationsCard title="Open Requests" />
                <OperationsCard title="Pending Requests" />
                <OperationsCard title="Puchases Placed" />
            </div>

        </div>
    )
}
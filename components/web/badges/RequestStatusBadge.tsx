
import { Badge } from "@/components/ui/badge";
import { RequestStatus } from "@/generated/prisma/enums";


import { cn, setStatusColor } from "@/lib/utils";

export default function RequestStatusBadge({ status }: {
    status: RequestStatus
}) {
    return <div>
        <Badge className={cn(setStatusColor(status))}>{status}</Badge>
    </div>
}
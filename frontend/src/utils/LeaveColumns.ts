
import type { ReactNode } from "react";
import type { TableColumn } from "@revivejs/react-data-table-component";

type LeaveRow = {
    sno: number;
    employeeId: string;
    name: string;
    leaveType: string;
    department: string;
    days: number;
    status: string;
    action: ReactNode;
};

export const LeaveColumns: TableColumn<LeaveRow>[] = [
    {
        name: "S No",
        selector: (row) => row.sno,
        width: "70px",
    },
    {
        name: "Emp ID",
        selector: (row) => row.employeeId,
        width: "120px",
    },
    {
        name: "Name",
        selector: (row) => row.name,
        width: "120px",
    },
    {
        name: "Leave Type",
        selector: (row) => row.leaveType,
        width: "140px",
    },
    {
        name: "Department",
        selector: (row) => row.department,
        width: "10px",
    },
    {
        name: "Days",
        selector: (row) => row.days,
        width: "80px",
    },
    {
        name: "Status",
        selector: (row) => row.status,
        width: "120px",
    },
    {
        name: "Action",
        cell: (row) => row.action,
        center: true,
    },
];
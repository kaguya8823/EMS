
export const defaultDepartmentSample = [
    {
        sno: 1,
        dep_name: "IT",
        action: "EditDelete"
    }
]

export const columns = [
    {
        name: "S No",
        selector: (row) => row.sno
    },
    {
        name: "Department Name",
        selector: (row) => row.dep_name
    },
    {
        name: "Action",
        selector: (row) => row.action
    },
]


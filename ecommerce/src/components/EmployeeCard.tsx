export interface Designation {
    id: number,
    name: string,
    description: string
}

export interface Employee {
    id: number,
    firstName: string,
    lastName: string,
    imgUrl: string,
    email: string,
    dateOfJoin: string,
    employeeCompanyId: string,
    totalExperience: string,
    designation: Designation
}

interface EmployeeCardProps {
    employee: Employee
}

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
    return (
        <div
            className="bg-white shadow-md rounded-lg overflow-hidden p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center text-center border border-gray-200 hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <img
                src={employee.imgUrl}
                alt={`${employee.firstName} ${employee.lastName}`}
                className="rounded-full w-24 h-24 object-cover mb-4"/>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {employee.firstName} {employee.lastName}
            </h3>
            <p className="text-gray-600 text-sm mb-2">Email: {employee.email}</p>
            <p className="text-gray-600 text-sm mb-2">Designation: {employee.designation.name}</p>
            <p className="text-gray-600 text-sm">Total Experience: {employee.totalExperience}</p>
        </div>
    )
}

export default EmployeeCard

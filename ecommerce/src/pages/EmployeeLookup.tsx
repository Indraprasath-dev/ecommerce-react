import { useContext, useEffect } from "react"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import { EmployeeContext } from "../context/EmployeeContext"
import { ApiService } from "../service/ApiService"
import EmployeeCard from "../components/EmployeeCard"

const EmployeeLookup = () => {
    const { state, dispatch } = useContext(EmployeeContext)

    useEffect(() => {
        const getData = async () => {
            try {
                const limit = 9
                const start = (state.page - 1) * limit
                const response = await ApiService.get(`/employee/profiles?start=${start}&limit=${limit}&filter=`)
                const totalPages = Math.ceil(response.data.entity.count / limit)
                dispatch({
                    type: "FETCH_EMPLOYEES",
                    payload: { employees: response.data.entity.list, totalPages }
                })
            } catch (error) {
                console.log("Error fetching employee data:", error)
            }
        }
        getData()
    }, [state.page, dispatch])

    const handlePageChange = (_event: any, value: number) => {
        dispatch({ type: "SET_PAGE", payload: value })
    }

    return (
        <>
            <div className="flex flex-wrap justify-center gap-6 p-4 mt-20">
                {state.employees.map((employee) => (
                    <EmployeeCard key={employee.id} employee={employee} />
                ))}
            </div>
            <Stack spacing={2} className="flex items-center m-3">
                <Pagination
                    count={state.totalPages}
                    color="primary"
                    onChange={handlePageChange}
                    page={state.page}
                />
            </Stack>
        </>
    )
}

export default EmployeeLookup

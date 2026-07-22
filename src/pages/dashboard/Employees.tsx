import { useEffect, useState } from "react";

import { getEmployees } from "../../services/employee.service";

import { Employee } from "../../types/employee";

function Employees() {

    const [employees, setEmployees] = useState<Employee[]>([]);

    useEffect(() => {

        loadEmployees();

    }, []);

    const loadEmployees = async () => {

        try {

            const data = await getEmployees();

            setEmployees(data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div>

            <div className="mb-6 flex items-center justify-between">

                <h1 className="text-3xl font-bold">

                    Employees

                </h1>

                <button className="rounded bg-blue-600 px-4 py-2 text-white">

                    Add Employee

                </button>

            </div>

            <table className="w-full rounded bg-white shadow">

                <thead>

                    <tr className="border-b">

                        <th className="p-4 text-left">Code</th>

                        <th className="p-4 text-left">Name</th>

                        <th className="p-4 text-left">Designation</th>

                        <th className="p-4 text-left">Salary</th>

                    </tr>

                </thead>

                <tbody>

                    {employees.map(employee => (

                        <tr key={employee.id} className="border-b">

                            <td className="p-4">

                                {employee.employeeCode}

                            </td>

                            <td className="p-4">

                                {employee.firstName} {employee.lastName}

                            </td>

                            <td className="p-4">

                                {employee.designation}

                            </td>

                            <td className="p-4">

                                {employee.salary}

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default Employees;
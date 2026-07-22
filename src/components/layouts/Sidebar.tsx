import { NavLink } from "react-router-dom";

function Sidebar() {

    return (

        <aside className="w-64 bg-slate-900 text-white">

            <div className="p-6">

                <h1 className="text-2xl font-bold">

                    HRFlow

                </h1>

            </div>

            <nav className="space-y-2 px-4">

                <NavLink
                    to="/dashboard"
                    className="block rounded p-3 hover:bg-slate-800"
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/employees"
                    className="block rounded p-3 hover:bg-slate-800"
                >
                    Employees
                </NavLink>

                <NavLink
                    to="/departments"
                    className="block rounded p-3 hover:bg-slate-800"
                >
                    Departments
                </NavLink>

                <NavLink
                    to="/leave"
                    className="block rounded p-3 hover:bg-slate-800"
                >
                    Leave
                </NavLink>

                <NavLink
                    to="/payroll"
                    className="block rounded p-3 hover:bg-slate-800"
                >
                    Payroll
                </NavLink>

            </nav>

        </aside>

    );

}

export default Sidebar;
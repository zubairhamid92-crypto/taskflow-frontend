import { useForm } from "react-hook-form";
import { createEmployee } from "../../services/employee.service";

interface Props {
    open: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

interface EmployeeForm {
    firstName: string;
    lastName: string;
    email?: string;
    phone?: string;
    designation: string;
    salary: number;
    joiningDate: string;
}

function EmployeeModal({
    open,
    onClose,
    onSuccess,
}: Props) {

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<EmployeeForm>();

    if (!open) return null;

    const onSubmit = async (data: EmployeeForm) => {

        await createEmployee(data);

        reset();

        onSuccess();

        onClose();

    };

    return (

        <div className="fixed inset-0 flex items-center justify-center bg-black/40">

            <div className="w-full max-w-xl rounded-lg bg-white p-6">

                <h2 className="mb-6 text-2xl font-bold">

                    Add Employee

                </h2>

                <form
                    className="space-y-4"
                    onSubmit={handleSubmit(onSubmit)}
                >

                    <input
                        className="w-full rounded border p-3"
                        placeholder="First Name"
                        {...register("firstName")}
                    />

                    <input
                        className="w-full rounded border p-3"
                        placeholder="Last Name"
                        {...register("lastName")}
                    />

                    <input
                        className="w-full rounded border p-3"
                        placeholder="Email"
                        {...register("email")}
                    />

                    <input
                        className="w-full rounded border p-3"
                        placeholder="Phone"
                        {...register("phone")}
                    />

                    <input
                        className="w-full rounded border p-3"
                        placeholder="Designation"
                        {...register("designation")}
                    />

                    <input
                        type="number"
                        className="w-full rounded border p-3"
                        placeholder="Salary"
                        {...register("salary")}
                    />

                    <input
                        type="date"
                        className="w-full rounded border p-3"
                        {...register("joiningDate")}
                    />

                    <div className="flex justify-end gap-3">

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded border px-4 py-2"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded bg-blue-600 px-4 py-2 text-white"
                        >
                            Save
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default EmployeeModal;
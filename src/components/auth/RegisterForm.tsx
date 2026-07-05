import { useState } from "react";
import { useForm } from "react-hook-form";

import Input from "../Input";
import Button from "../Button";

import { RegisterRequest } from "../../types/auth";
import { register as registerUser } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterRequest>({
            mode: "onChange",
            reValidateMode: "onChange",
        });

    const onSubmit = async (data: RegisterRequest) => {
        try {
            console.log("check data",data);
            
            setLoading(true);

            const response = await registerUser(data);

            console.log("Register Response:", response);

            navigate("/login", {
             replace: true,
            });

        } catch (error: any) {
            console.error(error);

            alert(
                error?.response?.data?.message || "Something went wrong."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-lg">
            <h1 className="text-center text-3xl font-bold">HRFlow</h1>

            <p className="mt-2 text-center text-gray-500">
                Create your organization
            </p>

            <form
                className="mt-8 space-y-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <input
        className="w-full rounded-lg border border-gray-300 px-4 py-3"
        placeholder="Company Name"
        {...register("organizationName", {
            required: "Company Name is required",
            minLength: {
                value: 3,
                message: "Minimum 3 characters",
            },
        })}
    />

    {errors.organizationName && (
        <p className="mt-1 text-sm text-red-500">
            {errors.organizationName.message}
        </p>
    )}
                </div>

                <div>
                    <Input
                        placeholder="Company Email"
                        {...register("organizationEmail", {
                            required: "Company Email is required",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Invalid company email",
                            },
                        })}
                    />
                    {errors.organizationEmail && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.organizationEmail.message}
                        </p>
                    )}
                </div>

                <div>
                    <Input
                        placeholder="Company Phone"
                        {...register("organizationPhone", {
                            required: "Company Phone is required",
                            pattern: {
                                value: /^[0-9]{10,15}$/,
                                message: "Phone must be between 10 and 15 digits",
                            },
                        })}
                    />
                    {errors.organizationPhone && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.organizationPhone.message}
                        </p>
                    )}
                </div>

                <div>
                    <Input
                        placeholder="First Name"
                        {...register("firstName", {
                            required: "First Name is required",
                            minLength: {
                                value: 2,
                                message: "Minimum 2 characters",
                            },
                        })}
                    />
                    {errors.firstName && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.firstName.message}
                        </p>
                    )}
                </div>

                <div>
                    <Input
                        placeholder="Last Name"
                       {...register("lastName", {
                            required: "Last Name is required",
                            minLength: {
                                value: 2,
                                message: "Minimum 2 characters",
                            },
                        })}
                    />
                    {errors.lastName && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.lastName.message}
                        </p>
                    )}
                </div>

                <div>
                    <Input
                        type="email"
                        placeholder="Admin Email"
                       {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Invalid email address",
                            },
                        })}
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div>
                    <Input
                        type="password"
                        placeholder="Password"
                       {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must contain at least 8 characters",
                        },
                        pattern: {
                            value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
                            message:
                                "Password must contain uppercase, lowercase and number",
                        },
                    })}
                    />
                    {errors.password && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <Button
                    type="submit"
                    text="Create Organization"
                    loading={loading}
                />
            </form>
        </div>
    );
}

export default RegisterForm;
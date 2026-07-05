import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

import { LoginRequest } from "../../types/auth";
import { login } from "../../services/auth.service";

import Button from "../Button";

function LoginForm() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginRequest>();

    const onSubmit = async (data: LoginRequest) => {

        try {

            setLoading(true);

            const response = await login(data);

            localStorage.setItem("token", response.data.token);

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            navigate("/dashboard");

        } catch (error: any) {

            alert(
                error?.response?.data?.message ||
                "Invalid credentials."
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-lg">

            <h1 className="text-center text-3xl font-bold">
                HRFlow
            </h1>

            <p className="mt-2 text-center text-gray-500">
                Login to your account
            </p>

            <form
                className="mt-8 space-y-4"
                onSubmit={handleSubmit(onSubmit)}
            >

                <div>

                    <input
                        className="w-full rounded-lg border border-gray-300 px-4 py-3"
                        placeholder="Organization Slug"
                        {...register("organizationSlug", {
                            required: "Organization Slug is required",
                        })}
                    />

                    {errors.organizationSlug && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.organizationSlug.message}
                        </p>
                    )}

                </div>

                <div>

                    <input
                        className="w-full rounded-lg border border-gray-300 px-4 py-3"
                        placeholder="Email"
                        {...register("email", {
                            required: "Email is required",
                        })}
                    />

                    {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.email.message}
                        </p>
                    )}

                </div>

                <div>

                    <input
                        type="password"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3"
                        placeholder="Password"
                        {...register("password", {
                            required: "Password is required",
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
                    text="Login"
                    loading={loading}
                />

            </form>

            <p className="mt-6 text-center text-sm">

                Don't have an account?{" "}

                <Link
                    to="/register"
                    className="font-semibold text-blue-600"
                >
                    Register
                </Link>

            </p>

        </div>

    );

}

export default LoginForm;
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { loginInterface } from "../../types/types";
import { useLoginMutation } from "../../features/auth/authApi";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { toast } from "react-toastify";
import { login } from "../../features/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loginUser, { isLoading }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<loginInterface>({
    mode: "onChange",
  });

  const onSubmit = async (data: loginInterface) => {
    try {
      const response = await loginUser(data).unwrap();
      console.log("response=>", response);
      dispatch(
        login({
          token: response.token,
          user: response.data,
        }),
      );
      toast.success(response.message);
      navigate("/chat");
    } catch (error: any) {
      console.error("Signup Error=>", error);
      toast.error(error?.data?.message);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className=" p-8">
        <h2 className="text-3xl font-bold text-slate-800">Welcome Back</h2>

        <p className="text-slate-500 mt-2">
          Sign in to continue to your account.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email
            </label>

            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              placeholder="Enter your email"
              className="
                w-full
                px-4
                py-3
                border
                border-slate-300
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 min-h-4">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>

            <input
              {...register("password", {
                required: "Password is required",
              })}
              type="password"
              placeholder="Enter your password"
              className="
                w-full
                px-4
                py-3
                border
                border-slate-300
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1 min-h-4">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" />
              Remember me
            </label>

            <a
              href="/forgot-password"
              className="text-sm text-indigo-600 hover:text-indigo-700"
            >
              Forgot password?
            </a>
          </div>

          <button
            disabled={!isValid || isLoading}
            type="submit"
            className={`
    w-full py-3 rounded-xl font-semibold
    ${
      isValid
        ? "bg-indigo-600 hover:bg-indigo-700 text-white"
        : "bg-slate-300 text-slate-500 cursor-not-allowed"
    }
  `}
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-indigo-600 font-medium hover:text-indigo-700"
          >
            Create account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

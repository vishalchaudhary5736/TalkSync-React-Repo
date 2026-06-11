import { useNavigate } from "react-router-dom";
import { useSignupMutation } from "../../features/auth/authApi";
import type { signup } from "../../types/types";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { login } from "../../features/auth/authSlice";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [signup, { isLoading }] = useSignupMutation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<signup>({
    mode: "onChange",
  });

  const password = watch("password", "");

  const onSubmit = async (data: signup) => {
    try {
      const response = await signup(data).unwrap();
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
    <div className="w-full max-w-lg">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-slate-800">Create Account</h2>

        <p className="text-slate-500 mt-2">
          Create your account to start chatting.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                First Name
              </label>

              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                type="text"
                placeholder="John"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1 min-h-4">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Last Name
              </label>

              <input
                {...register("lastName", {
                  required: "Last name is required",
                })}
                type="text"
                placeholder="Doe"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1 min-h-4">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>

            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 min-h-4">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Phone Number
            </label>

            <div className="flex gap-3">
              <input
                {...register("countryCode", {
                  required: "Country Code is required",
                  pattern: {
                    value: /^\+\d+$/,
                    message: "Enter a valid country code",
                  },
                })}
                type="text"
                placeholder="+91"
                className="w-24 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.countryCode && (
                <p className="text-red-500 text-xs mt-1 min-h-4">
                  {errors.countryCode.message}
                </p>
              )}

              <input
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid Phone number",
                  },
                })}
                type="text"
                placeholder="9876543210"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1 min-h-4">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>

            <input
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must be at least 8 characters and contain 1 uppercase letter, 1 number, and 1 special character",
                },
              })}
              type="password"
              placeholder="Create password"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1 min-h-4">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Confirm Password
            </label>

            <input
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1 min-h-4">
                {errors.confirmPassword.message}
              </p>
            )}
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
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-600 font-medium hover:text-indigo-700"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;

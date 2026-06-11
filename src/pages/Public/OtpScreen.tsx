import { useLocation, useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "vishalchaudhary5736@gmail.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/reset-password", { state: { email } });
  };
  return (
    <div>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-slate-800">Verify OTP</h2>

        <p className="text-slate-500 mt-3">
          Enter the verification code sent to
        </p>

        <p className="font-semibold text-slate-700 mt-1">{email}</p>
      </div>

      <form className="mt-10" onSubmit={handleSubmit}>
        <div className="flex justify-center gap-4">
          <input className="w-16 h-16 text-2xl font-semibold text-center border-2 border-slate-300 rounded-2xl focus:border-indigo-500 focus:outline-none" />
          <input className="w-16 h-16 text-2xl font-semibold text-center border-2 border-slate-300 rounded-2xl focus:border-indigo-500 focus:outline-none" />
          <input className="w-16 h-16 text-2xl font-semibold text-center border-2 border-slate-300 rounded-2xl focus:border-indigo-500 focus:outline-none" />
          <input className="w-16 h-16 text-2xl font-semibold text-center border-2 border-slate-300 rounded-2xl focus:border-indigo-500 focus:outline-none" />
        </div>

        <button
          type="submit"
          className="w-full mt-10 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-semibold"
        >
          Verify OTP
        </button>

        <p className="text-center text-sm text-slate-500 mt-5">
          Didn't receive the code?
        </p>

        <button
          type="button"
          className="w-full mt-2 text-indigo-600 font-semibold"
        >
          Resend OTP
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;

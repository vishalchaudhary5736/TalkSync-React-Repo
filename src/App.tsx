import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoute";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { useGetProfileQuery } from "./features/auth/authApi";
import { useEffect } from "react";
import { setUser } from "./features/auth/authSlice";

function App() {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);
  const { data: profile, isSuccess } = useGetProfileQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (isSuccess && profile) {
      dispatch(setUser(profile?.data));
    }
  }, [profile, isSuccess, dispatch]);
  return (
    <>
      <AppRoutes />
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;

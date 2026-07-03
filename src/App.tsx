import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

import AppRoutes from "./routes/AppRoute";

import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";

import { useGetProfileQuery } from "./features/auth/authApi";
import { setUser } from "./features/auth/authSlice";

import socket from "./services/socket";

function App() {
  const dispatch = useAppDispatch();

  const token = useAppSelector((state) => state.auth.token);

  const { data: profile, isSuccess } = useGetProfileQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (isSuccess && profile) {
      dispatch(setUser(profile.data));
    }
  }, [profile, isSuccess, dispatch]);

  useEffect(() => {
    if (!token) return;

    // Pass token to server
    socket.io.opts.query = {
      token,
    };

    socket.connect();

    socket.on("connect", () => {
      console.log("Socket Connected");
      console.log("Socket ID:", socket.id);
    });

    socket.on("disconnect", (reason) => {
      console.log("Socket Disconnected:", reason);
    });

    socket.on("connect_error", (error) => {
      console.log("Socket Error:", error.message);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("connect_error");

      socket.disconnect();
    };
  }, [token]);

  return (
    <>
      <AppRoutes />
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
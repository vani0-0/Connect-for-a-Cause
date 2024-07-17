"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { logout } from "../lib/actions";

import Swal from "sweetalert2";
const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await logout();
      } catch (error) {
        console.error(`${error}`);
      } finally {
        router.push("/auth/login");
      }
    };
    handleLogout();
  }, [router]);

  return <div>Logging out...</div>;
};

export default LogoutPage;

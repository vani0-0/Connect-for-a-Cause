"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { logout } from "../_lib/actions";

import Swal from "sweetalert2";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
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

  return (
    <Card className="p-8 rounded-lg shadow-lg w-full max-w-md">
      <CardTitle className="text-center mb-6">Logging out</CardTitle>
      <CardDescription>Thank you for using our app</CardDescription>
    </Card>
  );
};

export default LogoutPage;

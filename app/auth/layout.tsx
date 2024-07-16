import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex justify-center flex-col items-center min-h-screen bg-slate-50 space-y-2">
      <h1 className="text-2xl md:text-4xl font-bold">Connect For A Cause</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {children}
      </div>
    </main>
  );
}

import { getUser } from "@/actions/auth/server-auth";
import { Sidebar } from "@/components/Sidebar";
import React from "react";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUser();

  return (
    <div className="flex justify-between">
      {children}
      <Sidebar />
    </div>
  );
};
export default RootLayout;

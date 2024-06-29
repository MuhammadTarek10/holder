import { Sidebar } from "@/components/Sidebar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between">
      {children}
      <Sidebar />
    </div>
  );
};
export default RootLayout;

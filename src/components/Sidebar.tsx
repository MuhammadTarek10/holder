"use client";

import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/utils/constants";
import { User } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProfileSidebar } from "./ProfileSidebar";

export const Sidebar = async ({ user }: { user: User }) => {
  const pathname = usePathname();

  return (
    <div className="sidebar">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 mx-4 justify-center">
          <h1>Holder</h1>
          {/* TODO: LOGO */}
        </div>

        <ProfileSidebar user={user} />
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route;

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", { "bg-active": isActive })}>
              <div className="relative size-6">
                <Image
                  src={item.imageUrl}
                  alt={item.label}
                  fill
                  className={cn({
                    "brightness-[1] invert-0": isActive,
                  })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

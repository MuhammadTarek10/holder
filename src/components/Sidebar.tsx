"use client";

import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="sidebar">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 mx-4 justify-center">
          <h1>Holder</h1>
          {/* TODO: LOGO */}
        </div>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route;

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", { "bg-link-gradient": isActive })}>
              <div className="relative size-6">
                <Image
                  src={item.imageUrl}
                  alt={item.label}
                  fill
                  className={cn({
                    "brightness-[3] invert-0": isActive,
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

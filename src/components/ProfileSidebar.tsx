import { User } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";

export const ProfileSidebar = ({ user }: { user: User }) => {
  return (
    <div className="mb-10">
      <Link href="#" className="sidebar-link">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image
              src="/images/db.png"
              alt="Profile Pic"
              width={50}
              height={50}
              className="rounded-full w-[60px] h-[60px] ring-2 ring-gray-400 p-1"
            />
          </div>
        </div>
        <p className="max-xl:hidden text-14 font-semibold">Welcome, Ahmed</p>
      </Link>
    </div>
  );
};

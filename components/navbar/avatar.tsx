import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { PiGear, PiHeart, PiPackage } from "react-icons/pi";

interface AvatarProps {
  authenticatedUser?: any;
}

const Avatar: React.FC<AvatarProps> = ({ authenticatedUser }) => {
  const handleMyUpvotes = () => {
    window.location.href = "/my-upvoted";
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <Image
            src={authenticatedUser.user.image}
            className="rounded-full border h-8 w-8"
            width={40}
            height={40}
            alt="avatar"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 space-y-1 p-2 text-gray-600">
          <DropdownMenuItem>
            <Link
              href="/my-products"
              className="flex gap-x-2 rounded-sm w-full cursor-pointer"
            >
              <PiPackage className="text-xl" />
              My Products
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div
              onClick={handleMyUpvotes}
              className="flex gap-x-2 rounded-sm w-full cursor-pointer"
            >
              <PiHeart className="text-xl" />
              Upvoted
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              className="flex gap-x-2 rounded-sm w-full cursor-pointer"
              href="/settings"
            >
              <PiGear className="text-xl" />
              Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div onClick={() => signOut()}>Log out</div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Avatar;

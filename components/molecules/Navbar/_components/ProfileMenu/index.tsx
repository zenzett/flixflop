"use client";

import React, { FunctionComponent, HTMLAttributes, useCallback, useEffect, useRef, useState } from "react";

import Button from "@/components/atoms/Button";
import { removeAllUserCookies } from "@/utils/auth";
import navigate from "@/utils/navigate";

interface ProfileMenuProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}

const ProfileMenu: FunctionComponent<ProfileMenuProps> = ({ name, ...attrs }) => {
  const [isShowProfileMenu, setIsShowProfileMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleLogout = useCallback(() => {
    removeAllUserCookies();
    navigate("/");
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node) && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
      setIsShowProfileMenu(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="relative" {...attrs}>
      <Button transparent onClick={() => setIsShowProfileMenu((prev) => !prev)} ref={buttonRef}>
        <div className="flex items-center justify-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-8">
            <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z" clipRule="evenodd" />
          </svg>
          <span>{name}</span>
        </div>
      </Button>
      {isShowProfileMenu && (
        <div ref={menuRef} className={`absolute flex flex-col justify-center items-center mt-2 right-0 rounded-xl bg-pink-hover w-48 p-1 gap-1 shadow-lg shadow-pink-disabled`}>
          <Button transparent variant="dark" className="w-full">
            My Profile
          </Button>
          <Button transparent variant="dark" className="w-full">
            My Favorite
          </Button>
          <Button transparent variant="dark" className="w-full" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;

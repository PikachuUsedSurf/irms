"use client";
import { HiOutlineMenu } from "react-icons/hi";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { User } from '@prisma/client';
import { signOut } from "next-auth/react"
import useReportModal from "@/app/hooks/useReportModal";

interface UserMenuProps{
  currentUser?: User | null
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {
  const RegisterModal = useRegisterModal();
  const LoginModal = useLoginModal();
  const reportModal = useReportModal();
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onReport = useCallback(() => {
    if (!currentUser) {
      return LoginModal.onOpen();
    }

    reportModal.onOpen();
  },  [currentUser, LoginModal, reportModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div></div>
        <div
          onClick={onReport}
          className=" hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          create report
        </div>
        <div
          onClick={toggleOpen}
          className=" p-4 md-py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-lg cursor-pointer hover:shadow-md transition">
          <HiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className=" absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
                <>
                  <MenuItem onClick={() => {}} label="reports" />
                  <MenuItem onClick={() => {}} label="settings" />
                <hr />
                  <MenuItem label={currentUser.name} />
                  <MenuItem onClick={() => signOut()} label="Log out" />
                </>
            ): (
                <>
                  <MenuItem onClick={LoginModal.onOpen} label="Login" />
                  <MenuItem onClick={RegisterModal.onOpen} label="Create account" />
                </>
            ) }
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;

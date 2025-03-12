import React, { useState } from "react";
import { LockIcon } from "lucide-react";
import { MenuIcon } from "lucide-react";
import { TrashIcon } from "lucide-react";
import AddUser from "@/public/addUser.svg";
import Image from "next/image";
import profile from "@/public/Image/netflix-profile.jpg";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import LoginAccountForm from "../form/login-account-form";
import CreateAccountForm from "../form/create-account-form";
const ManageAccount = () => {
  const [isDelete, setIsDelete] = useState(false);
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState<"login" | "create">("login");

  return (
    <div className="dark:bg-[#000000]">
      <div className="container min-h-screen flex items-center justify-center flex-col">
        <div className="flex flex-col items-center justify-center h-screen">
          <h2 className="fixed top-[20%] shadow-md shadow-red-900/70  text-3xl tracking-[0.2em] whitespace-nowrap font-bold text-center text-black rounded-r-full bg-red-600 p-2">
            Who's Watching <span className="text-white">?</span>
          </h2>
          <ul className="flex flex-wrap pt-20 gap-6">
            <li
              onClick={() => {
                setOpen(true);
                setIsEdit("login");
              }}
              className="cursor-pointer flex flex-col items-center gap-3  group"
            >
              <div className="flex flex-col items-center gap-2 relative">
                <div className="relative border-2 border-transparent group-hover:border-white rounded-md transition-all duration-200">
                  <Image
                    src={profile}
                    alt="account-profile"
                    width={80}
                    height={80}
                    className="rounded-md fill-none"
                  />
                </div>
                {isDelete ? (
                  <div className="flex items-center gap-2 absolute bottom-16  left-1">
                    <TrashIcon className="w-6 h-6 text-gray-900" />
                  </div>
                ) : null}
                <h1 className="text-gray-600 text-[12px] font-bold tracking-[0.2em] group-hover:text-white transition-colors duration-200">
                  Mirsaid
                </h1>
                <LockIcon className="w-4 h-4 text-gray-600" />
              </div>
            </li>

            <li
              onClick={() => {
                setOpen(true);
                setIsEdit("create");
              }}
              className="cursor-pointer flex flex-col items-center gap-3  group"
            >
              <div className="flex flex-col items-center gap-2 ">
                <div className="relative border-2 border-transparent group-hover:border-white rounded-md transition-all duration-200">
                  <Image
                    src={AddUser}
                    alt="account-profile"
                    width={80}
                    height={80}
                    className="rounded-md fill-none bg-transparent invert"
                  />
                </div>
                <h1 className="text-gray-600 text-[12px] font-bold tracking-[0.2em] group-hover:text-white transition-colors duration-200">
                  add Profile
                </h1>
                <MenuIcon className="w-4 h-4 text-gray-600" />
              </div>
            </li>
          </ul>
          <Button
            onClick={() => setIsDelete((prev) => !prev)}
            className="mt-10 w-[160px] h-[35px] text-[12px] font-bold group-hover:text-white transition-colors duration-200"
          >
            Manage Profile
          </Button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-black/50 backdrop-blur-sm max-w-[450px]">
              <DialogTitle className="text-red-600 text-2xl font-bold">NETFLIX</DialogTitle>
              {isEdit === "login" && <LoginAccountForm />}
              {isEdit === "create" && <CreateAccountForm />}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default ManageAccount;

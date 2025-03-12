"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import useGlobalContext from "@/hook/useGloblabContext";
import { useRouter } from "next/navigation";
import Header from "@/components/header/header";
import ManageAccount from "@/components/shared/manage-account";

const Browse = () => {
  const { account } = useGlobalContext();
  const { data: session } = useSession();
  
  const router = useRouter();

  useEffect(() => {
    if (session === null) {
      router.push("/login"); // Agar session yuklanmagan bo'lsa login sahifasiga o'tish
    }
  }, [session, router]);

  if (session === null) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-brightness-50 z-50">
        <div className="h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-red-600"></div>
        </div>
      </div>
    );
  }

  if (account === null) {
    return <ManageAccount />;
  }

  return (
    <div>
      <Header />
      <section className="container mx-auto px-4">
        <h1>Browse Page</h1>
      </section>
    </div>
  );
};

export default Browse;

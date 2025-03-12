"use client";
import Image from "next/image";
import nLogo from "@/public/netflix.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NT from "@/public/Image/NetflixHome.jpg";
import { useState } from "react";
import { Github, Facebook, Mail, } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleGithubSignIn = async () => {
    try {
      const result = await signIn("github", {
        redirect: false,
        callbackUrl: "/browse"
      });
      
      if (result?.ok) {
        router.push("/browse");
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 -z-10">
        <Image src={NT} alt="Netflix Background" fill className="object-cover brightness-[40%]" priority />
      </div>

      <div className="container mx-auto px-4">
        <header className="py-6">
          <Link href="/">
            <Image src={nLogo} alt="Netflix" width={167} height={45} priority />
          </Link>
        </header>

        <main className="flex justify-center items-center min-h-[calc(100vh-180px)]">
          <div className="bg-black/60 p-6  rounded-md w-full max-w-[480px] flex flex-col gap-6 ">
            <h1 className="text-3xl font-bold text-white">Sign In</h1>

            <div className="space-y-3 flex flex-col gap-3">
              <Input
                type="email"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 px-4 text-white bg-black/40 border-gray-00 rounded focus:outline-none focus:ring-1 focus:ring-white/50 placeholder:text-[#8c8c8c]"
              />

              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 px-4 text-white bg-black/40 border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-white/50 placeholder:text-[#8c8c8c]"
              />

              <Button className="w-full h-12 bg-[#E50914] hover:bg-[#E50914] text-white text-base font-medium">
                Sign In
              </Button>
              <div className="auth-icons flex items-center justify-center gap-2">
                <Button 
                  className="text-[10px] flex flex-col bg-red-500 rounded-full w-10 h-10 hover:bg-red-700" 
                  onClick={handleGithubSignIn}
                >
                  <Github className="text-white"/>
                </Button>
                <Button className=" text-[10px] flex flex-col bg-blue-500 rounded-full w-10 h-10 hover:bg-blue-700">
                <Facebook className="text-white"/>
                </Button>
                <Button className=" text-[10px] flex flex-col bg-blue-400 rounded-full w-10 h-10 hover:text-blue-500 hover:bg-blue-500">
                <Mail className="text-white"/>
                </Button>
              </div>

              <div className="flex items-center justify-between text-[#b3b3b3] text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 accent-[#b3b3b3] cursor-pointer"
                  />
                  <span>Remember me</span>
                </label>
                <Link href="/help" className="hover:underline">
                  Need help?
                </Link>
              </div>
            </div>

            <div className="pt-4 text-[#737373]">
              <p className="flex items-center gap-2">
                New to Netflix?{" "}
                <Link href="/" className="text-white hover:underline">
                  Sign up now
                </Link>
              </p>
              
              <p className="text-[13px] mt-4">
                This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  Learn more.
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login; 
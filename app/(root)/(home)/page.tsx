"use client";
import * as React from "react";
import { redirect, useRouter } from "next/navigation";
import nLogo from "@/public/netflix.svg";
import Image from "next/image";
import { Languages, ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NT from "@/public/Image/NetflixHome.jpg";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { z } from "zod";

const Home = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const form = useForm({
    defaultValues: { language: "Eng" },
  });
  const { control, setValue, watch } = form;
  const selectedLanguage = watch("language");
  // redirect("/browse");

  const emailSchema = z.string().email({
    message: "Noto'g'ri elektron pochta manzili kiritildi",
  });

  const validateEmail = (email: string) => {
    try {
      emailSchema.parse(email);
      
      // Email bo'sh bo'lmasligi kerak
      if (email.trim() === '') {
        setEmailError("Elektron pochta manzili bo'sh bo'lishi mumkin emas");
        return false;
      }

      // Email uzunligi kamida 8 ta belgi bo'lishi kerak
      if (email.length < 8) {
        setEmailError("Elektron pochta manzili kamida 8 ta belgidan iborat bo'lishi kerak");
        return false;
      }

      setEmailError(null);
      return true;

    } catch (error) {
      if (error instanceof z.ZodError) {
        setEmailError("Noto'g'ri elektron pochta manzili kiritildi");
      }
      return false;
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const handleGetStarted = () => {
    if (isValidEmail) {
      router.push('/login');
    } else {
      const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
      if (emailInput) {
        emailInput.focus();
      }
    }
  };

  return (
    <section className="home-section relative h-screen w-full">
      <div className="absolute inset-0 -z-10">
        <Image src={NT} alt="Netflix Background" fill className="object-cover brightness-[30%]" priority />
      </div>
      
      <div className="container max-w-[1340px] mx-auto py-4 px-4">
        <nav className="flex items-center justify-between">
          <div>
            <Image
              src={nLogo}
              alt="Netflix"
              width={150}
              height={35}
              priority
            />
          </div>
          <Form {...form}>
            <div className="flex items-center gap-4">
              <FormField
                control={control}
                name="language"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={(value) => setValue("language", value)}
                        defaultValue="Eng"
                      >
                        <SelectTrigger className="w-[144px] h-[40px] flex items-center gap-2 border-red-700 outline-none active:border-red-500 hover:border-red-500">
                          <Languages />
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel className="text-white">Language</SelectLabel>
                            <SelectItem value="Eng">Eng</SelectItem>
                            <SelectItem value="Rus">Rus</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <Link href={"/login"} className="text-white">
                <Button className="bg-red-700 hover:bg-red-600 h-[40px] text-white">Sign In</Button>
              </Link>
            </div>
          </Form>
        </nav>

        <div className="flex flex-col items-center justify-center h-[80vh] text-center text-white">
          <h1 className="text-[60px] font-extrabold mb-4 max-w-[600px]">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-[26px] mb-6 font-bold">Starts at EUR 7.99. Cancel anytime.</p>
          <p className="text-xl mb-6">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          
          <div className="flex flex-col items-start w-full max-w-[600px] mx-auto">
            <div className="flex gap-2 w-full">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
                className={`flex-1 h-14 px-4 text-lg text-white bg-black/60 border ${
                  emailError ? 'border-red-500' : 'border-gray-600'
                } rounded focus:outline-none focus:border-white placeholder:text-gray-400`}
              />
              <Button 
                onClick={handleGetStarted}
                className={`h-14 px-8 text-xl rounded flex items-center gap-2 ${
                  isValidEmail 
                  ? 'bg-[#E50914] hover:bg-[#E50914] cursor-pointer' 
                  : 'bg-[#E50914] opacity-50 cursor-default'
                } text-white font-medium`}
                disabled={!isValidEmail}
              >
                Get Started <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
            {emailError && (
              <p className="text-red-500 text-sm mt-2 ml-1">
                {emailError}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="trending-now">

      </div>
      
    </section>
  );
};

export default Home;

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createAccountSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import PInInput from "react-code-input";


const CreateAccountForm = () => {
  const form = useForm<z.infer<typeof createAccountSchema>>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      name: "",
      password: "",
    },
  });
  
  const {isSubmitting} = form.formState;

  async function onSubmit(values: z.infer<typeof createAccountSchema>) {
    console.log(values);
  }

  return(
    <>
      <div>
        <h1 className="text-white text-2xl font-bold text-center">Create Account</h1>
        <div className="w-full h-[2px] bg-red-900/50 mb-4"/>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({field}) => (
                <FormItem>
                  <FormLabel className="text-white">Name</FormLabel>
                  <FormControl>
                    <Input {...field} autoComplete="off" disabled={isSubmitting} className="h-[56px] bg-transparent border-2 border-red-600 rounded-md" />
                  </FormControl>
                  <FormDescription>
                    Your name will be used to identify you in the app.
                  </FormDescription>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-white">PIN CODE</FormLabel>
                    <FormControl>
                      <PInInput
                        inputMode="numeric"
                        autoFocus
                        fields={4}
                        disabled={isSubmitting}
                        type="password"                        
                        onChange={field.onChange}
                        value={field.value}
                        className="flex w-full"
                        name="password"
                        inputStyle={{
                          borderWidth: "2px",
                          borderStyle: "solid",
                          borderColor: "red",
                          borderRadius: "8px",
                          width: "90px",
                          height: "56px",
                          fontSize: "24px",
                          textAlign: "center",
                          margin: "0 4px",
                          backgroundColor: "transparent",
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="text-white w-full h-[56px] bg-red-700 hover:bg-red-600 flex items-center justify-center" type="submit" disabled={isSubmitting}>
                Send
              </Button>
          </form>

        </Form>
      
      </div>
    </>
  );
};

export default CreateAccountForm;

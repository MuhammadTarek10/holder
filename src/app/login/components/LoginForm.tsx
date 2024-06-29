"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import CustomInput from "@/components/CustomFormInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { authFormSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8 items-center">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-bold text-black-1">Holder</h1>
        </Link>
      </header>
      <>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CustomInput
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter your email"
              schema={authFormSchema}
            />

            <CustomInput
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              schema={authFormSchema}
            />

            <div className="flex flex-col gap-4">
              <Button type="submit" disabled={isLoading} className="form-btn">
                Sign in
              </Button>
            </div>
          </form>
        </Form>
      </>
    </section>
  );
};

export default LoginForm;

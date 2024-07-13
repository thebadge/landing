"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface IFormInput {
  email: string;
  name: string;
}
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const FormBox = ({ waitListCount }: { waitListCount: number }) => {
  const [loading, setLoading] = useState(false);
  const [alreadyWaitlisted, setAlreadyWaitlisted] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      name: "",
    },
  });

  async function onSubmit(data: IFormInput) {
    setLoading(true);
    const rawFormData = {
      email: data.email,
    };

    await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    });

    localStorage.setItem("waitlist", "true");
    setLoading(false);
  }

  useEffect(() => {
    const savedValue = localStorage.getItem("waitlist");
    setAlreadyWaitlisted(!!savedValue);
  }, [loading]);

  if (alreadyWaitlisted) {
    return (
      <h5 className="pt-5 mb-1 transition-opacity ease-in duration-700 opacity-100 text-lg font-semibold lg:text-base xl:text-lg">
        Thanks for join to our waiting list - You are in
        <span className="text-secondary-300"> #{waitListCount + 1}</span>
      </h5>
    );
  }

  return (
    <form className="flex space-x-2" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        rules={{
          pattern: {
            value: EMAIL_REGEX,
            message: "Please use a valid email address.",
          },
        }}
        control={control}
        render={({ field }) => (
          <Input
            className="max-w-lg flex-1 text-white border-gray-900"
            placeholder="Enter your email"
            type="email"
            {...field}
          />
        )}
      />
      <Button disabled={loading} className="px-8 rounded-full" type="submit">
        Join
      </Button>
    </form>
  );
};

export default FormBox;

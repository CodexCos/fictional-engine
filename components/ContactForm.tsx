"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader, User, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormValues } from "@/lib/validations/contact";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/contact", data);
      if (response.data.success) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error(`Failed to send message: ${response.data.error}`);
      }
    } catch (err: any) {
      toast.error(`Error: ${err.response?.data?.error || err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-lg md:w-lg mx-auto"
    >
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-3 flex items-center  text-gray-400">
          {!errors.name ? <User className="w-5 h-5" /> : <User className="w-5 h-5 text-red-500" />}
        </span>
        <input
          {...register("name")}
          type="text"
          placeholder="Your Name"
          className={`pl-10 w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300 ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
      
      </div>
        {errors.name && (
          <p className="text-red-500 text-sm ">{errors.name.message}</p>
        )}

      <div className="relative w-full">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          {!errors.email ? <Mail className="w-5 h-5" /> : <Mail className="w-5 h-5 text-red-500" />}
        </span>
        <input
          {...register("email")}
          type="email"
          placeholder="Your Email"
          className={`w-full pl-10 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
   
      </div>
           {errors.email && (
          <p className="text-red-500 text-sm ">{errors.email.message}</p>
        )}

      <div className="w-full">
        <textarea
          {...register("message")}
          placeholder="Your Message..."
          className={`w-full p-3 resize-none border rounded h-32 focus:outline-none focus:ring-2 focus:ring-purple-300 ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="p-3 dark:bg-purple-500 dark:hover:bg-purple-700 bg-purple-700 hover:bg-purple-900 text-white rounded cursor-pointer transition-colors ease-in-out delay-300 disabled:opacity-50 flex justify-center items-center"
      >
        {loading ? <Loader className="animate-spin" /> : "Send Message"}
      </button>
    </form>
  );
}



"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { User, Mail } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/api/contact", form);
      if (data.success) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(`Failed to send message: ${data.error}`);
      }
    } catch (err: any) {
      toast.error(`Error: ${err.response?.data?.error || err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg md:w-lg mx-auto">
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          <User className="w-5 h-5" />
        </span>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="pl-10 w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
        />
      </div>

      <div className="relative w-full">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          <Mail className="w-5 h-5" />
        </span>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full pl-10 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
        />
      </div>
      <textarea
        name="message"
        placeholder="Your Message..."
        value={form.message}
        onChange={handleChange}
        required
        className="p-3 resize-none border rounded h-32 focus:outline-none focus:ring-2 focus:ring-purple-300"
      />
      <button
        type="submit"
        disabled={loading}
        className=" p-3 dark:bg-purple-500 dark:hover:bg-purple-700 bg-purple-700 hover:bg-purple-900 text-white  rounded cursor-pointer transition-colors ease-in-out delay-300 disabled:opacity-50"
      >
        {loading ? <Loader className="animate-spin m-auto" /> : "Send Message"}
      </button>
    </form>
  );
}

"use client";

import { emailMQ } from "@/lib/actions";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Check } from "lucide-react";

const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  Checkbox: z.boolean().optional(),
});

type FormData = z.infer<typeof FormSchema>;

export default function RabbitMQForm() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      Checkbox: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("Submitting form", data);

    const email = data.email;
    if (data.Checkbox === true) {
      router.push(`/demos/rabbitmq/${encodeURIComponent(email)}/cred`);
    } else {
      router.push(`/demos/rabbitmq/${encodeURIComponent(email)}`);
    }
  };

  return (
    <Form {...form}>
      <div className=" space-y-3">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-opacity-50 backdrop-blur-lg shadow-2xl bg-slate-500 text-white p-4 rounded flex flex-col items-center justify-center gap-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center justify-center gap-y-2">
                <FormLabel className="text-black font-semibold text-3xl ">
                  
                </FormLabel>
                <FormControl>
                  <Input
                    className="text-black "
                    placeholder="Email"
                    {...field}
                    type="text"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Checkbox"
            render={({ field }) => (
              <FormItem className="flex items-start gap-x-2">
                <FormControl>
                  <Input
                    className="w-4"
                    type="checkbox"
                    checked={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="flex text-white  text-sm ">
                  I would like to recieve guest credentials for the other demos
                </FormLabel>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="rounded-md text-black hover:text-zinc-300 hover:bg-slate-500 transition duration-300 bg-white "
            disabled={form.formState.isSubmitting}
          >
            Submit
          </Button>
        </form>
      </div>
    </Form>
  );
}

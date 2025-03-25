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




const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),

});

type FormData = z.infer<typeof FormSchema>;

export default function RabbitMQForm() {
    const router = useRouter();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });
  
  const onSubmit = async (data: FormData) => {
    console.log("Submitting form", data);

    const { email} = data;
    router.push(`/demos/rabbitmq/${encodeURIComponent(email)}`);
    
  };

  return (
    <Form {...form} >
      <div className=" space-y-6">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="text-white p-4 md:p-16 border-[1.5px] rounded-lg border-gray-300 flex flex-col items-center justify-center gap-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Provide Email</FormLabel>
              <FormControl>
                <Input
                  className="text-white"
                  placeholder="Provide Email"
                  {...field}
                  type="text"
                />
              </FormControl>
            </FormItem>
          )}
        />
        
        <Button
          type="submit"
          className="rounded-xl  hover:bg-slate-300 transition duration-300 bg-slate-500 "
          disabled={form.formState.isSubmitting}
        >
          Submit
        </Button>
      </form>
      </div>
    </Form>
  );
}
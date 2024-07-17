"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Link from "next/link";
import { z } from "zod";

import { RegisterValidationSchema } from "../lib/definitions";
import { signup } from "../lib/actions";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const Register = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof RegisterValidationSchema>>({
    resolver: zodResolver(RegisterValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      role: "R_001",
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterValidationSchema>) {
    try {
      Swal.fire({
        title: "Signing Up...",
        text: "Please wait while we process your signup.",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const response = await signup(values);
      Swal.close();
      if (response.success) {
        Swal.fire(
          "Signup Successful",
          "You have signed up successfully!",
          "success"
        );
        router.push("/dashboard");
      } else {
        Swal.fire(
          "Signup Failed",
          `An error occurred during signup. Please try again. \'${response.data}\'`,
          "error"
        );
      }
    } catch (err) {
      Swal.close();
      Swal.fire(
        "Signup Failed",
        `An error occurred during signup. Please try again. \'${err}\'`,
        "error"
      );
    }
  }

  return (
    <Card className="p-8 rounded-lg shadow-lg w-full max-w-md">
      <CardTitle className="text-center mb-6">Register</CardTitle>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select a Role</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Role" {...field} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="R_001">
                          NGO Representative
                        </SelectItem>
                        <SelectItem value="R_002">
                          Researcher / Academian
                        </SelectItem>
                        <SelectItem value="R_003">
                          Community Organizer
                        </SelectItem>
                        <SelectItem value="R_004">Business Leader</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="********" {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirm_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input placeholder="********" {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-6 mb-4">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition ease-out duration-300"
              >
                Register
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-sm">
                already have an account?
                <Link
                  href="/auth/login"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Login here
                </Link>
                ,
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Register;

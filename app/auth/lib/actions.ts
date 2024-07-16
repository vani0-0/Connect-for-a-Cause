"use server";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { createSession } from "./sessions";

interface ApiResponse {
  success: boolean;
  data: any;
}

interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  role: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

export async function signup({
  email,
  password,
  name,
  role,
}: RegisterCredentials): Promise<ApiResponse> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password, salt);
    const user = await prisma.user.create({
      data: { email, password: hashed_password, name, role },
    });
    await createSession(user.id);
    return { success: true, data: user };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return { success: false, data: "Email already in use." };
      }
    }
    return { success: false, data: error };
  }
}

export async function login({
  email,
  password,
}: LoginCredentials): Promise<ApiResponse> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  try {
    const user = await prisma.user.findFirst({ where: { email: email } });
    if (!user) return { success: false, data: "user not found" };
    console.log(user);
    if (!(await bcrypt.compare(password, user.password)))
      return { success: false, data: "incorrect email or password" };
    await createSession(user.id);
    return { success: true, data: user };
  } catch (error) {
    return { success: false, data: error };
  }
}

export async function logout() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
}

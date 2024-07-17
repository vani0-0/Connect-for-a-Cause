"use server";

import { verifySession } from "@/app/auth/_lib/sessions";
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";

export async function getUsers(): Promise<Array<Partial<User>> | undefined> {
  const verify = await verifySession();
  if (!verify.isAuth) return [];

  const users = await prisma.user.findMany({
    select: { id: true, name: true, email: true, role: true },
  });
  return users;
}

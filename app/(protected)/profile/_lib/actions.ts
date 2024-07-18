import { verifySession } from "@/app/auth/_lib/sessions";
import prisma from "@/lib/prisma";
import { Profile } from "@prisma/client";

export async function getProfile(): Promise<Profile | null> {
  const verify = await verifySession();
  if (!verify.isAuth) return null;

  const profile = await prisma.profile.findUnique({
    where: { userId: verify.userId },
  });

  if (!profile) {
    return await prisma.profile.create({
      data: { userId: verify.userId },
    });
  }

  return profile;
}

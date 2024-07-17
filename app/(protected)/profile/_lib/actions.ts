import { verifySession } from "@/app/auth/_lib/sessions";
import { imageToBase64 } from "@/lib/image";
import prisma from "@/lib/prisma";
import { Profile } from "@prisma/client";
import img from "../default-profile.jpg";
export async function getProfile(): Promise<Profile | null> {
  const verify = await verifySession();
  if (!verify.isAuth) return null;

  const profile = await prisma.profile.findUnique({
    where: { userId: verify.userId },
  });

  if (!profile) {
    // const base64Text = await imageToBase64();
    // console.log(base64Text);
    // return await prisma.profile.create({ data: { userId: verify.userId , profile: } });
  }
  return profile;
}

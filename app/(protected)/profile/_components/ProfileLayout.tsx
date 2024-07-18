import { Card, CardTitle, CardContent } from "@/registry/new-york/ui/card";
import { Separator } from "@/components/ui/separator";
import { Profile } from "@prisma/client";
import ViewProfile from "./ViewProfile";
import ViewIntro from "./ViewIntro";
import Verification from "../../messages/_components/Verification";

interface ProfileLayoutProps {
  profile: Profile | null;
}

const ProfileLayout = ({ profile }: ProfileLayoutProps) => {
  if (!profile) return null;

  return (
    <Card>
      <CardTitle>
        <div className="flex items-center px-4 py-2">
          <h1 className="text-xl font-bold">Edit Profile</h1>
        </div>
      </CardTitle>
      <CardContent>
        <Separator />
        <ViewProfile
          profile={profile.profile ? profile.profile : "/default-profile.jpg"}
        />
        <Separator className="my-4" />
        <ViewIntro />
        <Separator className="my-4" />
        <Verification />
      </CardContent>
    </Card>
  );
};

export default ProfileLayout;

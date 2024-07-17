import ContentLayout from "@/components/layouts/ContentLayout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Card, CardContent } from "@/registry/new-york/ui/card";
import { Separator } from "@/registry/new-york/ui/seperator";
import { getProfile } from "./_lib/actions";

const Profile = async () => {
  const profile = await getProfile();

  return (
    <ContentLayout title="Profile">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href="/dashboard">Dashboard</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Profile</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card>
        <CardContent>
          <div className="flex items-center px-4 py-2">
            <h1 className="text-xl font-bold">Edit Profile</h1>
          </div>
          <Separator />
          <h2>Edit Profile</h2>
        </CardContent>
        <div></div>
      </Card>
    </ContentLayout>
  );
};

export default Profile;

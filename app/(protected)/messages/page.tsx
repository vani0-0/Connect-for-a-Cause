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
import { getUsers } from "./lib/actions";
import { MessagesLayout } from "./components/MessageLayout";

const DirectMessages = async () => {
  const users = await getUsers();

  return (
    <ContentLayout title="Messages">
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
            <BreadcrumbPage>Messages</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {users && (
        <MessagesLayout
          title="Direct Messages"
          account={users}
          messages={[]}
          defaultLayout={[440, 655]}
        />
      )}
    </ContentLayout>
  );
};

export default DirectMessages;

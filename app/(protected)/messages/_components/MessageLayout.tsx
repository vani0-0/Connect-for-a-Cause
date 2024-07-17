"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/new-york/ui/resizable";
import { Card, CardContent } from "@/registry/new-york/ui/card";
import { Search } from "lucide-react";
import { Message, User } from "@prisma/client";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Separator } from "@/registry/new-york/ui/seperator";
import { Input } from "@/registry/new-york/ui/input";
import { UserList } from "./UserList";

interface MessagesLayoutProps {
  title: string;
  account: Array<Partial<User>>;
  messages: Array<Message>;
  defaultLayout: Array<number> | undefined;
}

export function MessagesLayout({
  account,
  messages,
  defaultLayout = [440, 655],
  title,
}: MessagesLayoutProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <Card className="rounded-lg border-none mt-6">
        <CardContent className="p-1">
          <ResizablePanelGroup
            direction="horizontal"
            onLayout={(sizes: number[]) => {
              document.cookie = `react-resizable-panels:layout=${JSON.stringify(
                sizes
              )}`;
            }}
            className="h-full max-h-[800px] items-stretch"
          >
            <ResizablePanel defaultSize={defaultLayout[0]} minSize={30}>
              <div className="flex items-center px-4 py-2">
                <h1 className="text-xl font-bold">{title}</h1>
              </div>
              <Separator />
              <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <form>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search" className="pl-8" />
                  </div>
                </form>
              </div>
              <UserList users={account} />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel
              defaultSize={defaultLayout[1]}
              minSize={30}
            ></ResizablePanel>
          </ResizablePanelGroup>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
}

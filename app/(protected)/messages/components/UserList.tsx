import { ScrollArea } from "@/registry/new-york/ui/scroll-area";
import { User } from "@prisma/client";

interface UserListProps {
  users: Array<Partial<User>>;
}

export function UserList({ users }: UserListProps) {
  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {users.map((user) => (
          <button
            key={user.id}
            className={
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
            }
            onClick={() => {}}
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{user.name}</div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </ScrollArea>
  );
}

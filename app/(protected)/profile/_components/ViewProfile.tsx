"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ImageUploader } from "@/components/ui/image-uploader";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Edit } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";

interface ViewProfileProps {
  profile: string | StaticImport;
}

const ViewProfile = ({ profile }: ViewProfileProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const onHandleChangeProfile = (file: File) => {
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <div className="relative flex items-center px-4 py-2">
        <div className="absolute bottom-0 right-0 z-20">
          <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <DialogTrigger asChild>
                  <Button
                    className="rounded-md h-8"
                    variant="outline"
                    size="default"
                    onClick={() => setIsDialogOpen(true)}
                  >
                    <Edit color="green" className="h-4 w-4 lg:me-2" />
                    <span className="hidden lg:block">EDIT</span>
                  </Button>
                </DialogTrigger>
              </TooltipTrigger>
              <TooltipContent side="right">Edit Profile</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Browse your folder and upload a picture
              </DialogDescription>
            </DialogHeader>
            <ImageUploader hanlder={onHandleChangeProfile} />
          </DialogContent>
        </div>
        <h2>Profile</h2>
      </div>
      <div className="flex justify-center">
        <Image
          src={profile}
          alt=""
          width={180}
          height={180}
          className="rounded-full border"
        />
      </div>
    </Dialog>
  );
};

export default ViewProfile;

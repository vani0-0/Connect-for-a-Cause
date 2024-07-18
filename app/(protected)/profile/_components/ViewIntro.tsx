"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Edit } from "lucide-react";

const ViewIntro = () => {
  return (
    <div>
      <div className="relative flex items-center px-4 py-2">
        <div className="absolute bottom-0 right-0 z-20">
          <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => {}}
                  className="rounded-md h-8"
                  variant="outline"
                  size="default"
                >
                  <Edit color="green" className="h-4 w-4 lg:me-2" />
                  <span className="hidden lg:block">EDIT</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Edit Introduction</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <h2>Personal Introduction</h2>
      </div>
    </div>
  );
};

export default ViewIntro;

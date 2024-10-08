import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const InviteButton = () => {
  return (
    <Dialog>
      <DialogTitle>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Invite Members
          </Button>
        </DialogTrigger>
      </DialogTitle>
      <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
};

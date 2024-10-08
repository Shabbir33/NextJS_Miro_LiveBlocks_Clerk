import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/elements.svg" alt="EmptyOrg" height={200} width={200} />
      <h2 className="text-2xl font-semibold mt-6">Welcome to MiroBoard</h2>
      <p className="text-muted-foreground text-sm mt-6">
        Create an organization to get started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTitle>
            <DialogTrigger asChild>
              <Button size="lg">Create Organization</Button>
            </DialogTrigger>
          </DialogTitle>
          <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

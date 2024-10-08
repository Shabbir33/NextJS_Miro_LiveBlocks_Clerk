import { Button } from "@/components/ui/button";
import Image from "next/image";

interface EmptyStateProps {
  src: string;
  heading: string;
  desc: string;
  size: {
    height: number;
    width: number;
  };
  button?: string;
}

export const EmptyState = ({
  src,
  heading,
  desc,
  size,
  button,
}: EmptyStateProps) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={src} height={size.height} width={size.width} alt="Empty" />
      <h2 className="text-2xl font-semibold mt-6">{heading}</h2>
      <p className="text-muted-foreground text-sm mt-2">{desc}</p>

      {button && (
        <div className="mt-6">
          <Button size="lg">{button}</Button>
        </div>
      )}
    </div>
  );
};

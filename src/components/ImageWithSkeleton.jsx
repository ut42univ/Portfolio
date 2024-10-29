import { Skeleton } from "@/components/ui/skeleton";
import { useHandleLoading } from "@/hooks/useHandleLoading";
import Image from "next/image";

export const ImageWithSkeleton = (props) => {
  const { loading, handleLoadingComplete } = useHandleLoading();

  return (
    <div>
      {loading && <Skeleton className="w-48 h-48 rounded-lg" />}
      <Image
        src={props.src}
        width={props.width}
        height={props.height}
        alt="picture"
        className="rounded-lg"
        onLoad={handleLoadingComplete}
      />
    </div>
  );
};

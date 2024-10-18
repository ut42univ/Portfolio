import { Skeleton } from "@/components/ui/skeleton";
import { useHandleLoading } from "@/hooks/useHandleLoading";
import Image from "next/image";

export const ImageWithSkeleton = (props) => {
  const { loading, handleLoadingComplete } = useHandleLoading();

  return (
    <div>
      {loading && (
        <Skeleton
          className={`w-[${props.width}px] h-[${props.height}px] rounded-lg`}
        />
      )}
      <Image
        src={props.src}
        width={props.width}
        height={props.height}
        alt="picture"
        className="rounded-lg"
        onLoadingComplete={handleLoadingComplete}
      />
    </div>
  );
};

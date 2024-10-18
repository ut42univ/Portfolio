"use client";

import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { useHandleLoading } from "@/hooks/useHandleLoading";

const Home = () => {
  const { loading, handleLoadingComplete } = useHandleLoading();

  return (
    <main className="mx-auto">
      {/* Hero Section */}
      <div className="h-screen bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient bg-[length:200%_200%]">
        <div className="grid place-items-center h-screen text-white mx-auto max-w-4xl p-8">
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl md:text-6xl font-extrabold md:leading-relaxed">
              Hi, I'm <span>Takuya</span>. <br /> CS Student in Japan.
            </h1>
            <p className="text-lg font-mono font-semibold md:leading-relaxed ">
              I'm a CS student at a university in Nagsaki, Japan. I'm interested
              in programming, especially in Web and iOS development. I'm also
              interested in design and UI/UX.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="h-screen bg-stone-900">
        <div className="grid place-items-center h-screen text-white mx-auto max-w-4xl p-8">
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl text-center md:text-6xl font-extrabold md:leading-relaxed">
              工事中🚧
            </h1>
            <p className="text-lg font-mono font-semibold md:leading-relaxed ">
              このセクション以降は工事中です。
              <br />
              リリースまでしばらくお待ちください。
            </p>
            <div className="flex justify-around gap-4">
              {/* Skeletonのラッパー */}
              <div className="relative">
                {loading && (
                  <Skeleton className="w-[200px] h-[200px] rounded-lg" />
                )}
                <Image
                  src="https://picsum.photos/800/800"
                  width={200}
                  height={200}
                  alt="Picture of the author"
                  className="rounded-lg"
                  onLoadingComplete={handleLoadingComplete}
                />
              </div>

              <div className="relative">
                {loading && (
                  <Skeleton className="w-[200px] h-[200px] rounded-lg" />
                )}
                <Image
                  src="https://picsum.photos/500/500"
                  width={200}
                  height={200}
                  alt="Picture of the author"
                  className="rounded-lg"
                  onLoadingComplete={handleLoadingComplete}
                />
              </div>

              <div className="relative">
                {loading && (
                  <Skeleton className="w-[200px] h-[200px] rounded-lg" />
                )}
                <Image
                  src="https://picsum.photos/600/600"
                  width={200}
                  height={200}
                  alt="Picture of the author"
                  className="rounded-lg"
                  onLoadingComplete={handleLoadingComplete}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

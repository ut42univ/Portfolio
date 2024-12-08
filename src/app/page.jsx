"use client";

import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

const Home = () => {
  return (
    <main className="mx-auto">
      {/* Hero Section */}
      <div className="h-screen bg-gradient-to-br from-indigo-400 via-emerald-400 to-yellow-400 animate-gradient bg-[length:150%_150%]">
        <div className="grid place-items-center h-screen text-white mx-auto max-w-5xl p-8">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl md:text-6xl font-extrabold md:leading-relaxed">
              Hello, I'm <span>Takuya</span>👋
              <br />
              Thank you for your visit!
            </h1>
            <p className="text-xl font-mono font-semibold md:leading-relaxed ">
              I'm a CS student in Japan. I love coding and design.
              <br />
              個人開発とデザインが大好きな大学生です。
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="h-screen bg-stone-900">
        <div className="grid place-items-center h-screen text-white mx-auto max-w-4xl p-8">
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl text-center md:text-5xl font-extrabold md:leading-relaxed">
              私について
            </h1>
            <p className="text-lg font-mono font-semibold md:leading-relaxed ">
              このセクション以降は工事中です。
              <br />
              リリースまでしばらくお待ちください。
            </p>
            <div className="flex justify-around gap-4">
              <ImageWithSkeleton
                width={200}
                height={200}
                src="https://picsum.photos/200/200"
              />
              <ImageWithSkeleton
                width={200}
                height={200}
                src="https://picsum.photos/500/500"
              />
              <ImageWithSkeleton
                width={200}
                height={200}
                src="https://picsum.photos/600/600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="h-screen">
        <div className="grid place-items-center h-screen">
          <div className="flex justify-center gap-8">
            <Skeleton className="w-24 h-24 rounded-full" />
            <div className="flex flex-col gap-4">
              <h1 className="font-mono">
                this page is under construction. <br />
                please wait for a while.
              </h1>
              <Skeleton className="w-96 h-4 rounded-sm" />
              <Skeleton className="w-96 h-4 rounded-sm" />
              <Skeleton className="w-96 h-4 rounded-sm" />
              <Skeleton className="w-96 h-4 rounded-sm" />
              <Skeleton className="w-96 h-4 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

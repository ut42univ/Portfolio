"use client";

import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Home = () => {
  const [loading, setLoading] = useState(true);

  // 画像が読み込まれたらローディングをfalseに
  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <main className="text-center mx-auto">
      <h1 className="text-4xl font-extrabold">
        Hi, I'm <span>Takuya</span>. CS Student in Japan.
      </h1>
      <p className="text-lg font-semibold">
        I'm a CS student at a university in Japan. I'm interested in
        programming, especially in web development. I'm also interested in
        design and UI/UX.
      </p>

      <div className="flex justify-center gap-4">
        {/* Skeletonのラッパー */}
        <div className="relative">
          {loading && <Skeleton className="w-[200px] h-[200px] rounded-lg" />}
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
          {loading && <Skeleton className="w-[200px] h-[200px] rounded-lg" />}
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
          {loading && <Skeleton className="w-[200px] h-[200px] rounded-lg" />}
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
    </main>
  );
};

export default Home;

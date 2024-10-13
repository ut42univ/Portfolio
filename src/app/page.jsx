import Image from "next/image";

const Home = () => {
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

      <div className="flex-auto">
        <Image
          src="https://picsum.photos/800/800"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <Image
          src="https://picsum.photos/500/500"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <Image
          src="https://picsum.photos/600/600"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </main>
  );
};

export default Home;

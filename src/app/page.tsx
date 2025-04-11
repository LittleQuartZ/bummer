import Image from "next/image";
import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";

const albums = [
  {
    title: "Faceless",
    src: "https://cdn.cosmos.so/81788562-dad2-41b4-ab80-a73ea88180ba?format=jpeg",
    link: "https://www.pinterest.com/pin/749427194254262677/",
    artist: "Oczy",
    width: 530,
    height: 548,
  },
  {
    title: "Waves",
    src: "https://cdn.cosmos.so/ad75acef-da28-42bb-ba45-96fa9954cccf?format=jpeg",
    link: "https://www.instagram.com/p/DAYoAGZsdOs/?igsh=MWNycGN3NjRoOXYzag==",
    artist: "Reyst",
    width: 705,
    height: 881,
  },
  {
    title: "Blue Fog",
    src: "https://cdn.cosmos.so/962784fe-d06b-4f23-84e5-f0a1efd3a6d6.?format=jpeg",
    link: "https://www.are.na/block/11992569",
    artist: "Reyst",
    width: 705,
    height: 881,
  },
  {
    title: "Girl in Blue",
    src: "https://cdn.cosmos.so/0fa188f9-5e9c-46f7-9b9b-054989a9d583?format=jpeg",
    link: "https://www.cosmos.so/e/266891702",
    artist: "Oczy",
    width: 586,
    height: 842,
  },
];

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <div className="flex min-h-screen flex-col gap-4 p-4">
        <header className="border-muted hover:border-muted-foreground relative border-2 px-4 py-2 transition-colors duration-500">
          <h1>Bummer</h1>
          <nav></nav>

          <span
            aria-hidden
            className="text-muted-foreground bg-background absolute top-0 left-1 -translate-y-1/2 px-2 text-sm select-none"
          >
            Nav
          </span>
        </header>

        <main className="border-muted hover:border-muted-foreground relative flex-1 border-2 p-4 transition-colors duration-500">
          <h1 className="px-2 py-1 text-2xl font-bold">Latest Albums</h1>
          <div className="grid grid-cols-8">
            {[...albums, ...albums].map((album, idx) => (
              <div key={idx} className="group hover:bg-muted/50 p-2">
                <div className="relative">
                  <Image
                    className="aspect-square object-cover"
                    placeholder="empty"
                    src={album.src}
                    height={album.height}
                    width={album.width}
                    alt={album.title}
                  />

                  <div className="bg-background/50 absolute inset-0 flex flex-col items-center justify-center opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                    <h1 className="font-bold">{album.title}</h1>
                    <h2 className="text-sm">{album.artist}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <span
            aria-hidden
            className="text-muted-foreground bg-background absolute top-0 left-1 -translate-y-1/2 px-2 text-sm select-none"
          >
            Products
          </span>
        </main>
      </div>
    </HydrateClient>
  );
}

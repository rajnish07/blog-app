import PostLoading from "@/components/Post/postLoading";
import Posts from "@/components/posts";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="w-full h-full px-2 pt-20">
      <Suspense fallback={<PostLoading />}>
        <Posts />
      </Suspense>
    </main>
  );
}

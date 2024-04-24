import { CreatePost } from "./_components/create-post";
import { trpc } from "./_trpc/server";

export default async function Home() {
  const hello = await trpc.post.hello({ text: "from Imran Baitham" });
  const latestPost = await trpc.post.getLatest();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> {hello ? hello.greeting : "Loading tRPC query..."}</h1>
      <div>
        <div className="text-center font-bold pb-5">
          {latestPost ? (
            <p className="truncate">UserName : {latestPost.name}</p>
          ) : (
            <p>You have no posts yet.</p>
          )}
        </div>
        <CreatePost />
      </div>
    </main>
  );
}

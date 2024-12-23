import { getServerSession } from "next-auth";
import { OPTIONS } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import ClientHome from "@/components/clientHome";
import useCurrentUser from "@/hooks/useCurrentUser";

export default async function Home() {
  // サーバーサイドでセッションを取得
  const session = await getServerSession(OPTIONS);

  // セッションがない場合、ログインページにリダイレクト
  if (!session) {
    redirect("/auth");
  }
  // const { data: user, error, isLoading } = useCurrentUser();
  // セッションがある場合、クライアントコンポーネントにセッションデータを渡す
  return <ClientHome />;
}

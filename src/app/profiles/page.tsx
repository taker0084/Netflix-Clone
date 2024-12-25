import { getServerSession } from "next-auth";
import { OPTIONS } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import ProfileInfo from "../../features/profiles/profileInfo";

export const Profiles = async () => {
  const session = await getServerSession(OPTIONS);

  // セッションがない場合、ログインページにリダイレクト
  if (!session) {
    redirect("/auth");
  }

  return <ProfileInfo />;
};
export default Profiles;

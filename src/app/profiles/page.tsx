import { getServerSession } from "next-auth";
import OPTIONS from "@/utils/Options";
import { redirect } from "next/navigation";
import ProfileInfo from "../../features/profiles/profileInfo";

export const Profiles: React.FC = async () => {
  const session = await getServerSession(OPTIONS);

  // セッションがない場合、ログインページにリダイレクト
  if (!session) {
    redirect("/auth");
  }

  return <ProfileInfo />;
};
export default Profiles;

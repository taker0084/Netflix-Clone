import prismadb from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import OPTIONS from "@/utils/Options";

const serverAuth = async () => {
  const session = await getServerSession(OPTIONS);

  if (!session?.user?.email) {
    throw new Error("Not signed in");
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) {
    throw new Error("Not signed in");
  }
  return currentUser;
};

export default serverAuth;

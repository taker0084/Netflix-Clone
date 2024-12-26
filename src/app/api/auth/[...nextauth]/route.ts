import OPTIONS from "@/utils/Options";
import NextAuth from "next-auth";

const handler = NextAuth(OPTIONS);

export { handler as GET, handler as POST };

import OPTIONS from "@/utils/Options";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, OPTIONS);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

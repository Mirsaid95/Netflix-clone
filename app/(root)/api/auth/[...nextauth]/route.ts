import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";




// auth options Github
const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token, user }: any) {
      session.user.username = session.user.name
        ?.split(" ")
        .join("")
        .toLowerCase();
      session.user.uid = token.sub as string;

      return session;
    },
  },
  secret: process.env.SECRET_KEY as string,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

import NextAuth from "next-auth"
import { getToken } from "next-auth/jwt";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        })
    ],
    callbacks: {
        // async session({ session, token, user }) {
        //     return session
        // },
        // async jwt({ token, user, account, profile, isNewUser }) {
        //     console.log("line14:" + account?.access_token);
        //     return token
        // }
        async jwt({ token, user, account, profile, isNewUser }) {
            console.log("line14:" + account?.access_token);
            return { ...token, ...user, ...account };
        },
        async session({ session, token, user }) {
            session.user = token as any;
            return session
        },
        
    },
    session: {
        strategy: "jwt",
    }
})

export { handler as GET, handler as POST }
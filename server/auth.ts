import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/server/index";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

console.log("Auth Secret:", process.env.AUTH_SECRET); // For debugging, remove after testing

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  secret: process.env.AUTH_SECRET! || "fallbackSecretForTesting",
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string
      }),
      CredentialsProvider({
        name: "Credentials",
        credentials: {
            username: {
                label: "Username:",
                type: "text",
                placeholder: "your-cool-username"
            },
            password: {
                label: "Password:",
                type: "password",
                placeholder: "your-awesome-password"
            }
        },
        async authorize(credentials) {
            // This is here because we don't have a BE and it should be removed as soon as we implement BE for auth
            const user = { id: "1", name: "Mays", password: "11" }
            if (credentials?.username === user.name && credentials?.password === user.password) {
                return user
            } else {
                return null
            }
        }
    })
],

}

export default NextAuth(authOptions)

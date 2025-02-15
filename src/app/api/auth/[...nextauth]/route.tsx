import NextAuth, { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import authOptions from '@/lib/configs/auth/authOptions'


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };

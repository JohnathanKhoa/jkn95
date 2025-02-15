import NextAuth, { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import authOptions from '@/app/api/auth/[...nextauth]/authOptions'
require('dotenv').config()

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authConfig } from './authConfig';
import { connectToDB } from '../lib/utils';
import { Admin } from '../lib/models';

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await Admin.findOne({ username: credentials.username });

    if (!user) throw new Error('Error: Wrong credentials!');

    return user;
  } catch (err) {
    console.log(err.message);
    throw new Error('Failed to login!');
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);

          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  },
});

import { NextAuthOptions, getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const res = await fetch(
          `${process.env.BACKEND_API_SERVICE}/v1/auth/authenticate`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          }
        );

        const user = await res.json();

        if (user?.code == 200 && user) {
          return user.data;
        } else {
          throw new Error(user?.data);
        }
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) token = user as unknown as { [key: string]: any };
      return token;
    },
    session: async ({ session, token }) => {
      session.user = { ...token };
      return session;
    },

    redirect() {
      return `${process.env.NEXTAUTHOKREDIRECT}`;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);

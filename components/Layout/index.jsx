import Head from 'next/head'
import Link from 'next/link'

import { signIn, signOut, useSession } from 'next-auth/client'


export default function Layout({ children }) {
  const [ session, loading ] = useSession()

  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="An online open-mic platform"
        />
        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Lexend:wght@300;400;500;600&display=swap" rel="stylesheet"/>
      </Head>
      <header>
        <h1>Col-Echo</h1>

      {!session && <>
        Not signed in <br/>
        <button onClick={() => signIn()}>Sign in</button>
      </>}
      {session && <>
        Signed in as {session.user.email} <br/>
        <button onClick={() => signOut()}>Sign out</button>
      </>}

      </header>
      <main>{children}</main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

      `}</style>

      <style jsx global>{`

        :root {
          --bg: #0D0D0D;
          --dark-gray: #1D1A1C;
          --main: #FFFFFF;
        }
        
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Lato', sans-serif;
          background: var(--bg);
          color: var(--main);
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Lexend', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
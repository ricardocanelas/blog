import Head from "next/head";
import Link from "next/link";
import { format } from "date-fns";
import { frontMatter as welcomePost } from "./posts/welcome.mdx";

function formatPath(p) {
  return p.replace(/\.mdx$/, "");
}

export default function Home() {
  const docsPages = [welcomePost];

  return (
    <div className="container">
      <Head>
        <title>Ricardo Canelas' Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <br />
          Ricardo Canelas' Blog
        </h1>

        <div>
          <ul>
            {docsPages.map((page) => {
              console.log({ page });
              const dateFormatted = format(new Date(page.date), "do LLLL yyyy");
              return (
                <li key={page.__resourcePath}>
                  <Link href={formatPath(page.__resourcePath)}>
                    <a>
                      [{page.language}] {dateFormatted} - {page.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>

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

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

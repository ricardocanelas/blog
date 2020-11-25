import Head from "next/head";
import Link from "next/link";
import { format } from "date-fns";

import Nav from "../components/nav";
import { frontMatter as umaBoaAlimentacao } from "./posts/uma-boa-alimentacao.mdx";
import { frontMatter as useEffectProblem } from "./posts/use-effect-problem.mdx";

function formatPath(p) {
  return p.replace(/\.mdx$/, "");
}

const docsPages = [useEffectProblem, umaBoaAlimentacao];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ricardo Canelas' Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="pl-8">
        <div className="text-left">
          <ul>
            {docsPages.map((page) => {
              const dateFormatted = format(new Date(page.date), "do LLLL yyyy");
              return (
                <li key={page.__resourcePath} className="mb-1">
                  <Link href={formatPath(page.__resourcePath)}>
                    <a>{page.title}</a>
                  </Link>
                  <small className="ml-2">
                    {dateFormatted} ({page.language})
                  </small>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

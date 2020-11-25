import { format } from "date-fns";

import Nav from "../components/nav";

function PostLayout({ children, frontMatter }) {
  const dateFormatted = format(new Date(frontMatter.date), "do LLLL yyyy");

  return (
    <div>
      <Nav />

      <section className="post-wrapper container mx-auto max-w-3xl p-3 md:p-0">
        <div>
          <div className="text-sm text-gray-600">{dateFormatted}</div>
          <h1 className="text-5xl font-bold">{frontMatter.title}</h1>
        </div>
        <div className="post-content mt-6">{children}</div>
      </section>
    </div>
  );
}

export default PostLayout;

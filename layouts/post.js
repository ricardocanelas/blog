function PostLayout({ children, frontMatter }) {
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      {children}
    </div>
  );
}

export default PostLayout;

import { formatCategory, getPublishedPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getPublishedPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main>
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Daily practice notes</p>
          <h1>Daily Chinese Medicine</h1>
          <p className="lede">
            Short, grounded posts on Chinese medicine, seasonal rhythms, food therapy,
            and everyday health habits.
          </p>
        </div>
      </section>

      <section className="journal" aria-label="Latest posts">
        <article className="featured">
          <div>
            <p className="post-meta">{formatCategory(featured.category)}</p>
            <h2>{featured.title}</h2>
            <p>{featured.summary}</p>
          </div>
          <p className="body-copy">{featured.body}</p>
        </article>

        <div className="post-grid">
          {rest.map((post) => (
            <article className="post-card" key={post.id}>
              <p className="post-meta">{formatCategory(post.category)}</p>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <time dateTime={post.publishedAt.toISOString()}>
                {post.publishedAt.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric"
                })}
              </time>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

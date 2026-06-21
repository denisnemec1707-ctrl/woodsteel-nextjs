export default function ArticleBody({ html, fallback }: { html: string; fallback: string }) {
  if (html && html.trim().length > 0) {
    return (
      <div
        className="article-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <div className="article-body">
      <p>{fallback}</p>
      <p>
        Máte záujem o riešenie na mieru? Ozvite sa nám a radi vám poradíme a vypracujeme nezáväznú
        cenovú ponuku.
      </p>
    </div>
  );
}

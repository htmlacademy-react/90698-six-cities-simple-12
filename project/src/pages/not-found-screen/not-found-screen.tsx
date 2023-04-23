function NotFoundScreen(): JSX.Element {
  return (
    <main className="page__main page__main--page-not-found">
      <section className="page-not-found">
        <h1 className="page-not-found__title">404 Page not found</h1>
        <a className="page-not-found__link" href="/"><span>Вернутся на главную страницу</span></a>
      </section>
    </main>
  );
}

export default NotFoundScreen;

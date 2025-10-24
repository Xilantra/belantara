import * as React from "react";
import Layout from "../components/Layout";
import { navigate } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <section className="py-32">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-4 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Error 404</p>
        <h1 className="font-display text-4xl font-medium text-foreground md:text-5xl">Page not found</h1>
        <p className="max-w-xl text-secondary-foreground">
          You just hit a route that doesn&apos;t exist. Let&apos;s get you back to familiar ground.
        </p>
        <button
          className="inline-flex items-center border border-transparent bg-accent px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-[#1f1300] transition-transform duration-200 hover:translate-x-1"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;

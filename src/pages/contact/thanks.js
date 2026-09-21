import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";

const Thanks = () => (
  <Layout>
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full rounded-2xl border border-border bg-background/90 p-8 sm:p-10 text-center shadow-xs backdrop-blur-xs">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-3xl">
          ✓
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3 font-serif">
          Terima Kasih!
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
          Mesej anda telah berjaya dihantar. Saya akan membalas pertanyaan anda secepat mungkin.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold tracking-wide text-[#1f1300] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
        >
          <span>Kembali ke Laman Utama</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  </Layout>
);

export default Thanks;

import * as React from "react";
import Layout from "../components/Layout";
import { navigate } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <button
          className="mt-6 inline-flex items-center justify-center px-4 py-2 border border-transparent text-xs font-medium transition-colors duration-100 text-green-600 bg-white rounded-md shadow lg:text-sm group hover:bg-green-50"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
    </div>
  </Layout>
);

export default NotFoundPage;

import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAttachment = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="px-4 sm:px-6 md:px-8 py-gc-5">
          <div>
            <div>
              <h1 className="font-display text-3xl mb-4"><span className="accent">File Upload</span></h1>
              <form
                name="file-upload"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="file-upload" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 text-sm" htmlFor={"name"}>
                    Your name
                  </label>
                  <input
                    className="rounded-md border border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 px-3 py-2"
                    type={"text"}
                    name={"name"}
                    onChange={this.handleChange}
                    id={"name"}
                    required={true}
                  />
                </div>
                <div className="md:col-span-2 flex items-center gap-4">
                  <label htmlFor="attachment" className="text-sm">Attachment</label>
                  <input
                    id="attachment"
                    className="block w-full text-sm file:mr-4 file:rounded-md file:border file:border-slate-300 dark:file:border-slate-700 file:bg-white/60 dark:file:bg-slate-900/40 file:px-3 file:py-2 file:hover:border-primary/60 file:transition"
                    type="file"
                    name="attachment"
                    onChange={this.handleAttachment}
                  />
                </div>
                <div className="md:col-span-2">
                  <button className="inline-flex items-center rounded-md border border-slate-300 dark:border-slate-700 px-4 py-2 hover:border-primary/60 hover:text-primary transition" type="submit">
                    Send →
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

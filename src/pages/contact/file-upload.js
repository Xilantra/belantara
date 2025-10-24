import * as React from "react";
import { navigate } from "gatsby";
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
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl font-medium text-foreground">File upload</h1>
              <p className="mt-3 text-secondary-foreground">Attach assets and context so we can respond with the right level of detail.</p>
              <form
                name="file-upload"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
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
                  <label className="mb-2 text-sm uppercase tracking-[0.2em] text-muted-foreground" htmlFor={"name"}>
                    Your name
                  </label>
                  <input
                    className="border border-border bg-muted px-3 py-2 text-foreground focus:border-accent focus:outline-none focus:ring-0"
                    type={"text"}
                    name={"name"}
                    onChange={this.handleChange}
                    id={"name"}
                    required={true}
                  />
                </div>
                <div className="md:col-span-2 flex items-center gap-4">
                  <label htmlFor="attachment" className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Attachment</label>
                  <input
                    id="attachment"
                    className="block w-full text-sm text-secondary-foreground file:mr-4 file:border file:border-border file:bg-muted file:px-3 file:py-2 file:uppercase file:tracking-[0.2em] file:text-foreground file:transition-colors file:hover:border-accent"
                    type="file"
                    name="attachment"
                    onChange={this.handleAttachment}
                  />
                </div>
                <div className="md:col-span-2">
                  <button className="inline-flex items-center border border-transparent bg-accent px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-[#1f1300] transition-transform duration-200 hover:translate-x-1" type="submit">
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

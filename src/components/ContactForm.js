import * as React from "react";
import { navigate } from "gatsby";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/?no-cache=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
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
        <section>
          <div>
            <div>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
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
                <div className="flex flex-col">
                  <label className="mb-2 text-sm" htmlFor={"email"}>
                    Email
                  </label>
                  <input
                    className="rounded-md border border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 px-3 py-2"
                    type={"email"}
                    name={"email"}
                    onChange={this.handleChange}
                    id={"email"}
                    required={true}
                  />
                </div>
                <div className="md:col-span-2 flex flex-col">
                  <label className="mb-2 text-sm" htmlFor={"message"}>
                    Message
                  </label>
                  <textarea
                    className="rounded-md border border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 px-3 py-2 min-h-[160px]"
                    name={"message"}
                    onChange={this.handleChange}
                    id={"message"}
                    required={true}
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
    );
  }
}

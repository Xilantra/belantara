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
      <section className="max-w-2xl mx-auto">
        <div className="rounded-2xl border border-border bg-background/80 p-6 sm:p-8 md:p-10 shadow-xs backdrop-blur-xs">
          <form
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
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
              <label className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground" htmlFor={"name"}>
                Nama Anda
              </label>
              <input
                className="rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground transition-colors focus:border-accent focus:bg-background focus:outline-none focus:ring-1 focus:ring-accent"
                type={"text"}
                name={"name"}
                placeholder="cth. Ali bin Abu"
                onChange={this.handleChange}
                id={"name"}
                required={true}
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground" htmlFor={"email"}>
                Alamat Emel
              </label>
              <input
                className="rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground transition-colors focus:border-accent focus:bg-background focus:outline-none focus:ring-1 focus:ring-accent"
                type={"email"}
                name={"email"}
                placeholder="nama@domain.com"
                onChange={this.handleChange}
                id={"email"}
                required={true}
              />
            </div>
            <div className="md:col-span-2 flex flex-col">
              <label className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground" htmlFor={"message"}>
                Mesej Anda
              </label>
              <textarea
                className="min-h-[160px] rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground transition-colors focus:border-accent focus:bg-background focus:outline-none focus:ring-1 focus:ring-accent"
                name={"message"}
                placeholder="Kongsi idea, soalan, atau cadangan kolaborasi anda di sini..."
                onChange={this.handleChange}
                id={"message"}
                required={true}
              />
            </div>
            <div className="md:col-span-2 pt-2 flex justify-start">
              <button
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold tracking-wide text-[#1f1300] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
                type="submit"
              >
                <span>Hantar Mesej</span>
                <span>→</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

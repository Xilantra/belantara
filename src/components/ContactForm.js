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
                <div className="flex flex-col">
                  <label className="mb-2 text-sm uppercase tracking-[0.2em] text-muted-foreground" htmlFor={"email"}>
                    Email
                  </label>
                  <input
                    className="border border-border bg-muted px-3 py-2 text-foreground focus:border-accent focus:outline-none focus:ring-0"
                    type={"email"}
                    name={"email"}
                    onChange={this.handleChange}
                    id={"email"}
                    required={true}
                  />
                </div>
                <div className="md:col-span-2 flex flex-col">
                  <label className="mb-2 text-sm uppercase tracking-[0.2em] text-muted-foreground" htmlFor={"message"}>
                    Message
                  </label>
                  <textarea
                    className="min-h-[160px] border border-border bg-muted px-3 py-2 text-foreground focus:border-accent focus:outline-none focus:ring-0"
                    name={"message"}
                    onChange={this.handleChange}
                    id={"message"}
                    required={true}
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
    );
  }
}

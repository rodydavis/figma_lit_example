import { html, LitElement } from "lit";
import { customElement, query } from "lit/decorators.js";

@customElement("my-app")
export class MyApp extends LitElement {
  @query("#count") countInput!: HTMLInputElement;

  render() {
    return html`
      <div>
        <h2>Rectangle Creator</h2>
        <p>Count: <input id="count" value="5" /></p>
        <button id="create" @click=${this.create}>Create</button>
        <button id="cancel" @click=${this.cancel}>Cancel</button>
      </div>
    `;
  }

  create() {
    const count = parseInt(this.countInput.value, 10);
    this.sendMessage("create-rectangles", { count });
  }

  cancel() {
    this.sendMessage("cancel");
  }

  private sendMessage(type: string, content: Object = {}) {
    const message = { pluginMessage: { type: type, ...content } };
    parent.postMessage(message, "*");
  }
}

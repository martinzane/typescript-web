import User from "../models/user";

class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  private bindModel() {
    this.model.on("change", () => {
      this.render();
    });
  }

  mapEvents(): { [key: string]: () => void } {
    return {
      "click:.set-age": () => {
        this.model.setRandomAge();
      },
    };
  }

  template(): string {
    return `
      <div>
        <h1>User form</h1>
        <div>User name: ${this.model.get("name")}</div>
        <div>User age: ${this.model.get("age")}</div>
        <br />
        <input />
        <button>Click me!</button>
        <button class="set-age">Set random age</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const mappedEvents = this.mapEvents();

    Object.keys(mappedEvents).forEach((key) => {
      const [event, selector] = key.split(":");

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(event, mappedEvents[key]);
      });
    });
  }

  render(): void {
    this.parent.innerHTML = "";

    const template = document.createElement("template");
    template.innerHTML = this.template();

    const { content } = template;
    this.bindEvents(content);
    this.parent.append(content);
  }
}

export default UserForm;

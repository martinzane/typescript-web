class UserForm {
  constructor(public parent: Element) {}

  mapEvents(): { [key: string]: () => void } {
    return {
      "click:button": () => {
        console.log("Hello button!");
      },
      "mouseenter:h1": () => {
        console.log("Hello header!");
      },
    };
  }

  template(): string {
    return `
      <div>
        <h1>User form</h1>
        <input />
        <button>Click me!</button>
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
    const template = document.createElement("template");
    template.innerHTML = this.template();

    const { content } = template;
    this.bindEvents(content);
    this.parent.append(content);
  }
}

export default UserForm;

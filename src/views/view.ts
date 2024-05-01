import Model, { ModelData } from "../models/model";

abstract class View<T extends Model<K>, K extends ModelData> {
  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract mapEvents(): { [key: string]: () => void };
  abstract template(): string;

  private bindModel() {
    this.model.on("change", () => {
      this.render();
    });
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

export default View;

import Model, { ModelData } from "../models/model";

abstract class View<T extends Model<K>, K extends ModelData> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  public abstract template(): string;

  public mapEvents(): { [key: string]: () => void } {
    return {};
  }

  public mapRegions(): { [key: string]: string } {
    return {};
  }

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

  bindRegions(fragment: DocumentFragment): void {
    const mappedRegions = this.mapRegions();

    Object.keys(mappedRegions).forEach((key) => {
      const selector = mappedRegions[key];
      const element = fragment.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    });
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = "";

    const template = document.createElement("template");
    template.innerHTML = this.template();

    const { content } = template;
    this.bindEvents(content);
    this.bindRegions(content);

    this.onRender();

    this.parent.append(content);
  }
}

export default View;

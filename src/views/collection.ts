import Collection from "../models/collection";

abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(parent: Element, model: T): void;

  render(): void {
    this.parent.innerHTML = "";

    const template = document.createElement("template");

    this.collection.models.forEach((model) => {
      const parent = document.createElement("div");
      this.renderItem(parent, model);
      template.content.append(parent);
      this.parent.append(template.content);
    });
  }
}

export default CollectionView;

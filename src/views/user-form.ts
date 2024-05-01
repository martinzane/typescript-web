class UserForm {
  constructor(public parent: Element) {}

  template(): string {
    return `
      <div>
        <h1>User form</h1>
        <input />
      </div>
    `;
  }

  render(): void {
    const template = document.createElement("template");
    template.innerHTML = this.template();

    this.parent.append(template.content);
  }
}

export default UserForm;

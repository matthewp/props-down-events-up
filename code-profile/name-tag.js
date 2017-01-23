class NameTag extends Bram.Element {
  static get template() {
    return nameTmpl;
  }

  static get observedProperties() {
    return ['first', 'last'];
  }

  get fullName() {
    let first = this.first || '';
    let last = this.last || '';
    return `${first} ${last}`;
  }
}

customElements.define('name-tag', NameTag);

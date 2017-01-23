class UserCustomization extends Bram.Element {
  static get template() {
    return customTmpl;
  }

  change(ev) {
    this.dispatchEvent(new CustomEvent('color-change', {
      detail: ev.target.value
    }));
  }
}

customElements.define('user-customization', UserCustomization);

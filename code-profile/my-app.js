class MyApp extends Bram.Element {
  static get template() {
    return appTmpl;
  }

  constructor() {
    super();

    this.model.user = {};
  }

  updateUser(ev) {
    let user = ev.detail;
    Object.assign(this.model.user, user);
  }

  updateBg(ev) {
    this.setColor(ev.detail);
  }

  setColor(color) {
    document.body.style.backgroundColor = color;
    localStorage.color = color;
  }
}

customElements.define('my-app', MyApp);

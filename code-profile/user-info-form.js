class UserInfoForm extends Bram.Element {
  static get template(){
    return userInfoTmpl;
  }

  changeInfo(e) {
    e.preventDefault();

    let form = e.target;

    this.dispatchEvent(new CustomEvent('user-info', {
      detail: {
        gh: form.gh.value,
        first: form.first.value,
        last: form.last.value
      }
    }));

  }
}

customElements.define('user-info-form', UserInfoForm);

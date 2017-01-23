class UserRepos extends Bram.Element {
  static get template(){
    return reposTmpl;
  }

  constructor() {
    super();
    this.model.repos = [];
  }

  get handle() {
    return this._handle;
  }

  set handle(val) {
    this._handle = val;
    if(val) {
      this._fetchRepos();
    }
  }

  _fetchRepos() {
    this.model.loading = true;
    let gh = this.handle;
    let url =`https://api.github.com/users/${gh}/repos`;
    fetch(url)
    .then(res => res.json())
    .then(repos => {
      this.model.loading = false;
      this.model.repos = repos;
    });
  }
}

customElements.define('user-repos', UserRepos);

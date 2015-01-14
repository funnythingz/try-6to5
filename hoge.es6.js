class Hoge {

  name: string;

  constructor() {
    console.log(this.putUnko());
  }

  putUnko() {
    this.unko = 'unko';
    return this.unko;
  }
}

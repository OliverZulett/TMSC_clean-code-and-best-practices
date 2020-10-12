export class list {
  d: number;
  n: string;
  constructor(d: number, n: string) {
    this.d = d;
    this.n = n;
  }
  printTask() {
    console.log('task: ' + this.n + '; day:' + this.d);
  }
}

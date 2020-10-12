import moment from 'moment';

export class Task {
  private date: string;
  private description: string;

  constructor(description: string) {
    this.date = moment().format('LL');
    this.description = description;
  }

  public getDate(): string {
    return this.date;
  }

  public getDescription(): string {
    return this.description;
  }
}

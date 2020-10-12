import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const RANDOM_ID: string = uuidv4();
const IMPORTANCE_LEVEL: Array<string> = ['LOW', 'MIDDLE', 'HIGH'];
const CURRENT_DATE: string = moment().format('LL');

export class Reminder {
  private id: string;
  private description: string;
  private date: string;
  private importance: string;
  private status: boolean;

  constructor(description: string, importanceRange: number) {
    this.id = RANDOM_ID;
    this.description = description;
    this.date = CURRENT_DATE;
    this.importance = IMPORTANCE_LEVEL[importanceRange];
    this.status = false;
  }

  public getId(): string {
    return this.id;
  }
  public getDescription(): string {
    return this.description;
  }
  public setDescription(description: string): void {
    this.description = description;
  }
  public getDate(): string {
    return this.date;
  }
  public setDate(date: string): void {
    this.date = date;
  }
  public getImportance(): string {
    return this.importance;
  }
  public setImportance(importance: string): void {
    this.importance = importance;
  }
  public getStatus(): boolean {
    return this.status;
  }
  public setStatus(status: boolean): void {
    this.status = status;
  }
}

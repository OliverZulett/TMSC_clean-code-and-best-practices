import { Reminder } from '../models/good-functions';

export class ReminderService {
  private reminders: Array<Reminder>;

  constructor() {
    this.reminders = [];
    this.loadReminders();
  }

  public displayReminders(): void {
    this.reminders.forEach((reminder: Reminder) => {
      this.displayReminder(reminder);
    });
  }

  private displayReminder(reminder: Reminder): void {
    console.log(`Reminder: ${reminder.getDescription()}`);
    console.log(`Date: ${reminder.getDate()}`);
    console.log(`Importance: ${reminder.getImportance()}`);
    console.log(`Status: ${reminder.getStatus() ? 'done' : 'not done'}`);
  }

  private loadReminders(): void {
    this.reminders.push(new Reminder('index intermediate', 1));
    this.reminders.push(new Reminder('Licensed Cotton Keyboard Senior', 1));
    this.reminders.push(new Reminder('Track Future', 0));
    this.reminders.push(new Reminder('Public-key', 2));
    this.reminders.push(new Reminder('Chief orchid', 2));
  }
}

export class PrintReminder {
  reminder!: string;
  importance!: string;
  date!: string;
  status!: boolean;

  buildRem(
    reminder: string,
    importance: string,
    date: string,
    status: boolean
  ) {
    this.reminder = reminder;
    this.importance = importance;
    this.date = date;
    this.status = status;
    let rem = '';
    if (typeof this.reminder !== 'string' && reminder.length == 0) {
      console.log('reminder cannot be empty');
      return;
    } else {
      if (
        typeof this.importance !== 'string' &&
        !importance.includes('high') &&
        !importance.includes('middle') &&
        !importance.includes('low')
      ) {
        console.log('reminder must be high, middle or low');
        return;
      } else {
        if (typeof this.date !== 'string' && date.length == 0) {
          console.log('date is required');
          return;
        } else {
          if (typeof this.status !== 'boolean') {
            console.log('status is required');
            return;
          } else {
            rem += 'reminder: ' + this.reminder + ', ';
            rem += 'date: ' + this.date + ', ';
            rem += 'importance: ' + this.importance + ', ';
            rem += 'status: ' + this.status + ', ';
          }
        }
      }
    }
    this.printRem(rem);
  }

  printRem(rem: string) {
    console.log('new reminder created');
    console.log(rem);
  }
}

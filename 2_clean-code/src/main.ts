import { list } from './models/no-sense-names';
import { TaskManagerService } from './services/taskManager.service';
import { PrintReminder } from './models/bad-functions';
import moment from 'moment';
import { ReminderService } from './services/Reminder.service';

// const taskList = new list(4, 'make no sense code');
// taskList.printTask();

// const taskManagerService: TaskManagerService = new TaskManagerService();
// taskManagerService.displayCurrentTasks();

const reminder = new PrintReminder();
reminder.buildRem(
  'make a terrible reminder',
  'high',
  moment().format('LL'),
  true
);

const reminderService: ReminderService = new ReminderService();
reminderService.displayReminders();

import { Task } from '../models/names-with-sense';
export class TaskManagerService {
  private tasks: Array<Task>;

  constructor() {
    this.tasks = [];
    this.loadTasks();
  }

  public displayCurrentTasks() {
    this.tasks.forEach((task: Task) => {
      console.log(`Task: ${task.getDescription()}, Date: ${task.getDate()}`);
    });
  }

  private loadTasks() {
    this.tasks.push(new Task('multi-byte'));
    this.tasks.push(new Task('Personal Loan Account Integration Avon'));
    this.tasks.push(new Task('concept'));
    this.tasks.push(new Task('Arizona Chief Licensed'));
    this.tasks.push(new Task('Consultant interfaces'));
    this.tasks.push(new Task('Director'));
    this.tasks.push(new Task('invoice Awesome'));
  }
}

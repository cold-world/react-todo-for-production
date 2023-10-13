import { v4 as uuid } from 'uuid';

export class Task {
    private readonly id: string;
    private title: string;

    constructor(taskTitle: string) {
        this.id = uuid();
        this.title = taskTitle;
    }

    getID() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }
}

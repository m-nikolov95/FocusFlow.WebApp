export class TasksStateModel {
    id: number;
    description: string;
    isCompleted: boolean;

    constructor(id: number, description: string, isCompleted: boolean = false) {
        this.id = id;
        this.description = description;
        this.isCompleted = isCompleted;
    }
}
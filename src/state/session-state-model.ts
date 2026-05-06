export class SessionStateModel {
    isRunning: boolean;
    elapsedTimeMs: number;

    constructor(isRunning: boolean = false, elapsedTimeMs: number = 0) {
        this.isRunning = isRunning;
        this.elapsedTimeMs = elapsedTimeMs;
    }
}
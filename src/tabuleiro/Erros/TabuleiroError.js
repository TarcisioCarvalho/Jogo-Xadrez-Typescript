export class TabuleiroError extends Error {
    constructor(message) {
        super(message);
        this.name = "TabuleiroError";
    }
}

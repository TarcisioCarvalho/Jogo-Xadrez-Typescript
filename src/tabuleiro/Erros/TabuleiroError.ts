export class TabuleiroError extends Error {
    constructor(message:string) {
      super(message);
      this.name = "TabuleiroError";
    }
  }

export class Itodo {
  id: number;
  content: string;
  complete: boolean;

  constructor(id: number, content: string, complete: boolean) {
    this.id = id;
    this.content = content;
    this.complete = complete;
  }
}

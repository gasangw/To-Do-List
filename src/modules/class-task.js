export default class Task {
  constructor(_description, _id, _completed = false) {
    this.description = _description;
    this.id = _id;
    this.completed = _completed;
  }
}
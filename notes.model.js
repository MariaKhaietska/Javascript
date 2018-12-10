class NotesModel {
  constructor() {
    this.notes = [];
  }

  get() {
    return this.notes;
  }
  filter(func) {
    return this.get().filter(func);
  }
  delete(id) {
    const oldLength = this.notes.length;
    this.notes = this.notes.filter(x => x.id !== id);
    return oldLength > this.notes.length;
  }
  addNote(text) {
    const { notes } = this;
    notes.push({
      id: notes.length ? notes[notes.length - 1].id + 1 : 0,
      text,
      isFavorite: false
    });
    return notes[notes.length - 1];
  }
  update(id, object) {
    const index = this.notes.findIndex(x => x.id === id);
    if (index === -1) {
      return false;
    }
    this.notes[index] = object;
    return true;
  }

  find(id) {
    return this.notes.find(x => x.id === id);
  }
}

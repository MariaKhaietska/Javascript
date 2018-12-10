class NotesController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  getAll() {
    return this.model.get();
  }
  getFavorite() {
    return this.model.filter(x => x.isFavorite);
  }

  getCommon() {
    return this.model.filter(x => !x.isFavorite);
  }

  toggleFavorite(id) {
    const item = this.model.find(id);
    if (item) {
      item.isFavorite = !item.isFavorite;
      return this.model.update(id, item);
    }
    return false;
  }
  remove(id) {
    return this.model.delete(id);
  }
}

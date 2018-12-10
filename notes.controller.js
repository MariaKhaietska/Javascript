class NotesController {
    constructor(model, view) {
        this._model = model;
        this._view = view;
    }

    init() {
        this._model.getNotes((data) => {
            this._view.renderNotes(data)
        });

        this.listenersAdd();
        this.listenerRemove()
    }

    listenersAdd() {
        this._view.listenFavoriteNote((id) => { this._model.changeFavorite(id, (notes) =>
        	{this._view.renderFavoriteNotes(notes) 
        	})
       });
  }

    listenerRemove(){
    	this._view.listenRemoveNote((id) => {
    		this._model.delete(id, (notes) => {
    			this._view.renderFavoriteNotes(notes)
            })
          });
    }
}
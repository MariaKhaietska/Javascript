class NotesModel {
    constructor() {
        this._notes = [{
                id: 1,
                text: 'Some text 1',
                isFavorite: false
            },
            {
                id: 2,
                text: 'Some text 2',
                isFavorite: false
            },
            {
                id: 3,
                text: 'Some text 3',
                isFavorite: false
            },
            {
                id: 4,
                text: 'Some text 4',
                isFavorite: false
            }
        ]
        
    }

    getNotes(cb) {
        // getting notes.......
        cb(this._notes);
        return this._notes;
    }

     changeFavorite(id, cb){
     		for(const bool of this._notes){
     			if(bool.id == +id){
     				bool.isFavorite = true;
     				console.log(this._notes)
     		}

     	}
          cb(this._notes);
          return(this._notes)
         

    }

    delete(id, cb) {
        this._notes = this._notes.filter((e) =>  e.id !== +id);


        console.log(this._notes);
        cb(this._notes)

        
    }
}
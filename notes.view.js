class NotesView {
  constructor() {
    this._s = {
      list: document.querySelector(".list"),
      addBtnClass: "list__element-btn"
    };

    this._d = {
      list: document.querySelector(".list_2"),
      removeBtnClass: "list__element-btn-remove"
    };

    this._t = {
      item: `
                <li class="list__element">
                    {{text}}
                    <button data-id="{{id}}" class="list__element-btn">Add favorite</button>
                </li>
            `
    };

    this._y = {
      item: `
                <li class="list__element">
                    {{text}}
                    <button data-id="{{id}}" class="list__element-btn-remove">Remove favorite</button>
                </li>
            `
    };
  }

  renderNotes(notes) {
    // console.log('!!!', notes);
    let template = "";
    for (const n of notes) {
      template += this._t.item
        .replace("{{text}}", n.text)
        .replace("{{id}}", n.id);
    }
    // notes.forEach(n => {
    //     template += this._t.item.replace('{{text}}', n.text);
    // });
    this._s.list.innerHTML = template;
  }

  renderFavoriteNotes(notes) {
    let template = "";
    for (const b of notes) {
      if (b.isFavorite == true) {
        template += this._y.item
          .replace("{{text}}", b.text)
          .replace("{{id}}", b.id);
      }
    }
    this._d.list.innerHTML = template;
  }

  listenFavoriteNote(cb) {
    // узнаем ID удаляемой заметки (значение data-id кнопки, на которую мы нажали)
    // ...
    // let self = this;
    this._s.list.addEventListener("click", e => {
      let target = e.target;
      target.style = "background: yellow";
      if (target.className === this._s.addBtnClass) {
        for (const a of target.attributes) {
          if (a.name === "data-id") {
            cb(a.value);
          }
        }
      }
    });
  }

  listenRemoveNote(cb) {
    this._d.list.addEventListener("click", e => {
      let target = e.target;
      if (target.className === this._d.removeBtnClass) {
        for (const a of target.attributes) {
          if (a.name === "data-id") {
            cb(a.value);
          }
        }
      }
    });
  }
}

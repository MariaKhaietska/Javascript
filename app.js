class App {
  constructor() {
    this.controller = new NotesController(new NotesModel(), new NotesView());
  }
}

let app = new App();

// let getSomeData = function (cb) {
//     // get smth .....
//     let data = [0, 4, 5, 6, 10];
//     cb(data);
// }

// // _______

// getSomeData((data) => {
//     console.log(data)
// });

// $('.box').hide();
// $.ajax()

class App {
    constructor() {
        let model = new NotesModel();
        let view = new NotesView();
        let ctrl = new NotesController(model, view);

        ctrl.init();
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
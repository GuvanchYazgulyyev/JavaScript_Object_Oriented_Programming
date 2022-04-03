// Cllas DEgerini Tutuyor Course
// Course Cobstructor


function Course(title, instructur, image) {
    this.title = title;
    this.instructur = instructur;
    this.image = image;
}

// UI Constructur
function UI() {

}

// UI Prototype
UI.prototype.addCourseToList = function(course) {
    const list = document.getElementById('course-list');
    var html = `
    <tr>
    <td><img src="img/${course.image}"/></td>
    <td>${course.title}</td>
    <td>${course.instructur}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
    </tr>
    `;
    list.innerHTML += html;
}

UI.prototype.clearControls = function() {
    const title = document.getElementById('title').value = "";
    const instructor = document.getElementById('instructor').value = "";
    const image = document.getElementById('image').value = "";
}

// Delete 
UI.prototype.deleteCourse = function(element) {
    if (element.classList.contains('delete')) {
        element.parentElement.parentElement.remove();
    }
}

// alert
UI.prototype.showAlert = function(message, className) {
    var alert = `<div class="alert alert-${className}">
    ${message}
    </div>
    `;
    const row = document.querySelector('.row');
    //beforeBegin , afterBegin, beforeEnd, afterEnd
    row.insertAdjacentHTML('beforeBegin', alert);

    // Belirli bir zaman sonra kendiliginden Kaybolacak
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
}


document.getElementById('new-course').addEventListener('submit', function(e) {
    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    //Create Course Oject
    const course = new Course(title, instructor, image);

    // Create UI
    const ui = new UI();

    // Validation
    if (title === '' || instructor === '' || image === '') {
        ui.showAlert('Please Complate the form', 'warning');
    } else {
        //add course to List
        ui.addCourseToList(course);

        // clear Control
        ui.clearControls();
        // Addedd Alert
        ui.showAlert('Item Has Been Added', 'success');

    }


    e.preventDefault();

});

// Delete

document.getElementById('course-list').addEventListener('click', function(e) {

    const ui = new UI();
    ui.deleteCourse(e.target);
    //delete Alert
    ui.showAlert('This İtem has been deleted', 'danger');
});
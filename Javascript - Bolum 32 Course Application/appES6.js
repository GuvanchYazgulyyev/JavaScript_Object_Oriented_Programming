//Course class
class Course {
    constructor(tite, instructor, image) {
        // Silmek için İD Oluşturuyoruz
        this.courseId = Math.floor(Math.random() * 100000000);
        this.tite = title;
        this.instructor = instructor;
        this.image = image;
    }
}


//UI Class
class UI {

    // Add
    addCourseToList(course) {
        const list = document.getElementById('course-list');
        var html = `
        <tr>
        <td><img src="img/${course.image}"/></td>
        <td>${course.title}</td>
        <td>${course.instructur}</td>
        <td><a href="#" data-id="${course.courseId}" class="btn btn-danger btn-sm delete">Delete</a></td>
        </tr>
        `;
        list.innerHTML += html;
    }

    // Cleare
    clearControls() {
        const title = document.getElementById('title').value = "";
        const instructor = document.getElementById('instructor').value = "";
        const image = document.getElementById('image').value = "";
    }

    // Delete 
    deleteCourse(element) {
        if (element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();
            return true;
        }
    }


    // Show Alert 
    showAlert(message, className) {
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



}

//Local Storage class
class Storage {
    static getCourses() {
        let courses;
        if (localStorage.getItem('courses') === null) {
            courses = [];
        } else {
            courses = JSON.parse(localStorage.getItem('courses'));
        }
        return courses;
    }

    static displayCourse() {
        const courses = Storage.getCourses();
        courses.forEach(course => {
            const ui = new UI();
            ui.addCourseToList(course);
        });
    }

    static addCourse(course) {
        const courses = Storage.getCourses();
        courses.push(course);
        localStorage.setItem('courses', JSON.stringify(courses));
    }

    static deleteCourse(element) {
        if (element.classList.contains('delete')) {
            const id = element.getAttribute('data-id');
            const courses = Storage.getCourses();

            courses.forEach((course, index) => {
                if (course.courseId == id) {
                    courses.splice(index, 1);
                }
            });
            localStorage.setItem('courses', JSON.stringify(courses));
        }
    }


}

// Listener sayfa yüklendiginde çalışcak
document.addEventListener('DOMContentLoaded', Storage.displayCourse);


document.getElementById('new-course').addEventListener('submit', function(e) {
    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    //Create Course Oject
    const course = new Course(title, instructor, image);
    // console.log(course);
    // Create UI
    const ui = new UI();

    // Validation
    if (title === '' || instructor === '' || image === '') {
        ui.showAlert('Please Complate the form', 'warning');
    } else {
        //add course to List
        ui.addCourseToList(course);

        //Save LS
        Storage.addCourse(course);

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

    // Delete Item
    if (ui.deleteCourse(e.target) == true) {

        // Delete From Ls
        Storage.deleteCourse(e.target);
        //delete Alert
        ui.showAlert('This İtem has been deleted', 'danger');
    }
});
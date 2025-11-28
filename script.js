function validateForm(){
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let rating = document.getElementById("rating").value;
    let comments = document.getElementById("comments").value;
    let file = document.getElementById("file").value;

    if(name=="" || course=="" || rating=="" || comments=="" || file==""){
        alert("All fields are required");
        return false;
    }

    console.log("Name:", name);
    console.log("Course:", course);
    console.log("Rating:", rating);
    console.log("Comments:", comments);
    console.log("File:", file);

    document.getElementById("message").innerText =
        "Feedback submitted successfully!";

    return false;
}

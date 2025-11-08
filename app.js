function generateCard() {
    let cardPreview = document.getElementById("cardPreview")

    let fullName = document.getElementById("name").value.trim()
    let email = document.getElementById("email").value.trim()
    let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let course = document.getElementById("courseName").value.trim()
    let rollNum = document.getElementById("rollNum").value.trim()
    let batch = document.getElementById("batch").value.trim()

    if (fullName === "") {
        Swal.fire({
            icon: "error",
            title: "Enter Your Name",
            text: "Please Enter Your Name to Proceed!",
        });
        return
    }

    if (!emailRegEx.test(email)) {
        Swal.fire({
            icon: "error",
            title: "Enter Your Email",
            text: "Please Enter Your Email to Proceed!",
        });
        return
    }

    if (course === "") {
        Swal.fire({
            icon: "error",
            title: "Enter Your Course",
            text: "Please Enter Your Course to Proceed!",
        });
        return
    }

    if (rollNum === "") {
        Swal.fire({
            icon: "error",
            title: "Enter Your Roll Number",
            text: "Please Enter Your Roll Number to Proceed!",
        });
        return
    }

    if (batch === "") {
        Swal.fire({
            icon: "error",
            title: "Enter Your Batch Number Number",
            text: "Please Enter Your Batch Number to Proceed!",
        });
        return
    }

    let profile = document.getElementById("profile")

    if (profile.files.length === 0) {
        Swal.fire({
            icon: "error",
            title: "Enter Your Profile Picture",
            text: "Please Enter Your Profile Picture to Proceed!",
        });
        return
    }

    let file = profile.files[0]
    let imgURL = URL.createObjectURL(file)

    cardPreview.innerHTML = `
            <div class="card">
                <div class="card-header">STUDENT ID CARD</div>
                <img src="${imgURL}" alt="profile picture">
                <div class="card-info">
                    <p><strong>Name:</strong>${fullName}</p>
                    <p><strong>Email:</strong>${email}</p>
                    <p><strong>Course:</strong>${course}</p>
                    <p><strong>Roll No:</strong>${rollNum}</p>
                    <p><strong>Batch:</strong>${batch}</p>
                </div>
            </div>`
}
function getUser(){

    fetch("https://randomuser.me/api")
    .then(res => res.json())
    .then(data => {

        const user = data.results[0];

        const name = user.name.first + " " + user.name.last;

        const profession =
        user.gender === "male"
        ? "Software Developer"
        : "UI/UX Designer";

        const image = user.picture.large;

        document.getElementById("profileImg").src = image;
        document.getElementById("name").textContent = name;
        document.getElementById("role").textContent = profession;

    })
    .catch(err => {
        console.log("Error:",err);
    });
}

getUser();
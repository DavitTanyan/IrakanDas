const btns   = document.querySelectorAll("p")
const modal = document.querySelector(".modal")
const info = document.querySelector(".info")

for(let btn of btns){
    btn.addEventListener("click", function () {
        prof(this.id)
        modal.classList.add("showModal")
    })
}
modal.onclick = function () {
    this.classList.remove("showModal");
}

function prof(id) {
    info.innerHTML = futureProfession[id]
}
const futureProfession = {
    test: "<img src=../Img/doctor.jpg>"
}
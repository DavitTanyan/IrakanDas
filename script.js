const btns = document.querySelectorAll("button");
const modal = document.querySelector(".modal")
const info = document.querySelector(".info")

for (let btn of btns) {
    btn.addEventListener("click", function () {
        prof(this.id)
        modal.classList.add("showModal")
    })
}
modal.onclick = function () {
    this.classList.remove("showModal");
}

function prof(id) {
    info.innerHTML = profession1[id]
}
const profession1 = {
    doctor: "<img src=../Img/doctor.jpg>",
    teacher: "<img src=../Img/teacher.jpg>",
    art: "<img src=../Img/art.jpg>",
    agri: "<img src=../Img/agarak.jpg>",
    religy: "<img src=../Img/religy.jpg>",
    worker: "",
    programmer: "<img src=../Img/programmer.jpg>",
    engine: "<img src=../Img/enginejpg.jpg>",
    hystory: "<img src = ../Img/hystory.jpg>",
    know: "<img src=../Img/know.jpg>",
    old: "<img src=../Img/old.jpg>",
    language: "<img src=../Img/language.jpg>",
    ban: "<img src=../Img/ban.jpg>",
    tntes: "<img src=../Img/tntes.jpg>",
    qaxaq: "<img src=../Img/qaxaq.jpg>",
    hoge: "<img src=../Img/hogi.jpg>",
    hashiv: "<img src=../Img/hashiv.jpg>",
    divan: "<img src=../Img/divan.jpg>",
    kensab: "<img src=../Img/kensab.jpg>",
    bnak:"<img src=../Img/bnak.jpg>",
    lragir: "<img src=../Img/lragrox.jpg>",
    irav: "<img src=../Img/irav.jpg>",
    shuka: "<img src=../Img/shuka.jpg>"
   
}
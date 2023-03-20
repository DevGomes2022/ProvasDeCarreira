const btnpageA = document.getElementById("btn-pageA");
const mata = document.getElementById("mat-a");
    btnpageA.addEventListener("click", () => {
    if (mata.style.display === "none") {
        mata.style.display = "block";
        matb.style.display = "none";
        matc.style.display = "none";
    } else {
        mata.style.display = "block";
        matb.style.display = "none";
        matc.style.display = "none";
    }
});

const btnpageB = document.getElementById("btn-pageB");
const matb = document.getElementById("mat-b");
    btnpageB.addEventListener("click", () => {
    if (matb.style.display === "none") {
        matb.style.display = "block";
        mata.style.display = "none";
        matc.style.display = "none";
    } else {
        mata.style.display = "none";
        matb.style.display = "block";
        matc.style.display = "none";
    }
});

const btnpageC = document.getElementById("btn-pageC");
const matc = document.getElementById("mat-c");
    btnpageC.addEventListener("click", () => {
    if (matc.style.display === "none") {
        matc.style.display = "block";
        mata.style.display = "none";
        matb.style.display = "none";
    } else {
        mata.style.display = "none";
        matb.style.display = "none";
        matc.style.display = "block";
    }
});
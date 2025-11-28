let getModal = document.getElementById("main-modal");
let getOpenBtn = document.getElementById("open-modal");
let getCloseBtn = document.getElementById("close-modal");

getOpenBtn.onclick = () => getModal.style.display="block";
getCloseBtn.onclick = () =>getModal.style.display="none";
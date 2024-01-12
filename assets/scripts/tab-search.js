
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const content1 = document.getElementById("content1")
    const content2 = document.getElementById("content2")
    btn1.addEventListener("click", function() {
    btn1.classList.add("border-b-4", "border-b-color-success");
    btn2.classList.add("bg-color-bg-gray-dark","text-white");
    btn1.classList.remove("bg-color-bg-gray-dark","text-white");
    btn2.classList.remove("border-b-4", "border-b-color-success");
    content1.classList.remove("hidden")
    content2.classList.add("hidden")
});

    btn2.addEventListener("click", function() {
    btn2.classList.add("border-b-4", "border-b-color-success");
    btn1.classList.add("bg-color-bg-gray-dark","text-white");
    btn2.classList.remove("bg-color-bg-gray-dark","text-white");
    btn1.classList.remove("border-b-4", "border-b-color-success","text-color-text");
    content1.classList.add("hidden")
    content2.classList.remove("hidden")
});

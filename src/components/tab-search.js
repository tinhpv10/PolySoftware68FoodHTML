
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const content1 = document.getElementById("content1")
    const content2 = document.getElementById("content2")
    btn1.addEventListener("click", function() {
    btn1.classList.add("border-b-4", "border-b-red-800");
    btn2.classList.add("bg-gray-300","text-white");
    btn1.classList.remove("bg-gray-300","text-white");
    btn2.classList.remove("border-b-4", "border-b-red-800");
    content1.classList.remove("hidden")
    content2.classList.add("hidden")
});

    btn2.addEventListener("click", function() {
    btn2.classList.add("border-b-4", "border-b-red-800");
    btn1.classList.add("bg-gray-300","text-white");
    btn2.classList.remove("bg-gray-300","text-white");
    btn1.classList.remove("border-b-4", "border-b-red-800","text-black");
    content1.classList.add("hidden")
    content2.classList.remove("hidden")
});

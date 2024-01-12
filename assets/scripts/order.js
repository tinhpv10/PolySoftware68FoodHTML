// Xử lý mở modal khi click 

document.getElementById('openModalBtn').addEventListener('click', function() {
    var modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    document.body.classList.add('no-scroll');
    document.body.insertAdjacentHTML('beforeend', '<div class="overlay"></div>'); // Thêm overlay
    setTimeout(function() {
        modal.classList.remove('translate-x-full');
        modal.classList.add('translate-x-0');
    }, 10);
});

// Xử lý đóng modal khi click 

document.getElementById('closeModalBtn').addEventListener('click', function() {
    var modal = document.getElementById('modal');
    modal.classList.add('translate-x-full');
    document.body.classList.remove('no-scroll');
    var overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.remove(); // Xóa overlay khi đóng modal
    }
    setTimeout(function() {
        modal.classList.add('hidden');
        modal.classList.remove('translate-x-0');
    }, 300);
});

// window.addEventListener('click', function(event) {
//     var modal = document.getElementById('modal');
//     if (event.target === modal) {
//         modal.classList.add('translate-x-full');
//         document.body.classList.remove('no-scroll');
//         var overlay = document.querySelector('.overlay');
//         if (overlay) {
//             overlay.remove(); // Xóa overlay khi đóng modal bằng cách click ngoài modal
//         }
//         setTimeout(function() {
//             modal.classList.add('hidden');
//             modal.classList.remove('translate-x-0');
//         }, 300);
//     }
// });


//Xử lý tăng số lượng

function incrementQuantity(button) {
    var quantityElement = button.parentNode.querySelector('#quantity');
    var currentQuantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = currentQuantity + 1;
}

//Xử lý giảm số lượng

function decrementQuantity(button) {
    var quantityElement = button.parentNode.querySelector('#quantity');
    var currentQuantity = parseInt(quantityElement.textContent);
    if (currentQuantity > 1) {
        quantityElement.textContent = currentQuantity - 1;
    }
}

//Xử lý xóa sản phẩm

function confirmRemoveItem(button) {
    // Hiển thị hộp thoại xác nhận
    var isConfirmed = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");

    // Nếu người dùng chọn OK trong hộp thoại xác nhận, thực hiện xóa sản phẩm
    if (isConfirmed) {
        removeItem(button);
    }
}

function removeItem(button) {
    // Truy cập đến phần tử cha của nút xóa (div có class là "flex flex-col mb-2")
    var parentDiv = button.closest('.flex.flex-col.mb-2');

    // Xóa phần tử cha (sản phẩm) khỏi DOM
    parentDiv.remove();
}
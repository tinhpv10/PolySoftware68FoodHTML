document.getElementById('open-btn').addEventListener('click', function() {
    var menuSelectedDish = document.getElementById('menu-selected-dish');
    var overlay = document.getElementById('overlay');

    // Hiển thị menu và overlay
    menuSelectedDish.style.display = 'flex';
    overlay.style.display = 'block';
});

document.getElementById('btn-close').addEventListener('click', function() {
    var menuSelectedDish = document.getElementById('menu-selected-dish');
    var overlay = document.getElementById('overlay');

    // Ẩn menu và overlay
    menuSelectedDish.style.display = 'none';
    overlay.style.display = 'none';
});

document.getElementById('btnHuy').addEventListener('click', function() {
    var menuSelectedDish = document.getElementById('menu-selected-dish');
    var overlay = document.getElementById('overlay');

    // Ẩn menu và overlay
    menuSelectedDish.style.display = 'none';
    overlay.style.display = 'none';
});


//Xử lý nút tăng giảm số lượng

function incrementQuantity(button) {
    var quantityElement = button.parentNode.querySelector('#quantity');
    var currentQuantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = currentQuantity + 1;
  }

  function decrementQuantity(button) {
    var quantityElement = button.parentNode.querySelector('#quantity');
    var currentQuantity = parseInt(quantityElement.textContent);
    if (currentQuantity > 1) {
      quantityElement.textContent = currentQuantity - 1;
    }
  }


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
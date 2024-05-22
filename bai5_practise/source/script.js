//Hiển thị modal nút thêm nhân viên
// Chờ tài liệu được tải hoàn toàn
document.addEventListener("DOMContentLoaded", function() {
    // Lấy phần tử modal thông qua ID của nó
    var addEmployeeModal = document.getElementById('addEmployeeModal');

    // Hiển thị modal khi cần
    function displayAddEmployeeModal() {
        // Sử dụng phương thức modal của Bootstrap để hiển thị modal
        var modal = new bootstrap.Modal(addEmployeeModal);
        modal.show();
    }

    var showAddEmployeeModalButton = document.getElementById('showAddEmployeeModal');
    if (showAddEmployeeModalButton) {
        showAddEmployeeModalButton.addEventListener('click', function() {
            displayAddEmployeeModal();
        });
    }
});

//Hiển thị modal nút xóa nhân viên
function displayDeleteEmployeeModal() {
    // Lấy modal xóa nhân viên bằng ID
    var deleteEmployeeModal = document.getElementById('deleteEmployeeModal');
    // Tạo một instance của modal
    var modal = new bootstrap.Modal(deleteEmployeeModal);
    // Hiển thị modal
    modal.show();
}

// Lắng nghe sự kiện click trên nút hoặc phần tử kích hoạt modal
document.addEventListener("DOMContentLoaded", function() {
    var showDeleteEmployeeModalButton = document.getElementById('showDeleteEmployeeModal');
    if (showDeleteEmployeeModalButton) {
        showDeleteEmployeeModalButton.addEventListener('click', function() {
            displayDeleteEmployeeModal();
        });
    }
});

//Hiển thị modal sửa nhân viên 1
function displayEditEmployeeModal() {
    // Lấy modal sửa thông tin nhân viên bằng ID
    var editEmployeeModal = document.getElementById('editEmployeeModal');
    // Tạo một instance của modal
    var modal = new bootstrap.Modal(editEmployeeModal);
    // Hiển thị modal
    modal.show();
}

// Lắng nghe sự kiện click trên nút hoặc phần tử kích hoạt modal
document.addEventListener("DOMContentLoaded", function() {
    var showEditEmployeeModalButton = document.getElementById('showEditEmployeeModal1');
    if (showEditEmployeeModalButton) {
        showEditEmployeeModalButton.addEventListener('click', function() {
            displayEditEmployeeModal();
        });
    }
});

//Hiển thị modal xóa nhân viên 1
function displayDeleteEmployeeModal() {
    // Lấy modal xóa nhân viên bằng ID
    var deleteEmployeeModal = document.getElementById('deleteEmployeeModal');
    // Tạo một instance của modal
    var modal = new bootstrap.Modal(deleteEmployeeModal);
    // Hiển thị modal
    modal.show();
}

// Lắng nghe sự kiện click trên nút hoặc phần tử kích hoạt modal
document.addEventListener("DOMContentLoaded", function() {
    var showDeleteEmployeeModalButton = document.getElementById('showDeleteEmployeeModal1');
    if (showDeleteEmployeeModalButton) {
        showDeleteEmployeeModalButton.addEventListener('click', function() {
            displayDeleteEmployeeModal();
        });
    }
});


//Hiển thị modal sửa nhân viên 2
function displayEditEmployeeModal() {
    // Lấy modal sửa thông tin nhân viên bằng ID
    var editEmployeeModal = document.getElementById('editEmployeeModal');
    // Tạo một instance của modal
    var modal = new bootstrap.Modal(editEmployeeModal);
    // Hiển thị modal
    modal.show();
}

// Lắng nghe sự kiện click trên nút hoặc phần tử kích hoạt modal
document.addEventListener("DOMContentLoaded", function() {
    var showEditEmployeeModalButton = document.getElementById('showEditEmployeeModal2');
    if (showEditEmployeeModalButton) {
        showEditEmployeeModalButton.addEventListener('click', function() {
            displayEditEmployeeModal();
        });
    }
});

//Hiển thị modal xóa nhân viên 2
function displayDeleteEmployeeModal() {
    // Lấy modal xóa nhân viên bằng ID
    var deleteEmployeeModal = document.getElementById('deleteEmployeeModal');
    // Tạo một instance của modal
    var modal = new bootstrap.Modal(deleteEmployeeModal);
    // Hiển thị modal
    modal.show();
}

// Lắng nghe sự kiện click trên nút hoặc phần tử kích hoạt modal
document.addEventListener("DOMContentLoaded", function() {
    var showDeleteEmployeeModalButton = document.getElementById('showDeleteEmployeeModal2');
    if (showDeleteEmployeeModalButton) {
        showDeleteEmployeeModalButton.addEventListener('click', function() {
            displayDeleteEmployeeModal();
        });
    }
});


//Hiển thị modal sửa nhân viên 3
function displayEditEmployeeModal() {
    // Lấy modal sửa thông tin nhân viên bằng ID
    var editEmployeeModal = document.getElementById('editEmployeeModal');
    // Tạo một instance của modal
    var modal = new bootstrap.Modal(editEmployeeModal);
    // Hiển thị modal
    modal.show();
}

// Lắng nghe sự kiện click trên nút hoặc phần tử kích hoạt modal
document.addEventListener("DOMContentLoaded", function() {
    var showEditEmployeeModalButton = document.getElementById('showEditEmployeeModal3');
    if (showEditEmployeeModalButton) {
        showEditEmployeeModalButton.addEventListener('click', function() {
            displayEditEmployeeModal();
        });
    }
});

//Hiển thị modal xóa nhân viên 3
function displayDeleteEmployeeModal() {
    // Lấy modal xóa nhân viên bằng ID
    var deleteEmployeeModal = document.getElementById('deleteEmployeeModal');
    // Tạo một instance của modal
    var modal = new bootstrap.Modal(deleteEmployeeModal);
    // Hiển thị modal
    modal.show();
}

// Lắng nghe sự kiện click trên nút hoặc phần tử kích hoạt modal
document.addEventListener("DOMContentLoaded", function() {
    var showDeleteEmployeeModalButton = document.getElementById('showDeleteEmployeeModal3');
    if (showDeleteEmployeeModalButton) {
        showDeleteEmployeeModalButton.addEventListener('click', function() {
            displayDeleteEmployeeModal();
        });
    }
});

//Hiển thị modal sửa nhân viên 4
function displayEditEmployeeModal() {
    // Lấy modal sửa thông tin nhân viên bằng ID
    var editEmployeeModal = document.getElementById('editEmployeeModal');
    // Tạo một instance của modal
    var modal = new bootstrap.Modal(editEmployeeModal);
    // Hiển thị modal
    modal.show();
}

// Lắng nghe sự kiện click trên nút hoặc phần tử kích hoạt modal
document.addEventListener("DOMContentLoaded", function() {
    var showEditEmployeeModalButton = document.getElementById('showEditEmployeeModal4');
    if (showEditEmployeeModalButton) {
        showEditEmployeeModalButton.addEventListener('click', function() {
            displayEditEmployeeModal();
        });
    }
});

//Hiển thị modal xóa nhân viên 4
function displayDeleteEmployeeModal() {
    // Lấy modal xóa nhân viên bằng ID
    var deleteEmployeeModal = document.getElementById('deleteEmployeeModal');
    // Tạo một instance của modal
    var modal = new bootstrap.Modal(deleteEmployeeModal);
    // Hiển thị modal
    modal.show();
}

// Lắng nghe sự kiện click trên nút hoặc phần tử kích hoạt modal
document.addEventListener("DOMContentLoaded", function() {
    var showDeleteEmployeeModalButton = document.getElementById('showDeleteEmployeeModal4');
    if (showDeleteEmployeeModalButton) {
        showDeleteEmployeeModalButton.addEventListener('click', function() {
            displayDeleteEmployeeModal();
        });
    }
});


//Hiển thị modal sửa nhân viên 5
function displayEditEmployeeModal() {
    // Lấy modal sửa thông tin nhân viên bằng ID
    var editEmployeeModal = document.getElementById('editEmployeeModal');
    // Tạo một instance của modal
    var modal = new bootstrap.Modal(editEmployeeModal);
    // Hiển thị modal
    modal.show();
}

// Lắng nghe sự kiện click trên nút hoặc phần tử kích hoạt modal
document.addEventListener("DOMContentLoaded", function() {
    var showEditEmployeeModalButton = document.getElementById('showEditEmployeeModal5');
    if (showEditEmployeeModalButton) {
        showEditEmployeeModalButton.addEventListener('click', function() {
            displayEditEmployeeModal();
        });
    }
});

//Hiển thị modal xóa nhân viên 5
function displayDeleteEmployeeModal() {
    // Lấy modal xóa nhân viên bằng ID
    var deleteEmployeeModal = document.getElementById('deleteEmployeeModal');
    // Tạo một instance của modal
    var modal = new bootstrap.Modal(deleteEmployeeModal);
    // Hiển thị modal
    modal.show();
}

// Lắng nghe sự kiện click trên nút hoặc phần tử kích hoạt modal
document.addEventListener("DOMContentLoaded", function() {
    var showDeleteEmployeeModalButton = document.getElementById('showDeleteEmployeeModal5');
    if (showDeleteEmployeeModalButton) {
        showDeleteEmployeeModalButton.addEventListener('click', function() {
            displayDeleteEmployeeModal();
        });
    }
});

// Khởi tạo tooltip bằng JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Lấy tất cả các phần tử có thuộc tính data-toggle="tooltip"
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

    // Lặp qua danh sách các phần tử và khởi tạo tooltip cho mỗi phần tử
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

document.getElementById('selectAll').addEventListener('change', function(e) {
    const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = e.target.checked;
    });
});
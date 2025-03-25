// Function to check password and enable the voucher button
function checkPassword(inputId, correctPassword, buttonId) {
    const input = document.getElementById(inputId).value;
    const button = document.getElementById(buttonId);

    if (input === correctPassword) {
        button.disabled = false; // Enable the voucher button if the password is correct
    } else {
        button.disabled = true; // Disable the voucher button if the password is incorrect
    }
}

// Function to show the voucher popup (similar to cookie consent popup)
function showVoucherPopup() {
    const voucherPopup = document.getElementById('voucher-popup');
    voucherPopup.style.display = 'block'; // Show the popup
}

document.addEventListener("DOMContentLoaded", function() {
    const switchInput = document.getElementById("voucherSwitch");
    const nextButton = document.getElementById("next5");

    switchInput.addEventListener("change", function() {
        if (switchInput.checked) {
            nextButton.disabled = false;
            nextButton.onclick = function() {
                window.location.href = "6.html"; // Redirect to the next page
            };
        } else {
            nextButton.disabled = true;
            nextButton.onclick = null; // Remove click handler
        }
    });
});

// Function to close the voucher popup
function closeVoucherPopup() {
    const voucherPopup = document.getElementById('voucher-popup');
    voucherPopup.style.display = 'none'; // Close the popup
}

// Function to enable the "Next" button after redeeming the voucher
function enableNextButton() {
    const nextButton = document.getElementById('next4');
    nextButton.disabled = false; // Enable the "Next" button
}

// This would be triggered by a click event on a button, for example to redeem the voucher
function redeemVoucher() {
    // Show voucher popup when user tries to redeem the voucher
    showVoucherPopup();
}

// Handle confirmation of redeeming the voucher
document.getElementById('redeem-confirm').addEventListener('click', function() {
    // After confirming, enable the next button and close the voucher popup
    enableNextButton();
    closeVoucherPopup();
});

// Handle cancellation of redeeming the voucher
document.getElementById('redeem-cancel').addEventListener('click', function() {
    closeVoucherPopup(); // Just close the popup without enabling the next button
});

// Function to check password and enable the button
document.getElementById('codeInput2').addEventListener('input', function() {
    var code = document.getElementById('codeInput2').value;
    var nextButton = document.getElementById('next');
    
    // Check if the code entered matches the correct one
    if (code === "1310") {
        nextButton.disabled = false;  // Enable button
    } else {
        nextButton.disabled = true;  // Disable button
    }
});

// Function to show/hide the hint text
function showHint() {
    const hintText = document.getElementById('hint-text');
    hintText.style.display = hintText.style.display === "none" || hintText.style.display === "" ? "block" : "none";
}


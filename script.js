const codes = document.querySelectorAll('.code');
//  highlight the first input field
codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        // will not allow to enter other than a number
        if (e.key >= 0 && e.key <= 9) {
            // if the input field is not empty, it will move to the next input field
            codes[idx].value = '';
            setTimeout(() => codes[idx + 1].focus(), 10);
        }
        else if (e.key === 'Backspace') {
            // If the input field is empty, it will move to the previous input field
            setTimeout(() => codes[idx - 1].focus(), 10);
        }
    });
});
window.onload = function () {
    Smart('#calendar', class {
    get properties() {
        return {"selectedDates":[new Date(),"2022-7-17"]}
    }
});
// document.querySelector('smart-calendar').view = 'landscape';
}
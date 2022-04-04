window.onload = function () {
    Smart('#calendar', class {
    get properties() {
        return {"selectedDates":[new Date(),"2022-7-17"]}
    }
});
// document.querySelector('smart-calendar').selectedDates = ["2018-1-1", new Date(2018,0,2)];
}
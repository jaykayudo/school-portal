var staffType = document.getElementById('staff_type');
var teachingBox = document.getElementById('teaching_box')

staffType.addEventListener('change',function(e){
    if(e.target.value != "" && e.target.value == "t"){
        teachingBox.classList.remove('hidden')
    }else{
        teachingBox.classList.add('hidden')
    }
})
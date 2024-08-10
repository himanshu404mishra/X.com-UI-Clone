
document.querySelectorAll("#btn").forEach(btn=>{
    let follow = false
    btn.addEventListener("click", function(e){
        if (!follow) {
            e.target.textContent = "Un Follow"
            e.target.classList.remove("bg-white","text-black","hover:bg-gray-300");
            e.target.classList.add("bg-transparent","text-white", "border-white", "border");
            follow =true
        }else{
            e.target.textContent = "Follow"
            e.target.classList.add("bg-white","text-black","hover:bg-gray-300");
            e.target.classList.remove("bg-transparent","text-white", "border-white", "border");
            follow=false
        }
    })
})

document.getElementById("post").addEventListener("input",function(e){
    let val = e.target.value
    if(val.trim().length){
        document.getElementById("post-btn").removeAttribute("disabled")
    }else{
        document.getElementById("post-btn").setAttribute("disabled","")
    }
})
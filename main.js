let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
buttons.forEach(function(button){
    button.addEventListener("click",function(){
        let value = this.innerHTML
        if (screen.innerHTML == "ERROR"){
            screen.innerHTML = '';
        }
        if (value === "RESET"){
            screen.innerHTML = "";
        } else if (value === "DEL"){
            screen.innerHTML = screen.innerHTML.slice(0,-1);
        } else if (value === ("=")){
            try{
                screen.innerHTML = eval(screen.innerHTML);
            } catch {
                screen.innerHTML = "ERROR"
            }
        }else if(value === "x"){
            screen.innerHTML += '*';
        } else{
            screen.innerHTML += value;
        }
    });
});
function change(cssfile){
    document.getElementById("theme-style").setAttribute('href',cssfile);
}
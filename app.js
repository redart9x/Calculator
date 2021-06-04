const keys = document.querySelectorAll(".key");
const screen = document.querySelector(".screen");
const themeNumber = document.querySelector("#range");
const body = document.querySelector("body");
const theme = document.querySelectorAll(".themeSelected")

//calc
keys.forEach (key => {
  let arr, str, count = 0;
  key.addEventListener("click", () => {
    
    arr = Array.from(screen.innerHTML)
    str = arr.join("")
    
    if (screen.innerHTML == "0") {
      screen.innerHTML = "0";
    }
    if (key.innerHTML == "RESET") {
      screen.innerHTML = "0";
      arr = [], str = "";
    }
    else if (key.innerHTML == "DEL") {
      if (arr.length == 1) {
        screen.innerHTML = "0";
        return
      }
      arr.splice(arr.length-1, 1);
      str = arr.join("")
      
      screen.innerHTML = str;
    }
    else if (key.innerHTML == "=") {
      const calc = eval(str)
      if (/\.+/.test(calc)) {
        console.log(1)
      }
      screen.innerHTML = calc;
    }
    else {
      screen.innerHTML += key.innerHTML; 
    }
    arr = Array.from(screen.innerHTML)
    str = arr.join("")
    if (/0+\d/.test(str)) {
      console.log(str)
      arr.shift();
      str = arr.join("");
      screen.innerHTML = str
    }
    arr = Array.from(screen.innerHTML)
    str = arr.join("")
  })
})

//theme
const changeTheme = () => {
  if (themeNumber.value == 1) {
    body.classList = null;
  }
  else if (themeNumber.value == 2) {
    body.classList = null;
    body.classList.add("dark-theme");
  }
  else {
    body.classList = null;
    body.classList.add("light-theme");
  }
}
themeNumber.oninput = () => {
  changeTheme()
}
theme.forEach(x => {
  x.onclick = () => {
    themeNumber.value = x.innerHTML;
    changeTheme()
  }
})


for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 95 + 'vw';
    confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
    confetti.style.backgroundColor = ['#f94144', '#f3722c', '#f9844a', '#90be6d', '#43aa8b'][Math.floor(Math.random() * 5)];
    confetti.style.width = Math.random() * 8 + 5 + 'px';
confetti.style.height = confetti.style.width;
confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    document.body.appendChild(confetti);
  }
window.addEventListener('click', () => {
     document.getElementById('bdayAudio').play();
    }, { once: true });

    

// dark mode

let mode = document.getElementById("mode");
let checkbox = document.getElementById("check");
let icon = document.getElementById("icon");

checkbox.addEventListener("change", () => {
  mode.classList.toggle("dark");
  if(mode.classList.contains("dark")){
    icon.style.color="yellow";
    icon.innerHTML="light_mode";
  }else{
    icon.style.color="black";
    icon.innerHTML="dark_mode";
    
  }
});



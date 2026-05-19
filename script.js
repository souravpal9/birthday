const gate = document.getElementById("gate")
const verify = document.getElementById("verify")
const main = document.getElementById("main")
const nameInput = document.getElementById("nameInput")
const status = document.getElementById("status")
const song = document.getElementById("song")
const letter = document.getElementById("letter")
const typed = document.getElementById("typed")
const continueBtn = document.getElementById("continueBtn")
const warn = document.getElementById("warn")
const holdArea = document.getElementById("holdArea")
const bar = document.getElementById("bar")
const photos = document.getElementById("photos")
const track = document.getElementById("track")
const game = document.getElementById("game")
const puzzle = document.getElementById("puzzle")
const final = document.getElementById("final")
const bf = document.getElementById("bf")
const butterfly = document.getElementById("butterfly")
const hold = document.getElementById("hold")
const finishBtn = document.getElementById("finishBtn")

continueBtn.addEventListener("click", showGame)

let targetVolume = 0;
let currentVolume = 0;
let isMuted = false;
let musicInitialized = false;

function fadeVolume(target, duration = 2000) {
  targetVolume = target;
  const startVolume = currentVolume;
  const startTime = performance.now();
  
  function step(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    currentVolume = startVolume + (targetVolume - startVolume) * ease;
    
    if (!isMuted) {
      song.volume = Math.max(0, Math.min(currentVolume, 1));
    }
    
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}

window.toggleMusic = function() {
  isMuted = !isMuted;
  const btn = document.getElementById("musicToggle");
  if (isMuted) {
    song.volume = 0;
    btn.innerHTML = "<span style='opacity:0.5'>♫</span>";
  } else {
    song.volume = currentVolume;
    btn.innerHTML = "♫";
  }
}

function initAudio(){

if(
musicInitialized
)
return

song.volume=
0

song.muted=
false

const start=()=>{

song.play()
.then(()=>{

musicInitialized=
true

fadeVolume(
0.04,
3000
)

document
.getElementById(
"musicToggle"
)
.style.display=
"inline-flex"

})
.catch(
console.log
)

}

start()

}

function butterflyBoost() {
  if (isMuted || currentVolume === 0) return;
  song.volume = Math.min(currentVolume + 0.02, 1);
  setTimeout(() => {
    if (!isMuted) song.volume = Math.max(0, Math.min(currentVolume, 1));
  }, 500);
}

function go(){

gate.classList.add(
"hidden"
)

verify.classList.remove(
"hidden"
)


}

function unlock(){

if(

nameInput
.value
.trim()
.toLowerCase()

==="nanya"

){

verify.classList.add(
"hidden"
)

main.classList.remove(
"hidden"
)
document.body.style.overflow=
"auto"

fadeVolume(0.12, 3000)

  

}else{

status.innerHTML=
"not convincing"

}

}

function startExperience(){

initAudio()

fadeVolume(
0.20,
3000
)

document
.querySelector(
".hero"
)
.style.opacity=
".95"

letter
.classList
.remove(
"hidden"
)

continueBtn
.style
.display=
"none"

continueBtn
.style
.visibility=
"hidden"

type()

letter
.scrollIntoView({

behavior:
"smooth"

})

}

continueBtn.addEventListener("click", showGame)
continueBtn.onclick = showGame
if (finishBtn) {
  finishBtn.addEventListener("click", finish)
  finishBtn.onclick = finish
  finishBtn.style.cursor = "pointer"
}
window.finish = finish

const txt=

`i actually had another idea before this.

for a while i thought of getting you earrings.

and i even looked at some.

picked a few too.

but then i kept thinking—

how would i even give them?

and somehow that thought stayed longer than it should have.

after that i thought maybe i should write you a letter.

an actual one.

something written by hand feels more real.

but then i remembered—

i make too many mistakes.

my handwriting isn’t that good either.

and honestly if i wrote it by hand i’d probably end up rewriting the same page ten times.

so somehow this happened instead.

a weird little website.

which probably sounds unnecessary.

but i wanted to make something instead of just sending another message.

and maybe this sounds dramatic but i think some people leave more impact than they realise.

not because of some huge moment.

not because of something extraordinary.

sometimes just because their presence quietly becomes important.

and i don’t know if you know this but yours did.

i’m not writing this expecting anything.

not trying to make anything awkward.

not trying to ask for something back.

i just wanted to make something that exists.

something you don’t have to hide.

something you don’t have to explain.

something you can keep somewhere and randomly find years later and think—

“oh yeah… someone actually made this.”

i still kept that gift though.

not because i’m waiting for something.

just because i thought maybe someday there’ll be a moment where giving it won’t feel weird.

and if not—

that’s okay too.

at least this exists.

this page probably took more time than it should have.

changed ideas.

deleted things.

rewrote lines.

started over.

because i wanted it to feel like effort.

because birthdays come every year.

but turning 21 only happens once.

so before this turns into a movie ending—

happy birthday.

welcome to 21.

i hope this year gives you more reasons to laugh.

more stories.

more confidence.

more things that make you excited to wake up.

and i hope no matter what changes—

you stay a little confused,

a little curious,

a little emotional,

and completely yourself.

thank you for existing.

and thank you for staying in my story for as long as you did.`

let i=0

function type(){

if(
i<
txt.length
){

typed.innerHTML+=
txt[i]

i++

setTimeout(
type,
24
)

}else{

continueBtn.style.display=
"block"

continueBtn.style.visibility = "visible"

}

}

function showGame(){

letter.classList.add(
"hidden"
)

game.classList.remove(
"hidden"
)

game.scrollIntoView({
  behavior: "smooth"
})

}

let c=0;
let moveInterval=null;

function escapeButton(intensity) {
  const glass = document.getElementById("gameGlass");
  clearInterval(moveInterval);
  
  const moveSpeed = intensity === 1 ? 2000 : (intensity === 2 ? 1600 : 1200);
  
  const moveFn = () => {
    const maxTx = (glass.clientWidth - warn.clientWidth) / 2 - 30;
    const maxTy = (glass.clientHeight - warn.clientHeight) / 2 - 30;
    
    let scale = intensity === 3 ? (0.9 + Math.random() * 0.2) : 1;
    let distMultiplier = 0.5 + intensity * 0.25;
    
    let tx = (Math.random() * 2 - 1) * maxTx * distMultiplier;
    let ty = (Math.random() * 2 - 1) * maxTy * distMultiplier;
    let rot = (Math.random() * 8) - 4;
    
    tx = Math.max(-maxTx, Math.min(tx, maxTx));
    ty = Math.max(-maxTy, Math.min(ty, maxTy));
    
    warn.style.transform = `translate(${tx}px, ${ty}px) rotate(${rot}deg) scale(${scale})`;
  };
  
  moveFn();
  moveInterval = setInterval(moveFn, moveSpeed);
}

warn.onclick = () => {
  c++;

  if(c === 1) {
    warn.innerHTML = "i literally said don't.";
    escapeButton(1);
  }
  if(c === 2) {
    warn.innerHTML = "okay… now you're doing this on purpose.";
    escapeButton(2);
  }
  if(c === 3) {
    warn.innerHTML = "this is exactly what i expected.";
    escapeButton(3);
  }
  if(c === 4) {
    warn.innerHTML = "i knew you're too stubborn for this.";
    clearInterval(moveInterval);
    warn.style.pointerEvents = "none";
    
    setTimeout(() => {
      warn.style.opacity = "0";
      setTimeout(() => {
        warn.style.display = "none";
        document.getElementById("gameTitle").style.opacity = "0";
        setTimeout(() => document.getElementById("gameTitle").style.display = "none", 500);
        
        const surrender = document.getElementById("surrenderText");
        surrender.style.display = "block";
        
        const showText = (txt, delay) => {
          return new Promise(resolve => {
            surrender.style.opacity = "0";
            setTimeout(() => {
              surrender.innerHTML = txt;
              surrender.style.opacity = "1";
              setTimeout(resolve, delay);
            }, 500);
          });
        };

        showText("and honestly—", 1400)
          .then(() => showText("i don't think i can win against you anyway.", 1000))
          .then(() => showText("no one can.", 1000))
          .then(() => showText("fine.<br>you win.", 1000))
          .then(() => {
             surrender.style.opacity = "0";
             setTimeout(() => {
               surrender.style.display = "none";
               document.getElementById("gameTitle").innerHTML = "hold for 5 seconds";
               document.getElementById("gameTitle").style.display = "block";
               document.getElementById("gameTitle").style.opacity = "1";
               holdArea.style.display = "flex";
               holdArea.style.opacity = "0";
               setTimeout(() => holdArea.style.opacity = "1", 50);
               holdArea.style.transition = "opacity 1s ease";
             }, 500);
          });
      }, 2500);
    }, 1000);
  }
}

let p = 0
let holdInterval = null

hold.onmousedown = () => {
  clearInterval(holdInterval)
  holdInterval = setInterval(() => {
    p += 2
    bar.style.width = p + "%"
    if (p >= 100) {
      clearInterval(holdInterval)
      const scratchSection = document.getElementById("scratch")
      scratchSection.classList.remove("hidden")
      scratchSection.scrollIntoView({ behavior: "smooth" })
      initScratch()
    }
  }, 100)
}

hold.onmouseup = hold.onmouseleave = () => {
  clearInterval(holdInterval)
  if (p < 100) {
    p = 0
    bar.style.width = "0%"
  }
}

hold.addEventListener(
"touchstart",
()=>{

hold.onmousedown()

},
{
passive:true
}
)

hold.addEventListener(
"touchend",
()=>{

hold.onmouseup()

}
)


hold.ontouchstart = (e)=>{

e.preventDefault()

clearInterval(
holdInterval
)

holdInterval=
setInterval(()=>{

p+=2

bar.style.width=
p+"%"

if(
p>=100
){

clearInterval(
holdInterval
)

const scratchSection=
document.getElementById(
"scratch"
)

scratchSection
.classList
.remove(
"hidden"
)

scratchSection
.scrollIntoView({

behavior:
"smooth"

})

initScratch()

}

},100)

}

hold.ontouchend=
hold.ontouchcancel=
()=>{

clearInterval(
holdInterval
)

if(
p<100
){

p=0

bar.style.width=
"0%"

}

}


let isScratching = false;
let scratchCompleted = false;

function initScratch() {
  setTimeout(() => {
    const scratchCanvas = document.getElementById('scratchCanvas');
    const ctx = scratchCanvas.getContext('2d');
    
    scratchCanvas.width = scratchCanvas.offsetWidth || 500;
    scratchCanvas.height = scratchCanvas.offsetHeight || 281;
    
    ctx.fillStyle = '#888888';
    ctx.fillRect(0, 0, scratchCanvas.width, scratchCanvas.height);
    
    ctx.font = '24px Inter, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('scratch to reveal', scratchCanvas.width / 2, scratchCanvas.height / 2);

    ctx.globalCompositeOperation = 'destination-out';

    function getScratchPos(e) {
      const rect = scratchCanvas.getBoundingClientRect();
      let x, y;
      if (e.touches && e.touches.length > 0) {
        x = e.touches[0].clientX - rect.left;
        y = e.touches[0].clientY - rect.top;
      } else {
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      }
      return {
        x: x * (scratchCanvas.width / rect.width),
        y: y * (scratchCanvas.height / rect.height)
      };
    }

    function scratch(e) {
      if (!isScratching || scratchCompleted) return;
      if (e.cancelable) e.preventDefault();
      
      const { x, y } = getScratchPos(e);
      
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2);
      ctx.fill();
      
      checkProgress();
    }

    function checkProgress() {
      if (scratchCompleted) return;
      const imageData = ctx.getImageData(0, 0, scratchCanvas.width, scratchCanvas.height);
      const data = imageData.data;
      let transparent = 0;
      
      for (let i = 3; i < data.length; i += 16) {
        if (data[i] === 0) transparent++;
      }
      
      const percentage = (transparent / (data.length / 16)) * 100;
      if (percentage > 15) {
        scratchCompleted = true;
        scratchCanvas.style.opacity = '0';
        setTimeout(() => {
          document.getElementById('scratchResult').style.display = 'flex';
        }, 500);
      }
    }

    scratchCanvas.addEventListener('mousedown', (e) => { isScratching = true; scratch(e); });
    scratchCanvas.addEventListener('mousemove', scratch);
    window.addEventListener('mouseup', () => { isScratching = false; });

    scratchCanvas.addEventListener('touchstart', (e) => { isScratching = true; scratch(e); }, { passive: false });
    scratchCanvas.addEventListener('touchmove', scratch, { passive: false });
    window.addEventListener('touchend', () => { isScratching = false; });
  }, 100);
}

function showPhotos() {
  document.getElementById("scratch").classList.add("hidden")
  photos.classList.remove("hidden")
  photos.scrollIntoView({ behavior: "smooth" })
}

let slide = 0;
const totalSlides = 10;
const trackElement = document.getElementById("track");
const gallerySlider = document.getElementById("gallerySlider");
const photoCounter = document.getElementById("photoCounter");

function updateCounter() {
  photoCounter.innerText = `${slide + 1} / ${totalSlides}`;
}

function nextSlide(){
  const maxSlide = trackElement.children.length - 1;
  if (slide < maxSlide) {
    slide++;
  }
  trackElement.style.transform = `translateX(-${slide*100}%)`;
  updateCounter();
}

function prevSlide(){
  slide--;
  if(slide < 0) slide = 0;
  trackElement.style.transform = `translateX(-${slide*100}%)`;
  updateCounter();
}

// Swipe logic for mobile
let touchStartX = 0;
let touchEndX = 0;

if (gallerySlider) {
  gallerySlider.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  gallerySlider.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) nextSlide();
    if (touchEndX - touchStartX > 50) prevSlide();
  }, { passive: true });
}

function choosePhoto() {
  const selectedImg = trackElement.children[slide].src;
  const photosSec = document.getElementById("photos");
  photosSec.style.transition = "opacity 0.5s ease";
  photosSec.style.opacity = "0";
  
  setTimeout(() => {
    photosSec.classList.add("hidden");
    const puzzleScreen = document.getElementById("puzzleScreen");
    puzzleScreen.classList.remove("hidden");
    puzzleScreen.style.opacity = "0";
    setTimeout(() => {
      puzzleScreen.style.transition = "opacity 0.5s ease";
      puzzleScreen.style.opacity = "1";
      puzzleScreen.scrollIntoView({ behavior: "smooth" });
      initPuzzle(selectedImg);
    }, 50);
  }, 500);
}

function initPuzzle(imgSrc) {
  const puzzle = document.getElementById("puzzle");
  puzzle.innerHTML = "";
  puzzle.style.gap = "2px";
  
  let arr = [
    0,1,2,3,
    4,5,6,7,
    8,9,10,11
  ].sort(() => Math.random() - .5);
  
  arr.forEach(v => {
    let d = document.createElement("div");
    d.className = "piece";
    d.dataset.correctPos = v;
    d.dataset.currentPos = arr.indexOf(v);
    
    d.style.backgroundImage = `url(${imgSrc})`;
    d.style.backgroundSize = "400% 300%";
    d.style.backgroundPosition = `${(v % 4) * 33.333}% ${Math.floor(v / 4) * 50}%`;
    
    puzzle.appendChild(d);
    
    d.addEventListener("click", () => {
      const selected = document.querySelector(".piece.selected");
      if (selected) {
        if (selected === d) {
          d.classList.remove("selected");
          d.style.border = "2px solid rgba(255,255,255,.1)";
        } else {
          const tempBg = d.style.backgroundPosition;
          const tempData = d.dataset.correctPos;
          
          d.style.backgroundPosition = selected.style.backgroundPosition;
          d.dataset.correctPos = selected.dataset.correctPos;
          
          selected.style.backgroundPosition = tempBg;
          selected.dataset.correctPos = tempData;
          
          selected.classList.remove("selected");
          selected.style.border = "2px solid rgba(255,255,255,.1)";
          
          checkPuzzleComplete();
        }
      } else {
        d.classList.add("selected");
        d.style.border = "3px solid pink";
      }
    });
  });
}

function checkPuzzleComplete() {
  const pieces = Array.from(document.querySelectorAll(".piece"));
  const isComplete = pieces.every((piece, index) => parseInt(piece.dataset.correctPos) === index);
  
  if (isComplete) {
    const flash = document.getElementById("puzzleFlash");
    flash.style.opacity = "1";
    
    setTimeout(() => {
      document.getElementById("puzzle").style.gap = "0px";
      pieces.forEach(p => {
        p.style.border = "none";
        p.style.pointerEvents = "none";
        // To remove gaps perfectly, transform slightly
        p.style.transform = "scale(1.01)";
      });
      flash.style.opacity = "0";
      
      setTimeout(() => {
        const msg = document.getElementById("puzzleMsg");
        const btn = document.getElementById("finishBtn");
        msg.style.display = "block";
        btn.style.display = "inline-block";
        setTimeout(() => {
          msg.style.opacity = "1";
          btn.style.opacity = "1";
        }, 50);
      }, 600);
    }, 150);
  }
}

let bx=100
let by=100

let tx=300
let ty=200

function move(){

bx+=(tx-bx)*.004

by+=(ty-by)*.004

butterfly.style.left=
bx+"px"

butterfly.style.top=
by+"px"

requestAnimationFrame(
move
)

}

move()

document.onmousemove=
e=>{

tx=
e.clientX+
300

ty=
e.clientY+
100

}

function finish(){

fadeVolume(0.14, 3000);

setTimeout(() => {
  fadeVolume(0.08, 3000);
}, 15000);

setTimeout(() => {
  fadeVolume(0, 8000);
}, 27000);

setTimeout(() => {
  song.pause();
}, 35000);

final.classList.remove("hidden")
final.style.display = "flex"
final.style.zIndex = "10000"
document.body.style.overflow = "hidden"
final.style.opacity = 0
requestAnimationFrame(() => {
  final.style.transition = "opacity .4s ease"
  final.style.opacity = 1
})

function spawnButterfly() {
  butterflyBoost();
  let b = document.createElement("div")
  b.className = "fly"
  b.innerHTML = "<div class='wing-anim'>🦋</div>"
  b.style.left = Math.random() * 100 + "vw"
  b.style.animationDuration = (6 + Math.random()*4) + "s"
  b.style.animationTimingFunction = "ease-in-out"
  bf.appendChild(b)
  
  // Clean up DOM after animation finishes
  setTimeout(() => {
    if (b.parentNode) b.parentNode.removeChild(b)
  }, 11000)
}

// Initial burst
setTimeout(() => {
  for(let i=0; i<15; i++) {
    setTimeout(spawnButterfly, Math.random() * 2000)
  }
}, 800)

// Continuous flow
let flyInterval = setInterval(() => {
  let count = Math.floor(Math.random() * 3) + 1;
  for(let i=0; i<count; i++) {
    spawnButterfly()
  }
}, 800)

// Stop spawning when credits finish
setTimeout(() => {
  clearInterval(flyInterval)
}, 36000)

}

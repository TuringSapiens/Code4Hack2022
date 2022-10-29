const p1b = document.querySelector('.p1b');
const p2b = document.querySelector('.p2b');
const resetb = document.querySelector('.reset');
const winningscoreSelect = document.querySelector('#playto');

const p1d=document.querySelector('.p1d');
const p2d=document.querySelector('.p2d');

let p1sc =0;
let p2sc =0;
let winningscore = 3;
let isgameover = false;

p1b.addEventListener('click',function(){
    if(!isgameover)
      {
        p1sc +=1;
        if(p1sc === winningscore)
           {
            isgameover = true;
            p1d.classList.add('has-text-success');
            p2d.classList.add('has-text-danger');
            p1b.disabled=true;
            p2b.disabled=true;
           }
        p1d.textContent = p1sc;
      }
})
p2b.addEventListener('click',function(){
    if(!isgameover)
      {
        p2sc +=1;
        if(p2sc === winningscore)
           {
            isgameover = true;
            p2d.classList.add('has-text-success');
            p1d.classList.add('has-text-danger');
            p1b.disabled=true;
            p2b.disabled=true;
           }
        p2d.textContent = p2sc;
      }
})

function reset(){
  p1sc=0;
  p2sc=0;
  p1d.textContent= p1sc;
  p2d.textContent= p2sc;
  p1d.classList.remove('has-text-success','has-text-danger');
  p2d.classList.remove('has-text-success','has-text-danger');
  isgameover=false;
  p1b.disabled=false;
  p2b.disabled=false;
}

resetb.addEventListener('click',reset)

winningscoreSelect.addEventListener('change',function(){
  winningscore=parseInt(this.value);
  reset();
})
document.getElementById('confirmpopup').addEventListener('click', 
function(){
    document.querySelector('.popRegister').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', 
function(){
    document.querySelector('.popRegister').style.display = 'none';
});
  
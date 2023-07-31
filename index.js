
$("button").click(function(){
    var inputValue=document.querySelector("input").value
    console.log(inputValue)
    var linkUrl1="public/success.html"
    var linkUrl2="public/error/error.html"
    var emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(inputValue)){
            window.location.href=linkUrl2 }
    else {window.location.href=linkUrl1}
    
   
})
$("button").hover(function(){
    document.querySelector("button").style.backgroundColor="hsl(4, 100%, 67%)"
})

function updateImageSource() {
    var imageElement = document.querySelector('#image');

    if (window.innerWidth <= 600) {
      imageElement.src = 'assets/images/illustration-sign-up-mobile.svg'; 
    } else{imageElement.src='assets/images/illustration-sign-up-desktop.svg';
    } 
  }


  window.addEventListener('load', updateImageSource);
  window.addEventListener('resize', updateImageSource);
$("button").hover(function(){
    $("button").css("backgroundColor","hsl(4, 100%, 67%)")
})
if (window.innerWidth <= 600){
    document.querySelector("h1").innerHTML=("Thanks for<br> subscribing!")
    document.querySelector("p").innerHTML=("A confirmation email has been sent to <br><strong>ash@loremcompany.com.</strong> Please open it and<br> click the button inside to confirm your<br> subscription.")
}
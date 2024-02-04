const Qrimg=document.getElementById("Qrimg");
const Qrtext=document.querySelector(".container input");
const Qrbutton=document.querySelector(".container button");

const clearbtn=document.getElementById("clearbtn");



function generateQr(){
 Qrimg.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
 + Qrtext.value


}
function cleartext(){
    Qrtext.value=null;
    Qrimg.src=null;
  

}

Qrbutton.addEventListener("click",()=>{
    generateQr();
})

clearbtn.addEventListener("click",()=>{
    cleartext();
})

const share=document.getElementById("shareimg","share");

share.addEventListener("click", () => {
    const title = "QR Code Share";
    const text = "Check out this QR code I generated!";
    const url = Qrimg.src;

    if (navigator.share) {
        navigator.share({
            title: title,
            text: text,
            url: url,
        }).then(() => {
            console.log("Thanks for sharing!");
        }).catch(console.error);
    } else {
        alert("The current browser does not support this feature.");
    }
});

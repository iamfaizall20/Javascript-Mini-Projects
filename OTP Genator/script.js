const ShowOTP = document.querySelector('.ShowOTP');


function generateOTP() {

    let OTP = "", Num;

    for (let i = 0; i < 5; i++) {
        Num = Math.floor(Math.random() * 10);
        OTP += Num;
    }

    ShowOTP.textContent = OTP;
}



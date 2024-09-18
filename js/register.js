const url = "https://66e8036bb17821a9d9daf500.mockapi.io/users";

let uName           = document.getElementById('name');
let chechNameDiv    = document.getElementById('checkUserRegName');
let pragName        = document.getElementById('paragName');



let uUsername       = document.getElementById('username');
let checkUserDiv    = document.getElementById('checkUserRegUser');
let pragUsername    = document.getElementById('paragUsername');



let uEmail          = document.getElementById('email');
let checkEmailDiv   = document.getElementById('checEmailReg');
let pragEmailName   = document.getElementById('paragEmail');



let uPass           = document.getElementById('password');
let checkPassDiv    = document.getElementById('checkPassReg');
let pragPass        = document.getElementById('paragPass');


let registerDiv     = document.getElementById('right');
let registerPrag    = document.getElementById('pragRight');




let uResBtn = document.getElementById('regBtn');

// ------------------------------------------------------------------------------------------------------------------------------------------- //

uResBtn.addEventListener("click", () => {

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data)

        data.find(element => {

            if(uUsername.value != null  && element.username == uUsername.value && uUsername === null) {
                checkUserDiv.style.display      = "block";
                pragUsername.textContent        = "Username Is Exist"; 
            } else {
                if(uEmail.value != null  && element.email == uEmail.value && uEmail === null) {
                    checkEmailDiv.style.display     = "block";
                    pragEmailName.textContent       = "Email Is Exist"; 
                } else {
                    if(uName !== null && uUsername !== null && uEmail !== null && uPass !== null) {
                        fetch(url, {
                            method: 'POST',
                            body: JSON.stringify({
                                name: uName.value,
                                username: uUsername.value,
                                email: uEmail.value,
                                password: uPass.value
                            }),
                            headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                            },
                        })
                        .then((response) => response.json())
                        .then((json) => {
                            registerDiv.style.display   = "block";
                            registerPrag.textContent    = "You Have Been Registered";

                            setTimeout(() => {
                                window.location.href = "login.html";
                            }, 3000)
                        });
                    };
                };
            };
        });
    });

});

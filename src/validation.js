// validateNIC=(nic) =>{
//     var nic = document.getElementById('nic');
//     var msg = document.getElementById('msg');

//     if (nic.value.length !== 12 && nic.value.length !==10) {
//         msg.innerHTML = "N.I.C. must be 10 or 12 characters";
//         msg.style.color = "#F10707";
//     } else {
//         msg.innerHTML = "N.I.C. length is valid";
//         msg.style.color = "#350D7C";
//     }
// }
/*NIC validation*/

function validateNIC() {
    var nic = document.getElementById('nic');
    var msg = document.getElementById('msg');

    if (nic.value.length !== 12 && nic.value.length !== 10) {
        msg.innerHTML = "N.I.C. must be 10 or 12 characters";
        msg.style.color = "#F10707";
    } else {
        msg.innerHTML = "N.I.C. length is valid";
        msg.style.color = "#350D7C";
    }
}
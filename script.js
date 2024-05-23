// function turn(time) {
//     return time*6
// }

function start() {
    const date=new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    document.querySelector(".second").style.transform=`rotate(${second*6}deg)`
    document.querySelector(".minute").style.transform=`rotate(${minute*6}deg)`
    document.querySelector(".hour").style.transform=`rotate(${hour*30}deg)`
    setTimeout(start, 1000);
}


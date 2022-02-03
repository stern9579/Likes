var count = 0;
var count2 = 0;
var count3 = 0;

function addCount() {
    count += 1;
    document.querySelector(".likes1").innerHTML = count + " like(s)";
    return count
}

function subtractCount() {
    count -= 1;
    document.querySelector(".likes1").innerHTML = count + " like(s)";
    return count
}

function addCount2() {
    count2 += 1;
    document.querySelector(".likes2").innerHTML = count2 + " like(s)";
    return count2
}

function subtractCount2() {
    count2 -= 1;
    document.querySelector(".likes2").innerHTML = count2 + " like(s)";
    return count2
}

function addCount3() {
    count3 += 1;
    document.querySelector(".likes3").innerHTML = count3 + " like(s)";
    return count3
}

function subtractCount3() {
    count3 -= 1;
    document.querySelector(".likes3").innerHTML = count3 + " like(s)";
    return count3
}
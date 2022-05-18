const getResult = () => {
    let firstexam = document.getElementById('firstexam').value;
    let secondexam = document.getElementById('secondexam').value;
    let project = document.getElementById('project').value;
    let finalexam = document.getElementById('finalexam').value;

    if(document.getElementsByTagName('input').value==""){
        alert("Please Enter Some Value");
    }
    let total = parseFloat(firstexam)*15/100 + parseFloat(secondexam)*15/100 + parseFloat(project)*20/100 + finalexam*50/100;
    let percentage = total

    if (project<50){
        document.getElementById("grade").innerHTML = "FF&#128561UYGULAMA NOTUNUZ EN AZ 50 OLMALI!"
    }
    else if(finalexam ===''){
        document.getElementById('grade').innerHTML = `Geçmek için final/büt notunuz en az ${(59.5-percentage)*2} olmalı!`
    }
    else if (percentage >= 90) {
        document.getElementById("grade").innerHTML = "AA";
    }
    else if (percentage >= 85) {
        document.getElementById("grade").innerHTML = "BA";

    }
    else if (percentage >= 75) {
        document.getElementById("grade").innerHTML = "BB";

    }
    else if (percentage >= 65) {
        document.getElementById("grade").innerHTML = "CB";

    }
    else if (percentage >= 59.5) {
        document.getElementById("grade").innerHTML = "CC";

    }
    
    else {
        document.getElementById("grade").innerHTML = "FF";

    }


    document.getElementById('percentage').innerHTML = percentage;
    document.getElementById('total').innerHTML = total;
}
var students=[];
function sub(){
    var ss1=document.getElementById("s1").value;
    var ss2=document.getElementById("s2").value;
    var ss3=document.getElementById("s3").value;
    var ss4=document.getElementById("s4").value;
   students.push(ss1);
   students.push(ss2);
   students.push(ss3);
   students.push(ss4);
   console.log(students);
   document.getElementById("ans").innerHTML=students;
   document.getElementById("submit").style.display="none";
   document.getElementById("sort").style.display="inline-block";
}
function sort() {
    students.sort();
    console.log(students);
   document.getElementById("ans").innerHTML=students;

}
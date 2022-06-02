shownotes();
var deletebtn=document.getElementById("delete");
var btn=document.getElementById('btn');
//var reset=document.getElementByclass('reset');
if(localStorage.getItem("localtitlarr")==null){
 var titlArr=[]
var discArr=[]
}
else{
   var titlArr=JSON.parse( localStorage.getItem("localtitlarr"))
  var  discArr=JSON.parse( localStorage.getItem("localdiscarr"))
}
btn.addEventListener('click',function submit(e){
e.preventDefault();
console.log("submit is running");
//btn.addEventListener('click',function reset(e) )
var title=document.getElementById('titl').value;
titlArr.push(title);
var disc=document.getElementById('disc').value;
discArr.push(disc);
if(title===""||disc==="" ){
    alert("please fill all field");
}

 else {
localStorage.setItem("localtitlarr",JSON.stringify(titlArr));

localStorage.setItem("localdiscarr",JSON.stringify(discArr));
document.getElementById('titl').value="";
document.getElementById('disc').value="";
}
shownotes();
}
);
function shownotes(){
    var localTitleArr =JSON.parse(localStorage.getItem("localtitlarr"));
    var localDescArr =JSON.parse(localStorage.getItem("localdiscarr"));
    var noteEle = '';
    for (var i = 0; i < localTitleArr.length; i++) {
        noteEle += `<div class="noteDiv">
        <div class="titleDiv">
        <h3>${localTitleArr[i]}</h3>
        <p>${localDescArr[i]}</p>
        <button id=${i} onclick={deleteOne(this.id)}>Delete</button>
        </div>
        </div>`}
        var secDiv=document.getElementById('secDiv');
        secDiv.innerHTML=noteEle;

    }

    function deleteOne(id){
    localTitleArr= JSON.parse( localStorage.getItem('localtitlarr')).splice(id,1);
   localDescArr=   JSON.parse(localStorage.getItem('localdiscarr')).splice(id,1);
      shownotes(); 
    }



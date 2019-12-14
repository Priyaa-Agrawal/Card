card = []
n = 0;
function take(){
  
card = []
    for(i=0;i<=n;i++){
      
        var title = document.getElementById('t'+i).value;
        var desc = document.getElementById('d'+i).value;
        var img = document.getElementById('i'+i).value;
        var priority = document.getElementById('p'+i).value;
        // var uid = document.getElementById('uid'+i).value;
        card.push({
          title : title,
          desc : desc,
          img : img,
          priority : priority,
          
    })
    card.sort(function(a,b){
      return a.priority-b.priority
    })
     console.log(card)
    localStorage.setItem("card", JSON.stringify(card));
}  
}

function  add(){
    take()
    n++;   
    document.getElementById('new').innerHTML += ` <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-default">Title</span>
    </div> 
    <input type="text" class="form-control" id="t${n}" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
  </div>
  
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-default">Detail</span>
    </div>
    <input type="text" class="form-control" id="d${n}" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
  </div>

  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-default">image</span>
    </div>
    <input type="text" class="form-control" id="i${n}" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
  </div>

  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-default">priority</span>
    </div>
    <input type="number" class="form-control" id="p${n}" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>

</div>

  `
    
    card.map((v,i)=>{
      document.getElementById(`t${i}`).value = v.title;
      document.getElementById(`d${i}`).value = v.desc;
      document.getElementById(`i${i}`).value = v.img;
      document.getElementById(`p${i}`).value = v.priority;

    })

}



function display(){
  
  card = JSON.parse(localStorage.getItem("card") || "[]");
  console.log(card)   
    str =''
    card.map(c=>{
        str += `
        <h1 class="my-4" >${c.title}
    </h1>
    <div class="row">
      <div class="col-md-7">
        <a href="#">
          <img class="img-fluid rounded mb-3 mb-md-0" src="${c.img}" alt="${c.title}">
        </a>
      </div>
      <div class="col-md-5">
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
      </div>
    </div>
    <hr>

        ` 
        document.getElementById('show').innerHTML = str; 
    })
}


// function get(){
//   var data = document.getElementById('show');
//   console.log(data);
//   alert(typeof(data))
//   document.getElementById('card_detail').innerHTML = JSON.stringify(data);
//   // document.getElementById('card_detail').innerHTML = string(data);
// }


// function showid(userid){
//   document.getElementById('user_id').innerHTML = "User ID:" + userid;
// }
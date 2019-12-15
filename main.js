card = []
n = 0;
function take(){
  
card = []
    for(i=0;i<=n;i++){
        var title = document.getElementById('t'+i).value;
        var desc = document.getElementById('d'+i).value;
        desc = desc.replace(/\n/, '<br />');
        var img = document.getElementById('i'+i).value;
        var priority = document.getElementById('p'+i).value;
        var cid = document.getElementById('cid'+i).value;
        card.push({
          title : title,
          desc : desc,
          img : img,
          priority : priority,
          cid : cid
          
    })
    //  console.log(card)
    localStorage.setItem("card", JSON.stringify(card));
}  
}

function  add(){
     take()
     n++; 
    document.getElementById('new').innerHTML += ` <div id="delete${n}">
    <h4>New Card</h4>
  <div class="input-group mb-3" >
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-default">Title</span>
    </div> 
    <input type="text" class="form-control" id="t${n}" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
  </div>
  
  <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Detail</span>
        </div>
        <textarea class="form-control" id="d${n}" aria-label="With textarea"></textarea>
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

    <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-default">Card ID</span>
    </div>
    <input type="text" class="form-control" id="cid${n}" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
  </div>
  <button type="button" class="btn btn-danger" onclick="remove('${n}')">Remove</button>
  </div>
  <hr>
</div>


  `
    
    card.map((v,i)=>{
      document.getElementById(`t${i}`).value = v.title;
      document.getElementById(`d${i}`).value = v.desc;
      document.getElementById(`i${i}`).value = v.img;
      document.getElementById(`p${i}`).value = v.priority;
      document.getElementById(`cid${i}`).value = v.cid;    


    })
}



function display(){
  // take();
  card = JSON.parse(localStorage.getItem("card") || "[]");
  card.sort(function(a,b){
    return a.priority-b.priority
  })
      str =''
      card.map((c,j)=>{
        if(c.title!=0){
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
          <button type="button" class="btn btn-primary" onclick="showid('${c.cid}','${j}');">Read More</button>
          <div id="cardid${j}"></div>
        </div>
      </div>
      <hr>
  
          ` 
          document.getElementById('show').innerHTML = str; 
        }
        else{
          alert('Title daal Lavre!! ')
        }
      })
}

function showid(cid,j){
  document.getElementById(`cardid${j}`).innerHTML = "Card ID:" + cid;
}


function remove(i){
  // if(n!=0 ){
    var d = document.getElementById(`delete${i}`);
    d.remove();
    n--;
  // }
  
}
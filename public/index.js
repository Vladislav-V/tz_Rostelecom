const d = document;
const STATE = {
  countForLoadImage: 0,
}
function loadImages() {
      var xhr = new XMLHttpRequest();

      xhr.open('GET', 'images.json', false);
      xhr.send();
      var creatJson = JSON.parse(xhr.responseText);
      if (xhr.status != 200) {
        // обработать ошибку
        alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
      } else {
        // вывести результат
        console.log(creatJson);
        return creatJson;
      }
  }

  function createBtn(){
    var delBtn = document.createElement('button');
    delBtn.className = 'btnDeleteItem';
    delBtn.onclick = deleteItem;
    delBtn.innerHTML = 'Delete';
    return delBtn;
  }

function insertImg(){
  addItem();
  if(STATE.countForLoadImage > 20) return;
  var body = d.getElementById('app');
  var imgAll = loadImages();
  var result = [];
  console.log(d.createElement(`img`))


  if(STATE.countForLoadImage < 21)    for(var i = STATE.countForLoadImage; i < STATE.countForLoadImage+4; i++){
          if(i > 20) break;
        var divForImg = document.createElement('div'); // контейнер для одной картинки
        var text = document.createElement('h1'); // текст
        var text2 = document.createElement('h2'); // текст2
        text.innerHTML = 'AGE';
        text2.innerHTML = 'TEXT';
        divForImg.className = 'container-img';
        divForImg.setAttribute('data-divid', i);
        var delBtn = createBtn();
        var img = createMyImg(i);
        if(!img) break;
        divForImg.appendChild(img);
        divForImg.appendChild(delBtn);
        divForImg.appendChild(text);
        divForImg.appendChild(text2);
        document.getElementById(`${STATE.countForLoadImage}`).appendChild(divForImg);

    }
STATE.countForLoadImage < 20 ? STATE.countForLoadImage += 4 : STATE.countForLoadImage = 21;

  console.log(STATE.countForLoadImage)
}

function createMyImg(i){
  if(i > 20 && !i) return false;
  var imgAll = loadImages();
  var img = new Image();
  img.src = imgAll[0][i]['url'];
  img.alt = imgAll[0][i]['title'];
  img.setAttribute('data-id', i);
  return img;
}

function deleteItem(e){ // удаление элемента
  //removeChild(elem)
  var del = e.target.closest('.container-img');
e.target.closest('.container-img').parentNode.removeChild(del);
//del.style.display = 'none';

}
//
function addItem(){
  if(STATE.countForLoadImage > 20) return;
  var elem = document.getElementById('app');
  var divChild = document.createElement('div'); // контейнер для стоки картинок
  divChild.id = STATE.countForLoadImage;
  divChild.className = 'countForLoadImage';
  elem.children[0] ? elem.insertBefore(divChild, elem.children[0]) : elem.appendChild(divChild);
  var arrJSON = loadImages();
  var arr = [];
  var finder =[];
  var arrImg = [];
  var test = d.querySelectorAll('.container-img');
    test.forEach((i, item) => {
      arrImg.push(i.getElementsByTagName('img')[0].getAttribute('data-id'));
    });
  for (key in arrJSON[0]){
    arr.push(key);
  }
  for(var i = 0; i < STATE.countForLoadImage; i++){
    if(arrImg.indexOf(arr[i]) === -1) finder.push(arr[i]); // формируем массив из удаленных элементов

  }
  if(finder.length){  // если в массиве что-то есть то вставляем
    for(var i = 0; i < finder.length; i++){
      var insertItem = d.querySelectorAll('.countForLoadImage');
      insertItem.forEach((item)=>{
        if(item.childNodes.length < 4){
            var divForImg = document.createElement('div'); // контейнер для одной картинки
            divForImg.className = 'container-img';
            divForImg.setAttribute('data-divid', +finder[i]);
            var img = createMyImg(+finder[i])
            var btn = createBtn();
            divForImg.appendChild(img);
            divForImg.appendChild(btn);
            item.appendChild(divForImg);

        };
      })
    }

  }
  finder =[];
  arrImg = [];

//   var arr = [];
//   var testArr =[];
//   var arrImgJSON = loadImages();
//   var re = arrImgJSON[0]
//   var test = d.querySelectorAll('.container-img');
//   test.forEach((i, item) => {
//     arr.push(i.getElementsByTagName('img')[0].getAttribute('data-id'));
//   });
//
//     for(key in re){
//       if(!arr.indexOf(key)) testArr.push(key);
//       if(key == STATE.countForLoadImage) break;
//     }
//
// console.log('TEST ARR =', testArr);
}

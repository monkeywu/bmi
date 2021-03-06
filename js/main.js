var send = document.querySelector('.send');
var loop = document.querySelector('.icon-loop');
var list = document.querySelector('.list');
var dt = new Date();
var date = dt.getDate();
var month = dt.getMonth()+1;
var year = dt.getFullYear();

var data = JSON.parse(localStorage.getItem('listData')) || [];
function BMI() {
    // 取得身高值
    var h = document.querySelector('.height').value;
    // 取得體重值
    var w = document.querySelector('.weight').value;
    // 計算 BMI
    if(h == '' || w == ''){
        alert('欄位不可空白！');
    } else if(h <0 || w <0){
        alert('數值不可為負數！');
    } else {
        //將結果輸出至content
        var bmi = w / ((h * h)/10000);
        bmi = bmi.toFixed(2);
        var content = '';
        var addli = function(a,b,c,d){
            send.value = bmi+'BMI';
            loop.style.opacity = '1';
            send.style.backgroundColor = '#424242';
            content = a;
            send.style.color = b;
            send.style.border = c;
            loop.style.backgroundColor = d;
        }
        if(bmi<=18){
             addli('<li class="light"><span>過輕</span><p>BMI</p>'+bmi+'<p class="fw">weight</p>'+w+'KG'+'<p class="fw">height</p>'+h+'CM'+'<p class="fw">'+month+'-'+date+'-'+year+'</p></li>','#31BAF9','5px solid #31BAF9','#31BAF9');
        } else if(bmi<=25) {
             addli('<li class="good"><span>理想</span><p>BMI</p>'+bmi+'<p class="fw">weight</p>'+w+'KG'+'<p class="fw">height</p>'+h+'CM'+'<p class="fw">'+month+'-'+date+'-'+year+'</p></li>','#86D73E','5px solid #86D73E','#86D73E');
        } else if(bmi<=30) {
             addli('<li class="heavy"><span>過重</span><p>BMI</p>'+bmi+'<p class="fw">weight</p>'+w+'KG'+'<p class="fw">height</p>'+h+'CM'+'<p class="fw">'+month+'-'+date+'-'+year+'</p></li>','#FF982D','5px solid #FF982D','#FF982D');
        } else if(bmi<=40){
             addli('<li class="m-heavy"><span>中度肥胖</span><p>BMI</p>'+bmi+'<p class="fw">weight</p>'+w+'KG'+'<p class="fw">height</p>'+h+'CM'+'<p class="fw">'+month+'-'+date+'-'+year+'</p></li>','#FF6C02','5px solid #FF6C02','#FF6C02');
        } else {
             addli('<li class="s-heavy"><span>重度肥胖</span><p>BMI</p>'+bmi+'<p class="fw">weight</p>'+w+'KG'+'<p class="fw">height</p>'+h+'CM'+'<p class="fw">'+month+'-'+date+'-'+year+'</p></li>','#FF1200','5px solid #FF1200','#FF1200');
        }
    }   
        list.innerHTML += content;
        var todo = {content};
        data.push(todo);
        localStorage.setItem('listData', JSON.stringify(data));
}
    send.addEventListener('click', BMI, false)

    function update(item){
        var len = item.length;
        for (i=0;len>i;i++){
            list.innerHTML += data[i].content;
            localStorage.setItem('listData', JSON.stringify(data));
            }
    }
    if(data !== [] ){
        update(data);
    }
        
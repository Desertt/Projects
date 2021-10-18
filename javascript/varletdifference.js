/* Bu örnekte var değişkeni kullanılmadığı için fonksiyonun dışındada kullanılabilen bir foo değişkeni görüyoruz.
function sayHello(){
foo='World';

}

sayHello();
console.log(`Hello  ${foo}`);
*/ 
/***********************//*****************************//***********************//*****************************//***********************//*****************************//***********************//*****************************/

/*
Ama biz geliştiricilerin her zaman istediğimiz şey tanımladığımız değişkenlerin tanımladığımız kapsam(scope) içerisinde yaşasın, görülsün ve erişebilsin şeklindedir. Bunun haricindeki erişimler kod miktarı büyüdükçe kontrol edilemez hale gelip o değişkenin nerden değiştirildiği bilinemez hale gelir.
Bir diğer önemli kuralda üst kapsam(scope) tanımlanan bir değişkene alt kapsamdakiler erişebilir ve kullanabilirler. Bu zaten istenen bir durumdur.
*/ 

/*
var foo ='World';

function sayHello(){

    console.log(`Hello ${foo}`);
   
    for(var i=0;i<2;i++){
     
    console.log(`Again ${foo}`)    

    }

}

sayHello();

*/

/***********************//*****************************//***********************//*****************************//***********************//*****************************//***********************//*****************************/
/*İç scope değişkenin dışarıdan erişilememesidir.
Geldiğimiz noktada function scope bize yetiyordu.
 Sadece for/while, if/switch gibi scope tanımlamalarında kullanılıyor ve fonksiyonlar daha basitti. 
 Fakat async/promise, arrow function, callback ile iç içe block şeklindeki kod yazma ihtiyacımız arttıkça
  fonksiyon içerisindeki var bize yetmemeye başladı.

*/ 
function sayHello(){
    {
        {
        let foo='World';
        console.log(`Hello ${foo}` );
    }
    console.log(`Hello ${foo}` );
}
console.log(`Hello ${foo}` );

}

sayHello();


let dayNames =['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
//Haftanın günlerini bir dizi aracılığıyla numerik değerlere dönüştürelim.Bir Array içerisinde dayNames içerisinde tanımlıyoruz. 

function  dayOfX(dayName,X) {  //x->kaç gün sonrası  

const index= dayNames.findIndex((el)=>el == dayName); 

const newIndex=(index+X) % 7; //Bu gün indeksine + X ekleyip bunun 7 göre modunu almamız gerekiyor

return dayNames[newIndex];

}

console.log('Day Of X Wed',dayOfX('Wed',2));
console.log('Day Of X Sat',dayOfX('Sat',5));


//Algorithm 

/*
Sorumuz şu şekilde haftanın belli bir günündesiniz Örneğin Çarşamba, Cumartesi vb… istiyorsunuz ki 15 gün sonra hangi gün olacağını hesaplayabilelim.

*Haftanın günlerini bir dizi aracılığıyla numerik değerlere dönüştürelim.

*Burada yapmamız gereken dayName haftanın kaçıncı günü olduğunu bulmamız. Bu gün indeksine + X ekleyip bunun 7 göre modunu almamız gerekiyor
Son olarak da matematik formülüne dönüştürdüğümüz bu indeksi tekrar istediğimiz güne dönüştürüp geriye dönüyoruz.

*/ 


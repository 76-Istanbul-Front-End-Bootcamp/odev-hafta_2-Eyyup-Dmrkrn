/*
  Odev 1:
  Asagidaki fonksiyonu "Hello, John ciktisi verecek sekilde duzenleyiniz."
 */

// Problem: Fonksiyon bir değişkene atılıp sonra solunda bir yeri göstermeden çağırıldığından "this" execution context fazında window'a eşitlenecek ve undifend dönecektir.

// Çözüm 1: this'in window'u gösterdiğini bildiğimizden şu şekilde düzeltebiliriz kodu;

                            
window.name = "John";
var person = {
  name: "John",
  message: function () {    
    console.log("Hello, " + this.name)
  }
}

var messageFunc = person.message  
messageFunc();                    // Fonksiyonun çağırılmasında değişiklik yok.
   

// Çözüm 2: Fonksiyonu değişkene atamadan çağırmak.

var person = {                     

  name: "John",
  message: function () {    
    console.log("Hello, " + this.name)
  }
}

person.message();  


// Çözüm 3: this'i Expilict(bind) bir şekilde tanımlamak.

var person = {                     
  name: "John",
  message: function () {    
    console.log("Hello, " + this.name)
  }
}

var messageFunc = person.message.bind(person) 
messageFunc();  


/*  
  Odev 2:
  Asagidaki fonksiyonu sirasiyla 
  20
  40
  60
  sonuclarini yazdiracak sekilde duzenleyiniz.
*/

// Problem: İç içe iki fonksiyon var. İçteki fonksiyonun "this"i windowu gösterdiğinden NaN sonucu ekrana basılıyor. 

// Çözüm 1: içteki fonksiyonunu Bind operatörüyle, Explicit bir şekilde "this"ni belirtebilriz.
var numbers = {
  numbers: [[10,20,30], 2],
  multiply: function(){
    this.numbers[0].map(
      function(number, numberIndex){
        const result = number * this.numbers[1];
        console.log(result)       
    }.bind(this))           // .bind(numbers) da yazılabilir.
  }
};

numbers.multiply();

// Çözüm 2: İçteki fonksiyon arrow functiona çevirildiğinde, parent'nın this'i yani, numbers'a bakacağından yine istediğimiz sonucu elde ederiz.

var numbers = {
  numbers: [[10,20,30], 2],
  multiply: function(){
    this.numbers[0].map(
      (number, numberIndex)=>{
        const result = number * this.numbers[1];
        console.log(result)       
    })         
  }
};

numbers.multiply();



/* 
  Odev 3:
  Asagidaki isValidName fonksiyonunda bir isim validasyonu yaziniz.
  Ipucu: Verilen arguman gecerli bir isim ise true degilse false donmeli
  Ornek : isValidName("John") true donmeli
  Ornek : isValidName(" J ohn") false donmeli
*/

//  Fonksiyonu, bizden istenen kısıtlımalara göre trim, split ve indexOf ile şu şekilde yazabiliriz.

function IsValidName(name){

  let trimmedName = name.trim();
  if(typeof name !== "string" || trimmedName.indexOf(" ") > -1){ // indexOf, name içerisinde " " ifadesi arayacaktır. Çıkması halinde de false dönecektir.  
    console.log("Bu bir isim değildir.");
    return false;
  }
  else{
  let splittedName = trimmedName.split(" ");
  console.log("Bu bir isimdir", splittedName);
  return true;
  }
}

IsValidName("John ");  // true
IsValidName(" J ohn"); // false



  /* Odev 4:
  Asagidaki katilimSaati fonksionu 2 arguman almaktadir.
  dersSayisi: ogrencinin katildigi ders sayisi
  dersSaati: her bir dersin dakika cinsinden suresi
  katilimSaati fonkisyonu kac derse gerilidigi ve her bir dersin kac dakika surdugu bilgisini alip sonuc olarak toplamda kac dakika derse girildigini donmelidir.
  - iki arguman de number veya string olarak verilebilir.
  - Sayi olmayan ya da sayiya cevrilemeyen argumanlar var ise hata donulmelidir.
  Ornek: katilimSaati(3, 30) 90 sonucunu vermelidir.
  Ornek: katilimSaati("3", 20) 60 sonucunu vermelidir.
  Ornek: katilimSaati("5", "30") 150 sonucunu vermelidir.
*/


// Hocam, bu soruda bugünkü dersten sonra kendi yaptığım yöntemi yetersiz bulunca sizin örneğiniz üzerinde ufak değişiklik yaparak yazdım. Umarım yanlış olmamıştır.

function katilimSaati(dersSayisi, dersSuresi){

  var result;
  if(dersSayisi && dersSuresi){
    var IsDersSayisiValid = typeof (dersSayisi === "string" || dersSayisi === "number");
    var IsDersSuresiValid = typeof (dersSuresi === "string" || dersSuresi === "number");
     if(IsDersSayisiValid && IsDersSuresiValid){
        var booleanDersSayisi = Boolean(dersSayisi>0);
        var booleanDersSuresi = Boolean(dersSuresi>0);
        if(booleanDersSayisi && booleanDersSuresi){
          result = dersSayisi * dersSuresi;
        }else{
        console.log("Negatif bir sayı girmeyiniz.");
      }
      }else{
      console.log("Her iki parametre de sayı ya da string olmalı");
    }
   }else{
    result = "En az iki parametre girmelisiniz";
  }
console.log(result);
}


katilimSaati(3, 30)        // 90 
katilimSaati("3", 20)     // 60
katilimSaati("5", "30")  // 150
katilimSaati(-2,-4)     // Negatif sayı girme.


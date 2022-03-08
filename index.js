function words(){
  var kalimat = "Saya ingin belajar bersama";
  var kalimat1 = kalimat.split(" ");
  kalimat1.forEach(function (a, b){
    console.log("Item : "+a+" Index ke "+b);
  });

}

words();

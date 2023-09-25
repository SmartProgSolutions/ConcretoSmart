function calcularDosagem() {
  // Obter o volume inserido pelo usuário
  var volume = parseFloat(document.getElementById("volume").value);

  // Obter os valores dos inputs do usuário
  var cimento = parseFloat(document.getElementById("cimento").value);
  var areia = parseFloat(document.getElementById("areia").value);
  var brita = parseFloat(document.getElementById("brita").value);

  //Método FCJ
  if (cimento === 1 && areia === 1 && brita === 2 ) {
      // Calcular a dosagem FCJ 1 : 1 : 2 : 40 MPa
      var cimento = volume * 515;

      var areia = volume * 790.50;
      var brita = volume * 1016.40;
      var agua = volume * 226;
  } else if (cimento === 1 && areia === 1.5 && brita === 3) {
      // Calcular a dosagem FCJ 1 : 1.5 : 3 : 35 MPa
      var cimento = volume * 385;
      var areia = volume * 890.80;
      var brita = volume * 1145.20;
      var agua = volume * 189;
  } else if (cimento === 1 && areia === 2 && brita === 3) {
      // Calcular a dosagem FCJ 1 : 2 : 3 : 25 MPa
      var cimento = volume * 345;
      var areia = volume * 1057.40;
      var brita = volume * 1019.20;
      var agua = volume * 210;
  }else if (cimento === 1 && areia === 2.5 && brita === 4) {
    // Calcular a dosagem FCJ 1 : 2.5 : 4 : 18 MPa
    var cimento = volume * 275;
    var areia = volume * 1059.10;
    var brita = volume * 1092.00;
    var agua = volume * 201;
  }else if (cimento === 1 && areia === 3 && brita === 5) {
    // Calcular a dosagem FCJ 1 : 3 : 5 : 12 MPa
    var cimento = volume * 230;
    var areia = volume * 1057.40;
    var brita = volume * 1134;
    var agua = volume * 202;
  }else if (cimento === 1 && areia === 3 && brita === 6) {
    // Calcular a dosagem FCJ 1 : 3 : 6 : 10 MPa
    var cimento = volume * 210;
    var areia = volume * 958.80;
    var brita = volume * 1234.80;
    var agua = volume * 198;
  }

  //Método FCK
  else if (cimento === 1 && areia === 1 && brita === 2 ) {
    // Calcular a dosagem FCJ 1 : 1 : 2 : 40 MPa
    var cimento = volume * 515;
    var areia = volume * 790.50;
    var brita = volume * 1016.40;
    var agua = volume * 226;
  } else if (cimento === 1 && areia === 1.5 && brita === 3) {
      // Calcular a dosagem FCJ 1 : 1.5 : 3 : 35 MPa
      var cimento = volume * 385;
      var areia = volume * 890.80;
      var brita = volume * 1145.20;
      var agua = volume * 189;
  } else if (cimento === 1 && areia === 2 && brita === 3) {
      // Calcular a dosagem FCJ 1 : 2 : 3 : 25 MPa
      var cimento = volume * 345;
      var areia = volume * 1057.40;
      var brita = volume * 1019.20;
      var agua = volume * 210;
  }else if (cimento === 1 && areia === 2.5 && brita === 4) {
    // Calcular a dosagem FCJ 1 : 2.5 : 4 : 18 MPa
    var cimento = volume * 275;
    var areia = volume * 1059.10;
    var brita = volume * 1092.00;
    var agua = volume * 201;
  }else if (cimento === 1 && areia === 3 && brita === 5) {
    // Calcular a dosagem FCJ 1 : 3 : 5 : 12 MPa
    var cimento = volume * 230;
    var areia = volume * 1057.40;
    var brita = volume * 1134;
    var agua = volume * 202;
  }else if (cimento === 1 && areia === 3 && brita === 6) {
    // Calcular a dosagem FCJ 1 : 3 : 6 : 10 MPa
    var cimento = volume * 210;
    var areia = volume * 958.80;
    var brita = volume * 1234.80;
    var agua = volume * 198;
  }



  let cimentom3 = cimento / 1199.44;
  let areiam3 = areia / 1699.58;
  let britam3= brita / 1399.58;
/* Calcular a dosagem FCJ 1 : 1 : 2 : 40 MPa
  var cimento = volume * 515;
  var areia = volume * 790.50;
  var brita = volume * 1016.40;
  var agua = volume * 226;*/

  // Exibir os resultados
  document.getElementById("resultado-cimento").innerHTML = cimento.toFixed(2);
  document.getElementById("resultado-cimentom3").innerHTML = cimentom3.toFixed(3);

  document.getElementById("resultado-areia").innerHTML = areia.toFixed(2);
  document.getElementById("resultado-areiam3").innerHTML = areiam3.toFixed(3);

  document.getElementById("resultado-brita").innerHTML = brita.toFixed(2);
  document.getElementById("resultado-britam3").innerHTML = britam3.toFixed(3);

  document.getElementById("resultado-agua").innerHTML = agua.toFixed(2);
}

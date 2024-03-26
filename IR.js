function calcularImpostoDeRenda(rendaMensal, quantidadeDependentes) {
    // Cálculo do desconto do INSS
    var aliquotaINSS;
    var deducaoINSS;
  
    if (rendaMensal <= 1320) {
      aliquotaINSS = 0.075;
      deducaoINSS = rendaMensal * aliquotaINSS;
    } else if (rendaMensal <= 2571.29) {
      aliquotaINSS = 0.09;
      deducaoINSS = rendaMensal * aliquotaINSS;
    } else if (rendaMensal <= 3856.94) {
      aliquotaINSS = 0.12;
      deducaoINSS = rendaMensal * aliquotaINSS;
    } else {
      aliquotaINSS = 0.14;
      deducaoINSS = rendaMensal * aliquotaINSS;
    }
  
    // Cálculo da renda base para o Imposto de Renda
    var rendaBaseIR = rendaMensal - deducaoINSS - (quantidadeDependentes * 189.59);
  
    // Cálculo do desconto do IR
    var aliquotaIR;
    var deducaoIR;
  
    if (rendaBaseIR <= 2112) {
      aliquotaIR = 0;
      deducaoIR = 0;
    } else if (rendaBaseIR <= 2826.65) {
      aliquotaIR = 0.075;
      deducaoIR = 158.4;
    } else if (rendaBaseIR <= 3751.05) {
      aliquotaIR = 0.15;
      deducaoIR = 370.4;
    } else if (rendaBaseIR <= 4664.68) {
      aliquotaIR = 0.225;
      deducaoIR = 651.73;
    } else {
      aliquotaIR = 0.275;
      deducaoIR = 884.96;
    }
  
    // Cálculo do desconto do IR
    var descontoIR = (rendaBaseIR * aliquotaIR) - deducaoIR;
  
    // Cálculo da renda final
    var rendaFinal = rendaMensal - deducaoINSS - descontoIR;
  
    // Impressão dos resultados
    console.log("Renda Bruta: R$", rendaMensal.toFixed(2));
    console.log("Desconto do INSS: R$", deducaoINSS.toFixed(2));
    console.log("Desconto dos Dependentes: R$", (quantidadeDependentes * 189.59).toFixed(2));
    console.log("Desconto do IR: R$", descontoIR.toFixed(2));
    console.log("Renda Final: R$", rendaFinal.toFixed(2));
  }
  
  
  var rendaMensal = parseFloat(prompt("Digite o valor da renda mensal:"));
  var quantidadeDependentes = parseInt(prompt("Digite a quantidade de dependentes:"));
  
  calcularImpostoDeRenda(rendaMensal, quantidadeDependentes);
  
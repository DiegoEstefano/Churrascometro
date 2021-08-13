/*
CARNE - 400GR POR PESSOA + DE 6 HORAS - 650GR
CERVEJA 1200ML POR PESSOA + DE 6 HORAS - 1500ML
REFRIGERANTE/AGUA - 1000ML POR PESSOA + 6 HORAS 1500ML

CRIANÇAS VALEM POR 0,5
*/ 

var showCarne = document.getElementById('qtdaCarne')
var showCerveja330 = document.getElementById('qtdaCerveja330')
var showCerveja600 = document.getElementById('qtdaCerveja600')
var showBebidas = document.getElementById('qtdaBebidas')

const calc = () => {

    let adultos = Number(document.getElementById("qtda-adultos").value)
    let criancas =Number( document.getElementById("qtda-criancas").value)
    let duracao = Number (document.getElementById("duracao").value)
    let carne = duracao > 6 ? this.value = 650 : this.value = 400
    let cerveja = duracao > 6 ? this.value = 1500 : this.value = 1200
    let bebidas = duracao > 6 ? this.value = 1500 : this.value = 1000

    /*
        Agora se inicia os cálculos
    */

    let qtdaPessoas = ((criancas / 2) + adultos)
    let qtdaCarne = qtdaPessoas * carne/1000
    let qtdaCervejaLong = Math.ceil((adultos * cerveja) / 330)
    let qtdaCerveja600 = Math.ceil((adultos * cerveja) / 600)
    let qtdaBebidas = Math.ceil(qtdaPessoas * bebidas / 2000)

    if (adultos <= 0 ){

        window.alert('Alguém precisa ir para o seu churrasco !')

        } else if (criancas < 0){
            window.alert("Não tem como ter uma quantidade menor que 0 de crianças")
        }
         else if (duracao <= 0){
            window.alert("Sua festa festa não pode durar só isso.")
        } else {
            result.style.visibility = "visible"
        }
 
   
    showCarne.innerText = `${(qtdaCarne).toFixed(3)} Kg de Carne, ${carne}g por adulto, ${ carne = criancas > 0 ? carne/2 : carne = 0 } g por criança` 

    showCerveja330.innerText = `${qtdaCervejaLong} Garrafas de Cerveja LongNeck , Em torno de ${Math.ceil(qtdaCervejaLong/adultos)} LongNecks por pessoa(s)` 

    showCerveja600.innerText = `Se preferir, ${qtdaCerveja600} Garrafas de Cerveja 600ml , Em torno de ${Math.ceil(qtdaCerveja600/adultos)} Garrafas por pessoa` 

    showBebidas.innerText = `${qtdaBebidas} Garrafa(s) de 2L, ${bebidas/1000} litros por pessoa` 


}
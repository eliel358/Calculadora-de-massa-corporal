function calc(){
    altura = document.getElementById("altura").value
    peso = document.getElementById("peso").value
    altura = altura.replace(",",".")
    imc = eval("peso/altura**2")

    imc =  imc.toFixed(2)
    idade = document.getElementById('idade').value
    document.getElementById("resultado").innerHTML = ("IMC: " + imc)
    console.log("debug")
    console.log("altura: " + altura)
    console.log("peso: "+ peso)
    console.log("idade: " + idade) 
    console.log("imc: " + imc)
 
    if (idade<60){
        if(imc<18.5){
            document.getElementById("classificacao").innerHTML = ("baixo peso")
        }
        if(imc>=18.5 && imc<=24.9){
            document.getElementById("classificacao").innerHTML = ("peso normal")
        }
        if(imc>=25 && imc<=29.9){
            document.getElementById("classificacao").innerHTML = ("Excesso de peso")
        }
        if(imc>=30 && imc<=34.9){
            document.getElementById("classificacao").innerHTML = ("Obesidade Classe 1")
        }
        if(imc>=35 && imc<=39.9){
            document.getElementById("classificacao").innerHTML = ("Obesidade Classe 2")
        }
        if(imc>=40){
            document.getElementById("classificacao").innerHTML = ("Obesidade Classe 3")
        }
    }else{
        if(imc<= 22){
            document.getElementById("classificacao").innerHTML = ("baixo peso (idoso)")
        }
        if(imc>22 && imc<27){
            document.getElementById("classificacao").innerHTML = ("adequado ou eutrófico (idoso)")
        }
        if(imc>=27){
            document.getElementById("classificacao").innerHTML = ("sobrepeso (idoso)")
        }
    }


}

calc()
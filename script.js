document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#quantidade").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function(){

    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})


function atualizarPreco(){
    const qtde = document.querySelector("#quantidade").value
    console.log(qtde)
    const temJS = document.querySelector("#js").checked 
    const inclueLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value




    let preco = qtde * 100;
    let taxaUrgencia = 1 - prazo*0.1
    preco = preco + (preco*taxaUrgencia)

    if(temJS) preco *= 1.1 //mais 10%
    if (inclueLayout) preco += 500 
    

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}

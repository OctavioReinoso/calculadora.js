const pantalla = document.querySelector('.pantalla-valor')
const button = document.querySelectorAll('#btn')
const btnBorrar = document.querySelector('#borrar')
const btnBorrarUno = document.querySelector('#borrarUno')

button.forEach(boton => {
    boton.addEventListener('click', () => {
        const clickBtn = boton.textContent
        
        if (clickBtn === '=') {
            try {
                const resultado = eval(pantalla.textContent)
                pantalla.textContent = resultado
            } catch (error) {
                pantalla.textContent = 'ERROR'
            }
        } else {
            pantalla.textContent === '0' || pantalla.textContent === 'ERROR' ? 
            pantalla.textContent = clickBtn : 
            pantalla.textContent += clickBtn
        }
    })
})

btnBorrar.addEventListener('click', () => {
    pantalla.textContent = '0'
})

btnBorrarUno.addEventListener('click', () => {
    if(pantalla.textContent === 'ERROR'){
        pantalla.textContent = '0'
    }

    pantalla.textContent.length === 1 ? 
    pantalla.textContent = '0' : 
    pantalla.textContent = pantalla.textContent.slice(0, -1)
})




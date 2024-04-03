
//Obtengo elementos del DOM
const input = document.getElementById('inputLength');
const button = document.getElementById('generate-password');
const result = document.getElementById('password-result')



//genero contraseña con la función generate()
/*input.value= para obtener el valor deseado de la longitud de la contraseña
parteInt = indicar que lo convierta en número entero
genero 3 variables con letras, números y signos
const allCharacters= para concatenar las 3 variables y guardarla en esta variable */
const generate = () =>{
    let length = parseInt(input.value);
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-_=+';;
    const allCharacters = letters+numbers+symbols
    result.innerText = generatePassword (allCharacters, length); //llama a la función generatePassword
    
}

//genero la contraseña aleatoria
/*Paso dos parametros character y lenght
inicializo la variable password donde se almacenará la contraseña generada
bucle for que se hará según el lenth indicado
En cada vuelta de bucle generamos un número aleatorio para obtener un numero entre 0 y characters.length
charAt= cadena.charAt(posición). Para obtener el caracter en la posición que hemos obtenido con random. Se concatena a la variable password */
const generatePassword = (characters, length) => {
    let password ='';
    for (let i=0; i<length; i++) {
        let random = Math.floor(Math.random() * characters.length);
        password += characters.charAt(random);
    }
    return password
}


//Evento de click
button.addEventListener('click', () =>  {
    generate();
})
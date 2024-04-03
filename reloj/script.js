const getcurrentTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = update_value (date.getMinutes());
    const seconds = update_value (date.getSeconds());
    let message = '';
    if (hours >=0 && hours <7) {
        message = 'Es hora de descansar. Apaga y sigue mañana'
    } else if (hours >=7 && hours <12){
        message = 'Buenos días, desayuna fuerte y a darle al código'
    }else if ( hours >=12 && hours <14) {
        message = 'Echa un rato más pero no olvides comer'
    }else if (hours >=14 && hours <16){
        message = ' Espero que hayas comido'
    }else if (hours>=16 && hours <18){
        message= 'Buenas tardes, el último empujón'
    }else if (hours >=18 && hours <20){
        message= 'Esto ya son horas extras, ... piensa en parar pronto'
    }else if(hours >= 20 && hours <0){
        message = 'Buenas noches, es hora de pensar en parar y descansar'
    }
    return  {
        time: hours+':'+ minutes+ ':' +seconds ,
        message : message
    }
}

const getcurrentDate = () => {
    const date = new Date();
    const day = update_value (date.getDate());
    const month = update_value (date.getMonth() + 1) ;
    const year = date. getFullYear() ;
    return day + '/' + month + '/' + year
}

//Función para saber si el número es <10
const update_value = value =>{
    return value <10 ? `0${value}`: value
}

const updateClock = () => {
    const timeElement = document.getElementById('clock');
    const messageElement = document.getElementById('message');
    const dateElement= document.getElementById('date');

    const {time, message} = getcurrentTime();
    const currentDate = getcurrentDate();

    timeElement.innerHTML = time;
    messageElement.innerHTML= message;
    dateElement.innerHTML = currentDate;

}

setInterval (() => {
    updateClock()
}, 1000)
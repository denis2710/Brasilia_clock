/**
 * Obtem o objeto date 
 * 
 * @returns 
 */
function getDate() { 
    return new Date()
}

/**
 * Obtem os segundos 
 * 
 * @returns 
 */
function getSecconds() {
    const date = getDate()
    return date.getSeconds()
}

/**
 * Obtem as minutos 
 * 
 * @returns 
 */
function getMinutes() {
    const date = getDate()
    return date.getMinutes()
}

/**
 * Obtem as horas 
 * 
 * @returns 
 */
function getHours() {
    const date = getDate()
    return date.getHours()
}

/**
 * Envia os dados completos para o front 
 */
function sendFullTimeToFront(){
    setToFront('seconds', getSecconds())
    setToFront('minutes', getMinutes())
    setToFront('hour', getHours())
}

/**
 * Envia os dados para o frontend com base no Id informado 
 * 
 * @param {strint} dataId 
 * @param {string} value 
 */
function setToFront(dataId, value){
    const seccondsElement = document.getElementById(dataId)
    seccondsElement.innerHTML = parseTime(value)
}

/**
 * Forma o número colocando 0 na frente
 * 
 * @param {number} time 
 * @returns o número formatado. Ex: 3 retorna 03
 */
function parseTime(time){ 
    return `0${time}`.slice(-2)
}

/**
 * Inicia o timer e envia os dados para o front 
 */
function startClock(){ 
    setInterval(() => {
        sendFullTimeToFront()
    }, 1000);
}

startClock()
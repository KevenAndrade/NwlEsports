export function convertHourStringToMin(hourString: String){
    const [horas, minutos] = hourString.split(':').map(Number);

    const mimutosAmount = (horas * 60) + minutos;

    return mimutosAmount;
}

export function convertMinToHour(MinutosTotal: number){
    const horas = Math.floor(MinutosTotal / 60 );

    const minutos = MinutosTotal % 60;

    const horasFinal = horas + ":" + minutos;

    return horasFinal;
}

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "17 Días y 500 noches",
    details: {
        author: "Joaquín Sabina",
        year: 1990
    }
}

// Se puede utilizar un alias para renombrar una variable
const song = 'New Song';
const { song: cancion, songDuration:duration, details } = audioPlayer;
// Desestructuración de un objeto interno
const { author } = details;

// console.log('Song: ', cancion);
// console.log('Duration: ', duration);
// console.log('Author: ', author);

// Desestructuración de Arrays
const [ , , trunks = 'No hay personaje'] = ['Goku', 'Vegeta', 'Trunks'];
console.error('Personaje 3:', trunks );

export {};
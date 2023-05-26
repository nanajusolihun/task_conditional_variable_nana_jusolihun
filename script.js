// 1. Conditional Variabel
const nilai = 85;
const kelulusan = nilai > 80 ? "LULUS" : "TIDAK LULUS / REMIDI";
console.log(kelulusan);


const nilai2 = 85;
const kelulusanAnd = nilai2 > 80 && "LULUS";
const kelulusanOr= nilai2 < 80 || "TIDAK LULUS / REMIDI";

console.log(kelulusanAnd);
console.log(kelulusanOr);


// Contoh Map dan Filter
const listMovie = [
    {
        title : "Guardians of Galaxy Vol. 3",
        year : 2023,
        cast : "Starlord"
    },
    {
        title : "Ant-Man & The Wasp : Quantumania",
        year : 2023,
        cast : "Scott Lang"
    },
    {
        title : "Black Phanter : Wakanda Forever",
        year : 2022,
        cast : "Shuri"
    },
    {
        title : "Thor : Love and Thunder",
        year : 2022,
        cast : "Thor"
    },
    {
        title : "Spiderman : No Way Home",
        year : 2021,
        cast : "Peter Parker"
    },
    {
        title : "Eternals",
        year : 2021,
        cast : "Sersi"
    }
];

// 2. Map
const listTitleMovie = listMovie.map((judul) => judul.title);
console.log(listTitleMovie);

// 3. Filter
const movieTahun2023 = listMovie.filter((tahun) => tahun.year > 2022);
console.log(movieTahun2023);
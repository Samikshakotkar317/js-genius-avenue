const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // mearging a two array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //it is no more array it get individual

// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6, ], 7, [6,7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



console.log(Array.isArray("Samiksha"))
console.log(Array.from("Samiksha")) //convert into array
console.log(Array.from({name: "samiksha"})) //intresting -----it give empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// study about isArray, from, of

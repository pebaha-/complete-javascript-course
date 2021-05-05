const country = "Denmark";
const continent = "Europe";
let population = 5800000;

console.log(country + " is in " + continent + " and has a population of ~" + population + " as of 2021");

////////////////////

const isIsland = false;
const language = "Danish";

console.log(country + " has a population of ~" + population + " as of 2021. Is it an island? " + isIsland + ". The language is " + language + ".");

console.log("Half of the population of " + country + " is " + population / 2);

population++;
console.log(population);

const populationFinland = 5500000;
console.log(country + " has a larger population than Finland? " + (populationFinland < population));

const averagePopulation = 33000000;
console.log(country + " has a smaller population than the average country? " + (averagePopulation > population));

const description = country + " is in " + continent + " and its " + population + " people speak " + language;
console.log(description);

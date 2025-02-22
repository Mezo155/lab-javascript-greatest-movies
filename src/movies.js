// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const result = moviesArray.map((movie) => {
        return movie.director
    })
    return result
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
const stevenMovies = moviesArray.filter((movie) => {
    return movie.director === "Steven Spielberg" && movie.genre.includes('Drama')
    })

    return stevenMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const scoresAverage = moviesArray.reduce((acc, movie) => {
    if (movie.score > 0){
        return Number((acc + movie.score/moviesArray.length).toFixed(2))
    } else {
        return acc
    }
    }, 0)
    return scoresAverage
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama")
    })
    const mediaScoreDramaMovies = dramaMovies.reduce((acc, movie) => {
        return (acc + movie.score/dramaMovies.length)
    }, 0)
    return Number (mediaScoreDramaMovies.toFixed(2))
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = [...moviesArray];
    return moviesArrayCopy.sort((a, b) => {
    if (a.year === b.year)
    {
        return a.title.localeCompare(b.title)
    } else {
return a.year - b.year
    }   
    })
    
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const filteredMoviesArray = [...moviesArray]
    const titulos = filteredMoviesArray.map((movie) => {
    return movie.title    
    })
    const ordenarFilteredMoviesArray = titulos.sort((a, b) => {
        return a.localeCompare(b)
    })
    if (ordenarFilteredMoviesArray.length > 20){
        return ordenarFilteredMoviesArray.slice(0, 20)
    } else {return ordenarFilteredMoviesArray}
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

var movies = [{
        name: 'In Burges',
        rating: '5',
        haveSeen: 'true',
    },
    {
        name: 'Frozen',
        rating: '4.5',
        haveSeen: 'false',
    },
    {
        name: 'Mad_Max',
        rating: '5',
        haveSeen: 'true',
    },
];

movies.forEach(function(movie) {
    var seenStatus = movie.haveSeen ? 'watched' : 'not watched';
    var result = `You have ${seenStatus} ${movie.name} - ${movie.rating} stars`;
    console.log(result)
})











ovies.forEach(function(movie) {
    var result = "You have ";
    if (movie.haveSeen) {
        result += "watched ";
    } else {
        result += "not watched ";
    }
    result += "\"" + movie.name + "\" - ";
    result += movie.rating + " stars";
    console.log(result)
})
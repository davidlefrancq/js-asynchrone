const request = require('request');

function showError(error){
    console.error(error);
}

function filmProcessing(error, response, body){
    if(error){
        showError(error)

    }else if(body){
        const film = JSON.parse(body);
        console.log(`  - (${film.episode_id}) ${film.title}`);
    }
}

function requestFilm(url){
    request.get(url, filmProcessing);
}

function peopleProcessing(error, response, body){
    if(error){
        showError(error)

    }else if(body){
        const people = JSON.parse(body);
        console.log(people.name)

        requestFilm(people.films[0]);
        // for(const key in people.films){
        //     const film = people.films[key];
        //     requestFilm(film);
        // }
    }
}

request.get('https://swapi.dev/api/people/1/', peopleProcessing);

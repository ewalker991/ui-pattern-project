console.log("Javascript is loaded!")

// function openInfo(evt, tabName) {
//     let i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     tablinks = document.getElementsByClassName("tablinks"); 
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     document.getElementById(tabName)
//     tabName.style.display = "block";
//     evt.currentTarget.className += " active";
// }

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

console.log(panels)

tabs.addEventListener('click', function (e) {
    if (e.target.tagName == "LI") {
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function (panel) {
            if (panel == targetPanel) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        })
    }
})

// '9mdi1ioUnMia5bH3RgEK'

const app = document.getElementById('movies');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

let request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

    let data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = movie.title;
            
            const p = document.createElement("p");
            movie.description = movie.description.substring(0, 300);
            p.textContent = `${movie.description}...`;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }
}

request.send();



const app2 = document.getElementById('characters');

const container2 = document.createElement('div');
container2.setAttribute('class', 'container2');

app2.appendChild(container2);

let request2 = new XMLHttpRequest();
request2.open('GET', 'https://ghibliapi.herokuapp.com/people', true);
request2.onload = function () {

    let data = JSON.parse(this.response);
    if (request2.status >= 200 && request2.status < 400) {
        data.forEach(people => {
            const charaCard = document.createElement('div');
            charaCard.setAttribute('class', 'charaCard');

            const h1 = document.createElement('h1');
            h1.textContent = people.name;
            
            const p = document.createElement("p");
            people.age = people.age.substring(0, 300);
            p.textContent = `Age: ${people.age}`;

            container2.appendChild(charaCard);
            charaCard.appendChild(h1);
            charaCard.appendChild(p);
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }
}


request2.send();



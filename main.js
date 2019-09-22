
const logo = document.getElementsByClassName('logo')[0];
let currentPage = document.URL;


// ABOUT PAGE ARRAYS
const bandMembers = [
    {
    image: '/images/band-member1.jpg',
    name: 'Terry Sharpe',
    instrument: 'Vocals & Guitar'
  },
  {
    image: '/images/band-member2.jpg',
    name: 'Paul Bowen',
    instrument: 'Guitar'
},
{
    image: '/images/band-member3.jpg',
    name: 'Sean Martin',
    instrument: 'Drums'
},
{
    image: '/images/band-member4.jpg',
    name: "Liam L'Estrange",
    instrument: 'Bass Guitar'
},  
]

// TOUR PAGE ARRAYS
//////////////////////
tourDates = [
    {
        month: 'SEP',
        day: '24',
        time: '6:00pm',
        venue: 'The Station Inn',
        location: 'Nashville, TN, USA',
        linkToTickets: 'https://www.ticketmaster.com/',
    },
    {
        month: 'OCT',
        day: '1',
        time: '6:00pm',
        venue: 'The Station Inn',
        location: 'Nashville, TN, USA',
        linkToTickets: 'https://www.ticketmaster.com/',
    },
    {
        month: 'OCT',
        day: '8',
        time: '6:00pm',
        venue: 'The Station Inn',
        location: 'Nashville, TN, USA',
        linkToTickets: 'https://www.ticketmaster.com/',
    },
];

moreTourDates = [
    {
        month: 'OCT',
        day: '15',
        time: '6:00pm',
        venue: 'The Station Inn',
        location: 'Nashville, TN, USA',
        linkToTickets: 'https://www.ticketmaster.com/',
    },
    {
        month: 'OCT',
        day: '22',
        time: '6:00pm',
        venue: 'The Station Inn',
        location: 'Nashville, TN, USA',
        linkToTickets: 'https://www.ticketmaster.com/',
    },
    {
        month: 'OCT',
        day: '29',
        time: '6:00pm',
        venue: 'The Station Inn',
        location: 'Nashville, TN, USA',
        linkToTickets: 'https://www.ticketmaster.com/',
    },
];

// DISC PAGE ARRAYS
///////////////////////////

const starjetsAlbums = [
    {
        albumArt: './images/album-art4.jpg',
        albumTitle: 'Somewhere',
        albumYear: 'April 21 2019',
        songs: [
            "Somewhere", "Beauty and the Beast", "Heroes", "Blackout", "Moss Garden", "Low", "You", "Can You Hear Me?",
        ],
    },
    {
        albumArt: './images/album-art3.jpg',
        albumTitle: 'Somewhere',
        albumYear: 'May 21 2019',
        songs: [],
    },
    {
        albumArt: './images/album-art5.jpg',
        albumTitle: 'Four',
        albumYear: 'March 2 2018',
        songs: [],
    },
    {
        albumArt: './images/album-art2.jpg',
        albumTitle: 'World We Know',
        albumYear: 'July 17 2017',
        songs: [],
    },
    {
        albumArt: './images/album-art1.jpg',
        albumTitle: 'Wilderness',
        albumYear: 'Jan 21 2016',
        songs: [],
    },
];

// PRINT TO DOM 
///////////////////
const printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML = stringToPrint;
};

// TOUR PAGE FUNCTIONS
/////////////////////////
const tourDatePrinter = (tourArr) => {
    let tourCard = '';
    for (let i = 0; i < tourArr.length; i++) {
        tourCard += `
        <div class="tour row d-flex align-items-center">
            <div class="date-zone col-1">
                <div class="row date-zone-row month">${tourArr[i].month}</div>
                <div class="row date-zone-row day">${tourArr[i].day}</div>
                <div class="row date-zone-row time">${tourArr[i].time}</div>
            </div>
            <div class="col-4 venue">${tourArr[i].venue}</div>
            <div class="col-4 location">${tourArr[i].location}</div>
            <div class="col-2 button"><a href="${tourArr[i].linkToTickets}" target="_blank" class="btn btn-primary">BUY TICKETS</a></div>
        </div>
        `
    }
    if (tourArr === tourDates) {
        printToDom('tour-dates', tourCard)
    } else if (tourArr === moreTourDates) {
        printToDom('show-me-more', tourCard)
    }
};

const printNewMessage = () => {
    let removeEmailForm = document.getElementById('email-zone');
    let newString = `
    <div id="email-message">
    <h2>THANK YOU FOR SUBSCRIBING!</h2>
    <button type="button" id="read-more" class="col-3 btn btn-primary">READ MORE</button>
    </div>
    `
    if (document.getElementById('exampleInputEmail1').value === '') {
            alert('Please enter an email!');
        } else {
            while (removeEmailForm.hasChildNodes()) {
                removeEmailForm.removeChild(removeEmailForm.firstChild);
            }
            printToDom('email-message', newString);
            document.getElementById('read-more').addEventListener('click', () => {
                location.replace("/about.html");});
        }
    }

const printMessage = () => {
    let removeSMButton = document.getElementById('SMButton');
        tourDatePrinter(moreTourDates);
        while (removeSMButton.hasChildNodes()) {
            removeSMButton.removeChild(removeSMButton.firstChild);
        }
}


const printEmailForm = () => {
    let emailString = `
    <div>
    <h2>STAY IN TOUCH</h2>
    <P>Subscribe to email updates to stay up to date with news from the Tango Brigade.</P>
    <form class="row">
        <div class="form-group col-9">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@email.com">
        </div>
        <button type="button" id="subscribe" class="col-3 btn btn-primary">SUBSCRIBE</button>
    </form>
    </div>
    `
    printToDom('email-zone', emailString);
}



// LOGO ANIMATION FUNCTION
///////////////////////////////////
const checkPrev = () => {
    if (document.referrer.includes('index.html')) {
        logo.className += ' firstAnimation';
    } else {
        logo.className += ' leftToRight';
    }
}


// ABOUT PAGE FUNCTIONS
/////////////////////////////
const bandBuilder = (bandArray) =>{
    let aboutBandCard='';
    for (let i = 0; i < bandArray.length; i++){
        const bandCard= bandArray[i];
        aboutBandCard +=`
        <div class="bandCard">
            <img src="${bandCard.image}" alt="Image of ${bandCard.name}"/>
            <h2 class="band-member-name">${bandCard.name}</h2>
            <p class="band-member-instrument">${bandCard.instrument}</p>
        </div>
        `
    }
    printToDom('aboutMembersZone', aboutBandCard);
}


// DISC PAGE FUNCTIONS
////////////////////////////////////
const albumBuilder = (albumArray) => {
    let domString = ''
    for (let i = 0; i < albumArray.length; i++) {
        const albums = albumArray[i];
        domString += `
        <div id="app">
            <div class="card-row">
                <div class="card">
                    <div class="card-front">
                        <img class="card-img-top" src="${albums.albumArt}" alt="album image" />
                    </div>
                    <div class="card-back">
                        <h4 id="albumTitle">${albums.albumTitle}</h4>
                        <h6 class="year-text">${albums.albumYear}</h6>
                    </div>
                </div>
            </div>
        </div>`
    }
    printToDom('starJetsAlbum', domString);
}

// PAGE LOAD FUNCTION
/////////////////////////////
const pageCheck = () => {
    if (currentPage.includes('tour.html')) {
        tourDatePrinter(tourDates);
        checkPrev();
        printEmailForm();
        document.getElementById('show-more').addEventListener('click', printMessage);
        document.getElementById('subscribe').addEventListener('click', printNewMessage);

    } else if (currentPage.includes('about.html')) {
        bandBuilder(bandMembers);
        
    } else if (currentPage.includes('disc.html')) {
        albumBuilder(starjetsAlbums);

    } else {
        logo.className - ' firstAnimation';
        document.getElementById('enter').addEventListener('click', () => {
            location.replace("/about.html")});
    }
}

// INIT
const init = () => {
    window.addEventListener('load', pageCheck);
}
init();
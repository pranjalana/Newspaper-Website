let headlines=document.getElementById('headlines')
let fetchedlines=async function() {
    let result = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=0e12328d4470447dbe76fd8302e3be78")
    let data = await result.json()
    displayheadlines(data.articles);
}
fetchedlines();

let displayheadlines=(data) => {
    console.log(data)
    data.forEach(element => {
        let subdiv=document.createElement('div')
        subdiv.style.backgroundImage = `url(${element.urlToImage})`;
        subdiv.innerHTML = `<p>${element.title}</p>`
        headlines.appendChild(subdiv)
    });
}


let business = document.getElementById('business')
let fetchbusiness=async function() {
    let result=await fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0e12328d4470447dbe76fd8302e3be78')
    let data=await result.json()
    displaybusiness(data.articles)
}
fetchbusiness()

let displaybusiness=(data)=> {
    data.forEach(ele=> {
        for(let key in ele) {
            if(ele[key]===null) {
                ele[key]=`${key} will be updated soon`
            }
        }
        // console.log(data)
        let subdiv=document.createElement('div');
        subdiv.innerHTML=`<h2>${ele.source.name}</h2>
        <h4>${ele.title}</h4>
        <img src=${ele.urlToImage} alt=' Image will be updated soon'>
        <p>${ele.description}</p>
        <a href=${ele.url} target='_blank'><button>Explore Official Website</button></a>`
        business.appendChild(subdiv)
    })
}


let ent = document.getElementById('ent')
let fetchent=async function() {
    let result=await fetch('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=0e12328d4470447dbe76fd8302e3be78')
    let data=await result.json()
    displayent(data.articles)
}
fetchent()

let displayent=(data)=> {
    data.forEach(ele=> {
        for(let key in ele) {
            if(ele[key]===null) {
                ele[key]=`${key} will be updated soon`
            }
        }
        // console.log(data)
        let subdiv=document.createElement('div');
        subdiv.innerHTML=`<h2>${ele.source.name}</h2>
        <h4>${ele.title}</h4>
        <img src=${ele.urlToImage} alt=' Image will be updated soon'>
        <p>${ele.description}</p>
        <a href=${ele.url} target='_blank'><button>Explore Official Website</button></a>`
        ent.appendChild(subdiv)
    })
}


let health = document.getElementById('health')
let fetchhealth=async function() {
    let result=await fetch('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=0e12328d4470447dbe76fd8302e3be78')
    let data=await result.json()
    displayhealth(data.articles)
}
fetchhealth()

let displayhealth=(data)=> {
    data.forEach(ele=> {
        for(let key in ele) {
            if(ele[key]===null) {
                ele[key]=`${key} will be updated soon`
            }
        }
        // console.log(data)
        let subdiv=document.createElement('div');
        subdiv.innerHTML=`<h2>${ele.source.name}</h2>
        <h4>${ele.title}</h4>
        <img src=${ele.urlToImage} alt=' Image will be updated soon'>
        <p>${ele.description}</p>
        <a href=${ele.url} target='_blank'><button>Explore Official Website</button></a>`
        health.appendChild(subdiv)
    })
}


let science = document.getElementById('science')
let fetchscience=async function() {
    let result=await fetch('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=0e12328d4470447dbe76fd8302e3be78')
    let data=await result.json()
    displayscience(data.articles)
}
fetchscience()

let displayscience=(data)=> {
    data.forEach(ele=> {
        for(let key in ele) {
            if(ele[key]===null) {
                ele[key]=`${key} will be updated soon`
            }
        }
        // console.log(data)
        let subdiv=document.createElement('div');
        subdiv.innerHTML=`<h2>${ele.source.name}</h2>
        <h4>${ele.title}</h4>
        <img src=${ele.urlToImage} alt=' Image will be updated soon'>
        <p>${ele.description}</p>
        <a href=${ele.url} target='_blank'><button>Explore Official Website</button></a>`
        science.appendChild(subdiv)
    })
}


let sports = document.getElementById('sports')
let fetchsports=async function() {
    let result=await fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=0e12328d4470447dbe76fd8302e3be78')
    let data=await result.json()
    displaysports(data.articles)
}
fetchsports()

let displaysports=(data)=> {
    data.forEach(ele=> {
        for(let key in ele) {
            if(ele[key]===null) {
                ele[key]=`${key} will be updated soon`
            }
        }
        // console.log(data)
        let subdiv=document.createElement('div');
        subdiv.innerHTML=`<h2>${ele.source.name}</h2>
        <h4>${ele.title}</h4>
        <img src=${ele.urlToImage} alt=' Image will be updated soon'>
        <p>${ele.description}</p>
        <a href=${ele.url} target='_blank'><button>Explore Official Website</button></a>`
        sports.appendChild(subdiv)
    })
}


let tech = document.getElementById('tech')
let fetchtech=async function() {
    let result=await fetch('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=0e12328d4470447dbe76fd8302e3be78')
    let data=await result.json()
    displaytech(data.articles)
}
fetchtech()

let displaytech=(data)=> {
    data.forEach(ele=> {
        for(let key in ele) {
            if(ele[key]===null) {
                ele[key]=`${key} will be updated soon`
            }
        }
        // console.log(data)
        let subdiv=document.createElement('div');
        subdiv.innerHTML=`<h2>${ele.source.name}</h2>
        <h4>${ele.title}</h4>
        <img src=${ele.urlToImage} alt=' Image will be updated soon'>
        <p>${ele.description}</p>
        <a href=${ele.url} target='_blank'><button>Explore Official Website</button></a>`
        tech.appendChild(subdiv)
    })
}
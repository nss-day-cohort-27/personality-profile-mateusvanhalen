 
// Personality type: “The Consul” (ESFJ-A)
// Individual traits: Extraverted – 90%, Observant – 51%, Feeling – 57%, Judging – 72%, Assertive – 81%
// Role: Sentinel
// Strategy: People Mastery

let matt = [{
    agree: "Social Creatrue,Keeps current with friends ,12%",
    dontAgree: "Cheerleader, Quarterback, Takes Spotlight",
    peopleLikeMe: "Carl, Bob Vila, Johnny Bravo, Twin Brother",
    commWithSib: "Yelling, Fingerpainting, Hand Signals",
    commWithInstr: "Nice words, Atta boys, Homework",
    commWithTeam: "Bring food in, Help each other, Also bring ice cream"
},

// {
    
// },

// {
//     peopleLikeMe: "Carl",
//     peopleLikeMe: "Bob Vila",
//     peopleLikeMe: "Johnny Bravo",
//     peopleLikeMe: "Twin Brother"
// },

// {
//     commWithSib: "Yelling",
//     commWithSib: "Fingerpainging",
//     commWithSib: "Hand singnals"
// },

// {
//     commWithInstr: "Nice words",
//     commWithInstr: "Atta boys",
//     commWithInstr: "Homework"
// },

// {
//     commWithTeam: "Bring food in",
//     commWithTeam: "Help each other",
//     commWithTeam: "Also bring ice cream!"
// }
]

const saveMattBase = function (databaseObject, localStorageKey) {
    const stringifiedDatabase = JSON.stringify(databaseObject)
    localStorage.setItem(localStorageKey, stringifiedDatabase)
    }
    
    const loadMattData = function (localStorageKey) {
    const databaseString = localStorage.getItem(localStorageKey)
    return JSON.parse(databaseString)
    }
    
    saveMattBase(matt, "Matt")
    
    const mattJSONdata =loadMattData("Matt")
    
    var mattRecap = document.getElementsByClassName("matt")[0];
    var items = mattJSONdata;
    
    // one big for loop where populates info

    for(var i = 0; i < items.length; i++) {
        var h1 = document.createElement("h1");
        h1.className="general";
        h1.innerHTML = `I agree with this, kind of ${items[i].agree}`;
        mattRecap.appendChild(h1);
    
        var h1 = document.createElement("h1");
        h1.className="general"
        h1.innerHTML = `I dont agree with this stuff here: ${items[i].dontAgree}`;
        mattRecap.appendChild(h1);
    
        var h2 = document.createElement("h2");
        h2.className="people"
        h2.innerHTML =`What people are like me?: ${items[i].peopleLikeMe}`;
        mattRecap.appendChild(h2);
    
        var h3 = document.createElement("h3");
        h3.className="communication"
        h3.innerHTML = `How I would communicat with little sib: ${items[i].commWithSib}`;
        mattRecap.appendChild(h3);
    
        var r = document.createElement("h3");
        h3.className="communication"
        h3.innerHTML = `How to Communicate with an instructor: ${items[i].commWithInstr}`;
        mattRecap.appendChild(h3);
    
        var h3 = document.createElement("h3");
        h3.className="communication"
        h3.innerHTML = `How to Communicate with a team: ${items[i].commWithTeam}`;
        mattRecap.appendChild(h3);
    }
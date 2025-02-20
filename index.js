document.addEventListener('DOMContentLoaded',postData);

const data = document.location.search;
const params = new URLSearchParams(data)

const name = params.get('fname');
const amount = params.get('amount');
const setting = params.get('setting');
const genres = params.get('genres');
const add = params.get('add');
const emo = params.get('emo');
const char = params.getAll('char');

let count;
if (amount > 30) {
    count = 'You know a lot of series. You may already know this one.'
} else if (amount < 0) {
    count = 'You are joking about knowing a negative number of shows, right?'
} else {
    count = 'You are a beginner in this world. Maybe you should try a popular series.'
}

//show = 'hi';
//image = 'images/green.png';
//description = 'rnfjrengn';


let show;
if (setting == "fantasy") {
    if (genres == "act/ad"){
        if (add == "noadd") {
            if (emo == "drama" && (char == "human" || char=="else")){
                show = 'Naruto';
                image = 'images/naruto.jpg';
                description = 'The story follows the young ninja Naruto and his journey to become Hokage, the leader of his village.';
            
            } else if (char == "else" || char == "human"){
                show = 'One Piece';
                image = 'images/op.jfif';
                description = 'The story follows the main character, Luffy, the future pirate king, on his journey to find the greatest treasure, One Piece!';
            } else {
                alert("Please go back and try again.")
            }

        }
        else {
            alert("Please go back and try again.")
        }
    
    
    } else if (genres == "game"){
        show = "No Game no Life";
        image = 'images/nogame.jfif';
        description = 'The story follows a pair of stepsiblings Sora and Shiro, who dominate various online games under the "Blank” username, get invited to another world. The siblings are challenged to dangerous games there.'
    } else{
        alert("Please go back and try again.")
    }
    
} else if (setting == "modern") {
    if (genres == "detective"){
        if (emo == "nopemo" || char == "human"){
            show = 'Case Closed / Detective Conan';
            image = 'images/conan.jpg';
            description = 'The story follows a well known high school detective, Shinichi, who get trapped in his young 7-year old body after witnessed illegal activities. He continued solving cases from behind the scene and investigating the criminal organization that caused him to be in that state.';
        } else {
            alert("Please go back and try again.")
        
        }
    } else if (genres == "action") {
        if (char == "human" || char=="else"){
            if (add == "mystery" || emo == "romance" ){
                show = 'Durarara';
                image = 'images/durarara.jpg';
                description = "The story follows different characters in Ikebukuro, Tokyo's downtown district. Together with them, let’s explore Ikebukuro's most colorful inhabitants through supernatural events!";
            }
        }
    
 
    } else {
        alert("Please go back and try again.")
    }

} else if (setting == "history") {
    if (genres == "act/ad"){
        if (add == "horror" && emo == "drama"){
            show = '';
            image = '';
            description = '';
        } else if (add == "mystery") {
            show = '';
            image = '';
            description = '';
        } else if (add == "life") {
            show = '';
            image = '';
            description = '';
        }
    } else if (genres == "sports") {
        if (add == "horror" && emo == "drama"){
            show = '';
            image = '';
            description = '';
        } else if (add == "mystery") {
            show = '';
            image = '';
            description = '';
        } else if (add == "life") {
            show = '';
            image = '';
            description = '';
        }
    } else if (genres == "detective"){
        if (add == "horror" && emo == "drama"){
            show = '';
            image = '';
            description = '';
        } else if (add == "mystery") {
            show = '';
            image = '';
            description = '';
        } else if (add == "life") {
            show = '';
            image = '';
            description = '';
        }
    } else if (genres == "") {
        if (add == "horror" && emo == "drama"){
            show = '';
            image = '';
            description = '';
        } else if (add == "mystery") {
            show = '';
            image = '';
            description = '';
        } else if (add == "life") {
            show = '';
            image = '';
            description = '';
        }
    } else if (genres == "") {
        if (add == "horror" && emo == "drama"){
            show = '';
            image = '';
            description = '';
        } else if (add == "mystery") {
            show = '';
            image = '';
            description = '';
        } else if (add == "life") {
            show = '';
            image = '';
            description = '';
        }
    } else if (genres == "") {
        if (add == "horror" && emo == "drama"){
            show = '';
            image = '';
            description = '';
        } else if (add == "mystery") {
            show = '';
            image = '';
            description = '';
        } else if (add == "life") {
            show = '';
            image = '';
            description = '';
        }
    } else if (genres == "") {
        if (add == "horror" && emo == "drama"){
            show = '';
            image = '';
            description = '';
        } else if (add == "mystery") {
            show = '';
            image = '';
            description = '';
        } else if (add == "life") {
            show = '';
            image = '';
            description = '';
        }
    }   
} else if (setting == "school") {
    if (genres == "act/ad"){
        if (add == "horror" && emo == "drama"){
            show = '';
            image = '';
            description = '';
        } else if (add == "mystery") {
            show = '';
            image = '';
            description = '';
        } else if (add == "life") {
            show = '';
            image = '';
            description = '';
        }
    } else if (genres == "sports") {
        if (add == "horror" && emo == "drama"){
            show = '';
            image = '';
            description = '';
        } else if (add == "mystery") {
            show = '';
            image = '';
            description = '';
        } else if (add == "life") {
            show = '';
            image = '';
            description = '';
        }
    } else if (genres == "detective"){
        if (add == "horror" && emo == "drama"){
            show = '';
            image = '';
            description = '';
        } else if (add == "mystery") {
            show = '';
            image = '';
            description = '';
        } else if (add == "life") {
            show = '';
            image = '';
            description = '';
        }
    } else if (genres == "") {
        if (add == "horror" && emo == "drama"){
            show = '';
            image = '';
            description = '';
        } else if (add == "mystery") {
            show = '';
            image = '';
            description = '';
        } else if (add == "life") {
            show = '';
            image = '';
            description = '';
        }
    } else if (genres == "") {
        if (add == "horror" && emo == "drama"){
            show = '';
            image = '';
            description = '';
        } else if (add == "mystery") {
            show = '';
            image = '';
            description = '';
        } else if (add == "life") {
            show = '';
            image = '';
            description = '';
        }
    } else if (genres == "") {
        if (add == "horror" && emo == "drama"){
            show = '';
            image = '';
            description = '';
        } else if (add == "mystery") {
            show = '';
            image = '';
            description = '';
        } else if (add == "life") {
            show = '';
            image = '';
            description = '';
        }
    } else if (genres == "") {
        if (add == "horror" && emo == "drama"){
            show = '';
            image = '';
            description = '';
        } else if (add == "mystery") {
            show = '';
            image = '';
            description = '';
        } else if (add == "life") {
            show = '';
            image = '';
            description = '';
        }
    }
} else if (setting == "sci"){
    if (genres == "act/ad"){
        if (add == "horror" && emo == "drama"){
            show = '';
            image = '';
            description = '';
        } else if (add == "mystery") {
            show = '';
            image = '';
            description = '';
        } else if (add == "life") {
            show = '';
            image = '';
            description = '';
        }
    } else if (genres == "sports") {
        if (add == "horror" && emo == "drama"){
            show = '';
            image = '';
            description = '';
        } else if (add == "mystery") {
            show = '';
            image = '';
            description = '';
        } else if (add == "life") {
            show = '';
            image = '';
            description = '';
        }
    } else if (genres == "detective"){
        if (add == "horror" && emo == "drama"){
            show = '';
            image = '';
            description = '';
        } else if (add == "mystery") {
            show = '';
            image = '';
            description = '';
        } else if (add == "life") {
            show = '';
            image = '';
            description = '';
        }
    } else if (genres == "") {
        if (add == "horror" && emo == "drama"){
            show = '';
            image = '';
            description = '';
        } else if (add == "mystery") {
            show = '';
            image = '';
            description = '';
        } else if (add == "life") {
            show = '';
            image = '';
            description = '';
        }
    } else if (genres == "") {
        if (add == "horror" && emo == "drama"){
            show = '';
            image = '';
            description = '';
        } else if (add == "mystery") {
            show = '';
            image = '';
            description = '';
        } else if (add == "life") {
            show = '';
            image = '';
            description = '';
        }
    } else if (genres == "") {
        if (add == "horror" && emo == "drama"){
            show = '';
            image = '';
            description = '';
        } else if (add == "mystery") {
            show = '';
            image = '';
            description = '';
        } else if (add == "life") {
            show = '';
            image = '';
            description = '';
        }
    } else if (genres == "") {
        if (add == "horror" && emo == "drama"){
            show = '';
            image = '';
            description = '';
        } else if (add == "mystery") {
            show = '';
            image = '';
            description = '';
        } else if (add == "life") {
            show = '';
            image = '';
            description = '';
        }
    }
} else {
    show = '...';
    image = 'images/not.png';
    description = "There's not enough data. You should try again."
}


function postData() {
    const container = document.getElementById('results');
    alert('You are matching with...');
    container.innerHTML = `<title>${show}</title>
                            
                            <h1>${name}, You should watch/read ${show}!</h1>
                            <p>${count}</p>
                           <br>
                    
                           <img src="${image}"></img>
                           <br>
                           <p>${description}</p>`;
}


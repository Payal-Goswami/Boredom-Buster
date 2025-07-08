const config = {headers:{accept:"application/json"}};
const JokeURL = "https://icanhazdadjoke.com/";
const dogURL = "https://dog.ceo/api/breeds/image/random";
const catURL = "https://catfact.ninja/fact";
const wordDict = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let p = document.querySelector("#joke");
let Jokebtn = document.querySelector("#Jokebtn");
let image = document.querySelector(".image");
let imagebtn = document.querySelector("#imagebtn");
let clear = document.querySelector("#clear");
let catFact = document.querySelector("#catFact");
let catbtn = document.querySelector("#catbtn");
let search = document.querySelector("#search");
let word = document.querySelector("#word");
let wordbtn = document.querySelector("#wordbtn");
Jokebtn.addEventListener("click", ()=>{
    getJoke();
});

imagebtn.addEventListener("click", ()=>{
    getImage();
});
clear.addEventListener("click", ()=>{
    image.setAttribute("src", "#");
    image.setAttribute("alt", "Random dog");
})
quotebtn.addEventListener("click", ()=>{
    getQuote();
});
catbtn.addEventListener("click", ()=>{
    getFact();
});
wordbtn.addEventListener("click", ()=>{
    getWordDef();
});

async function getImage(){
    try{
        let res = await axios.get(dogURL, config);
        image.setAttribute("src", res.data.message);
    }catch(e){
        console.log("Limit reached/Server error 😔")
        image.setAttribute("alt","Limit reached/Failed to fetch 😔");
        
    }
}
async function getJoke(){
    try{
        let res = await axios.get(JokeURL, config);
        p.innerText = res.data.joke;
    }catch(e){
        console.log("Limit reached/Failed to fetch 😔");
        p.innerText = "Limit reached/Failed to fetch 😔"
    }
}
async function getFact(){
    try{
        let res = await axios.get(catURL, config);
        catFact.innerText = res.data.fact;
        
    }catch(e){
        console.log("Limit reached/Failed to fetch😔");
        catFact.innerText = "Limit reached/Failed to fetch 😔";
    }
}
async function getWordDef(){
    try{
        let wordToSearch = search.value;
        let newwordurl = wordDict+wordToSearch;
        let res = await axios.get(newwordurl, config);
        word.style.color="black";
        word.innerText = res.data[0].meanings[0].definitions[0].definition;

    }catch(e){
        if(search.value==""){
            word.innerText = "Please enter the word";
            word.style.color = "red";
            changeColor==true;
            
        }else{
            console.log("Wrong word/Failed to fetch😔");
            word.innerText = "Wrong word/Failed to fetch 😔";
        }
    }
}
function getQuote(){
    try{
       let random = Math.floor(Math.random()*28);
       quote.innerText=quotes[random].quote;
       author.innerText=quotes[random].author;
    }catch(e){
        console.log("Limit reached/Failed to fetch😔");
        quote.innerText = "Limit reached/Failed to fetch 😔";
        author.innerText = "";
    }
}





const quotes = [
  {
    "quote": "Faith is love taking the form of aspiration.",
    "author": "William Ellery Channing"
  },
  {
    "quote": "You can't cross the sea merely by standing and staring at the water.",
    "author": "Rabindranath Tagore"
  },
  {
    "quote": "No bird soars too high if he soars with his own wings.",
    "author": "William Blake"
  },
  {
    "quote": "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    "author": "Robert Louis Stevenson"
  },
  {
    "quote": "I believe there's an inner power that makes winners or losers. And the winners are the ones who really listen to the truth of their hearts.",
    "author": "Sylvester Stallone"
  },
  {
    "quote": "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
    "author": "William James"
  },
  {
    "quote": "Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.",
    "author": "Oprah Winfrey"
  },
  {
    "quote": "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.",
    "author": "Muhammad Ali"
  },
  {
    "quote": "Don't stop when you're tired, stop when you're done.",
    "author": "David Goggins"
  },
  {
    "quote": "You define your own life. Don't let other people write your script.",
    "author": "Oprah Winfrey"
  },
  {
    "quote": "You are never too old to set another goal or to dream a new dream.",
    "author": "Malala Yousafzai"
  },
  {
    "quote": "People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you're lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life.",
    "author": "Carrie Ann Moss"
  },
  {
    "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "author": "Winston Churchill"
  },
  {
    "quote": "For me, becoming isn't about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn't end.",
    "author": "Michelle Obama"
  },
  {
    "quote": "Spread love everywhere you go.",
    "author": "Mother Teresa"
  },
  {
    "quote": "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.",
    "author": "Lady Gaga"
  },
  {
    "quote": "If you make your internal life a priority, then everything else you need on the outside will be given to you, and it will be extremely clear what the next step is.",
    "author": "Gabrielle Bernstein"
  },
  {
    "quote": "You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.",
    "author": "Mandy Hale"
  },
  {
    "quote": "Nothing is more precious than Independence and liberty.",
    "author": "Ho Chi Minh"
  },
  {
    "quote": "Freedom is never voluntarily given by the oppressor; it must be demanded by the oppressed.",
    "author": "Martin Luther King, Jr"
  },
  {
    "quote": "Freedom is the right to choose – to choose one’s beliefs, one’s way of life, one’s destiny.",
    "author": "Nelson Mandela"
  },
  {
    "quote": "We have believed, and we do believe now that freedom is indivisible, that peace is indivisible, that economic prosperity is indivisible.",
    "author": "Indira Gandhi"
  },
  {
    "quote": "Let freedom reign. The Sun never set on so glorious a human achievement.",
    "author": "Nelson Mandela"
  },
  {
    "quote": "Those who deny freedom to others deserve it not for themselves.",
    "author": "Abraham Lincoln"
  },
  {
    "quote": "The price of independence was heavy, but the freedom it brings is priceless.",
    "author": "Narendra Modi"
  },
  {
    "quote": "Liberty is the breath of life to nations.",
    "author": "George Bernard Shaw"
  },
  {
    "quote": "It always seems impossible until it’s done.",
    "author": "Nelson Mandela"
  },
  {
    "quote": "Freedom is not just about independence; it is about self-discovery and self-realisation.",
    "author": "Dr. A.P.J. Abdul Kalam"
  }
]




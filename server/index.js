const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const getData = () =>{
axios.get("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(response=>{
      console.log(response)
    })
}
app.get('/api/fortune',(req, res) => {
  const fortunes =[
    "A gambler not only will lose what he has, but also will lose what he doesn’t have.",
    "A light heart carries you through all the hard times.",
    "Bird in the hand is worth 2 in the bush",
    "The grass isnt all ways greener on the other side , just be happy where you reside ",
    "whenever someone txts you and not call you , its normally somthing they couldnt have the heart to tell you verbally "
  ]

  let randomIndex = Math.floor(Math.random()* fortunes.length)
  let randomFortune = fortunes[randomIndex]

  res.status(200).send(randomFortune)
})

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.listen(4000, () => console.log("Server running on 4000"));

# Real-Time Web @cmda-minor-web 2021 - 2022
<img width="300" alt="Schermafbeelding 2022-05-10 om 14 37 41" src="https://user-images.githubusercontent.com/70577898/167631100-474d2a57-5a38-4153-a075-a9e582cabf50.png">  <img width="300" alt="Schermafbeelding 2022-05-10 om 14 38 05" src="https://user-images.githubusercontent.com/70577898/167631113-ae40b0b0-0128-44b9-ac50-c55d8c623b3f.png">  <img width="300" alt="Schermafbeelding 2022-05-10 om 14 41 06" src="https://user-images.githubusercontent.com/70577898/167631128-b35cdd35-a4fe-4294-9b7f-88d065c0cc76.png">

## Three Concepts
## Chosen Concept
Trivia music quiz

## :fountain: Wishlist

#### Must have
:white_check_mark: See who is online <br>
:white_check_mark: Enter a (user)name via Sockets.io <br>
:white_check_mark: Fill in trivia questions form API<br>
:white_check_mark: See how many questions are answered correctly <br>

#### Should have
:white_check_mark: Results list 
- [ ] Results list in order
- [ ] Show right answer if the wrong one is answered


#### Could have
- [ ] Question shown one by one
- [ ] See a leaderboard before you are doing the quiz yourself.

#### Want to have
- [ ] Rankinglist in a database (longer memory)
- [ ] When people have the same amount of right asnwers, the person who finished the fastest wins. (timing function)




## 🕹️ What does this Web App do?
In this Web App you can make a music quiz with trivia questions. There are a view thing I would like to highlight.

### Username
At the beginning, the user is asked to fill in their name. This can be any name they want: their real name, a nickname or a made up name. Once the user filled in their name, the questions are shown and they can start making the quiz. 

### Online 
Once the user filled in their name, the user is [online](#name-event). All users have a list of online users that will be updated everytime someone starts their game.
The users can also see users that logged in before them. I did this by storing them in an 'online'-array. I push the filled in name and socket-id in this array. 




### Quiz

### Result list





## ❓ Open Trivia API
For this project I used the [open Trivia API](https://opentdb.com/api_config.php). This is a super simple API to use! Since it is an open API, you do not need an API key. The only thing you have to do is, fill in a form with question about what kind & how many question you want to fetch. Once you filled in that form, the site generates a link for you. How nice is that?! 😄

### Construction of the API
The [link](https://opentdb.com/api.php?amount=10&category=12&difficulty=easy) that i fetch, fetches 10 easy music questions. You can find the data of the questions in the **results** array. 
```
{
  "response_code": 0,
  "results": []
}
```
The question-data is stored in objects.
There are **2 kinds of questions**: true/false-quetions & ABCD-questions

#### A true/false-question
``` 
{
  "category": "Entertainment: Music",
  "type": "boolean",
  "difficulty": "easy",
  "question": "The music video to The Buggle&#039;s &quot;Video Killed the Radio Star&quot; was the first music video to broadcast on MTV.",
  "correct_answer": "True",
  "incorrect_answers": [
    "False"
    ]
  }
```

#### An ABCD-question
```
{
      "category": "Entertainment: Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which member of the Foo Fighters was previously the drummer for Nirvana?",
      "correct_answer": "Dave Grohl",
      "incorrect_answers": [
        "Taylor Hawkins",
        "Nate Mendel",
        "Chris Shiflett"
      ]
    }
```



## ⏱️ Real-Time Events
### Name event
#### server.js
```
socket.on('name', (name) => {
    let object = {username: name , id: socket.id}
    online.push(object)
    io.emit('name', {username: name , id: socket.id})
  })
```
#### script.js
```
socket.on('name', user => {
  //add item to online-list  
  names.insertAdjacentHTML('beforeend', 
  `<li id="text${user.id}"> 
      <p>${user.username}</p>
  </li>`)


  //adds item to ranking
  rankingList.insertAdjacentHTML('beforeend', 
  `<li id="${user.id}"> 
      <p>${user.username}</p>
      <p><span>Still playing...</span>/10</p>
  </li>`)
})

```

### Ranking event
#### server.js
```
socket.on('ranking', (ranking) => {
    io.emit('ranking', {id: socket.id, amount: ranking})
  })
```
#### script.js
```
socket.on('ranking', ranking => {
    let result = document.querySelector(`#${ranking.id} p:last-of-type span`)
    //update waarde in ranking lijst
    let rank = ranking.amount
    result.innerHTML= `${rank}`
})
```

### disconnect/user left event
#### server.js
```
socket.on('disconnect', () => {
    io.emit('user left', {id: socket.id})

    online = online.filter(element => {
      if(element.id !== socket.id) {
        // Voeg 'm toe aan de nieuwe array
        return true;
      } else {
        // Filter 'm uit de nieuwe array
        return false;
      }
    })
    console.log('user disconnected')
  })
```
#### script.js
```
socket.on('user left', user => {
  console.log(user.id);
  document.querySelector(`#text${user.id}`).remove();
})
```

## :arrows_counterclockwise: Data Lifecycle Diagram

## 📦 Used Packages
- [EJS](https://www.npmjs.com/package/ejs)
- [Node-fetch](https://www.npmjs.com/package/node-fetch)
- [express](https://www.npmjs.com/package/express)
- [socket.io](https://www.npmjs.com/package/socket.io)
- [node-dev](https://www.npmjs.com/package/node-dev)

## ⤵️ Install


## ℹ️ Sources

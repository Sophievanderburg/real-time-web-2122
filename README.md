# Real-Time Web @cmda-minor-web 2021 - 2022
## Three Concepts
## Chosen Concept
Trivia music quiz

## Wishlist

#### Must have
:white_check_mark: See who is online <br>
:white_check_mark: Enter a (user)name via Sockets.io <br>
:white_check_mark: Fill in trivia questions form API<br>
:white_check_mark: See how many questions are answered correctly <br>

#### Should have
- [ ] Ranking list 

#### Could have
- [ ] Question shown one by one
- [ ] Show right answer if the wrong one is answered
- [ ] See a leaderboard before you are doing the quiz yourself.

#### Want to have
- [ ] Rankinglist in a database (longer memory)
- [ ] When people have the same amount of right asnwers, the person who finished the fastest wins. (timing function)




## What does this Web App do?
You can make a music quiz with trivia questions



## Open Trivia API
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



## Real-Time Events

## Data Lifecycle Diagram

## Used Packages
- EJS
- Node-fetch
- express
- socket.io
- node-dev


## Install


## Sources

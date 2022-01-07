import human from './human.PNG';
import robot from './robot.PNG';
import "https://kit.fontawesome.com/8aa10b6586.js";
import './main.css';
import react, {useState} from 'react';
let top=10;
let count=0;
const arr = [];
let data="";
let colour="lightgreen"
function App() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  const [info, setInfo] = useState([]);
  const [counts, setCount] = useState(0);
  const micstart = ()=>{
    recognition.start();
  }
  let intro = ["Hello, I am Naitik", "Hi, I am  Naitik", "Hello, My name is Naitik"];
  let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
  let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"];
  let hobbies = ["i love to talk with humans", "i like to make friends like you", "i like cooking"];
  let pizzas = ["which type of pizza do you like?", "i can make a pizza for you", "i would love to make a pizza for you", "would you like cheese pizza?"];
  let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
  let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..']
  recognition.onresult=(e)=>{
    let resultIndex = e.resultIndex;
    let result = e.results[resultIndex][0].transcript;
    arr.push({id:`lightgreen`, dataa:result});
    count=count+1;
    console.log("human");
    chatbotvoice(result);
    setInfo(arr);
    setCount(count)
  }
  console.log("Bahar");
  const chatbotvoice=(message)=>{
    const speech = new SpeechSynthesisUtterance();
    speech.text = "this is test message";
    if(message.includes('who are you')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('name')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('how are you')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('tell me something about you')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes(' hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes('pizza')){
        let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('talk to you' || 'talk')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    if(message.includes('bye')){
        speech.text = "bye bye";
    }
    window.speechSynthesis.speak(speech);
    arr.push({id:`lightblue`, dataa:speech.text});
    count=count+1;
    console.log("robo"+arr);
    setInfo(arr);
    setCount(count)
  }
  return (
    <div className="App">
          <div className="topbar"> 
                <p>Home</p>
                <p>About</p>
          </div>
              <div className='main' >
                    <div className='human'>
                      <img src={human} alt="human photo"></img>
                    </div>
                    <div className='chatarea'>
                      <div className='humanmic' style={{width:"54%", top: `${top}vh`,position: "absolute",backgroundColor:`${colour}`}}>
                        {info.map(
                          (value)=> 
                            (  
                          <p>{value.dataa}</p>
                          )
                        )}
                      </div>
                      <button><i className="fa fa-microphone" onClick={micstart}></i></button>
                    </div>
                    <div className='robot'>
                      <img src={robot} alt="robot photo"></img>
                    </div>
              </div>
          <div className='bottombar'>
            <div className='social-icons'>
                       <a href="#!">
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/naitik-mishra-12811220b">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="https://www.instagram.com/naitikmishra476/">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                        <a href="https://github.com/NaitikMishra">
                            <i className="fab fa-github fa-2x"></i>
                        </a>
            </div>
            <footer><p>&copy; Copyright 2021</p></footer>
          </div>
    </div>
  );
}

export default App;

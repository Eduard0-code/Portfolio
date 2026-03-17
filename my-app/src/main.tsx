import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ButtonOne from './ButtonOne.tsx'
import Cards from './Cards.tsx'
import Footer from './Footer.tsx'
import Twomoney from './assets/images/2MoneyLogo.png'
import Offbeat from './assets/images/offbeat.png'
import Reactlogo from './assets/images/react-learning.jpg'
import Wklist from './assets/images/wklist.png'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="app">
      <div>
        <h1 className="title" style={{ color: 'orange', fontStyle: 'italic' }}>Welcome to My React App</h1>
        <p className="description">This is a simple React application. Here it works like a portfolio website.</p>
      </div>
      <main className="content">
        <Cards
          title="Project 1 - 2Money"
          text="This is my first project at uni. It was done in a group of 6 people, and it was a project about financial education. We created a website to help people learn about managing their finances."
          thumbnail={Twomoney}
          style={{ backgroundColor: '#414141' }}
          buttonTitle="Github Repo"
          button="on"
          onClick={() => window.open('https://github.com/Eduard0-code/Trabalho-Interdisciplinar---Entrega-final---Em-GRUPO', '_blank')}
        />
        <Cards
          title="OffBeat"
          text="My personal project, OffBeat is a music discovery app that helps users find new music based on their listening habits. It works like a blogspot, with simple and intuitive design."
          thumbnail={Offbeat}
          style={{ backgroundColor: 'darkblue' }}
          buttonTitle="Github Repo"
          button="on"
          onClick={() => window.open('https://github.com/Eduard0-code/Projeto-final-de-Desenvolvimento-Web', '_blank')}
        />
        <Cards
          title="Project 3 - My Portfolio"
          text="This is my personal portfolio website, where I showcase my projects and skills. It is built with React and styled with CSS."
          thumbnail={Reactlogo}
          style={{ backgroundColor: 'darkgreen' }}
          buttonTitle="Github Repo"
          button="on"
          onClick={() => window.open('https://github.com/Eduard0-code/React-Learning-Portfolio', '_blank')}
        />
        <Cards
          title="Project 4 - WKList"
          text="A workout playlist app built with React and TypeScript. Add your exercises, set a timer for each one, and let the app guide your session automatically — with rest countdowns, audio cues, and a completion screen."
          thumbnail={Wklist}
          style={{ backgroundColor: '#1a1a1a' }}
          buttonTitle="Github Repo"
          button="on"
          onClick={() => window.open('https://github.com/Eduard0-code/WorkoutPlayList', '_blank')}
        />
      </main>
      <ButtonOne />
      <Footer />
    </div>
  </StrictMode>,
)
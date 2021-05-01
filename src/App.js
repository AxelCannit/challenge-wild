import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

  const [list, setList] = useState([]);

  const loadList = () => { 
    axios.get('http://localhost:8080/api/list')
    .then((response) => {
      console.log(response.data);
      setList(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log(list);
    });
  };

  useEffect(() => {
    loadList();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>
          <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
          Les Argonautes
        </h1>
      </header>      
      <main>
      
        <h2>Ajouter un(e) Argonaute</h2>
          <form className="new-member-form">
            <label for="name">Nom de l&apos;Argonaute</label>
            <input id="name" name="name" type="text" placeholder="Charalampos" />
            <button type="submit">Envoyer</button>
          </form>
      
        <h2>Membres de l'équipage</h2>
          <section className="member-list">
            <div className="member-item">Eleftheria</div>
            <div className="member-item">Gennadios</div>
            <div className="member-item">Lysimachos</div>
          </section>
      </main>
      
      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
}

export default App;

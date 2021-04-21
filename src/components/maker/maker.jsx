import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'ellie',
      company: 'samsung',
      theme: 'colorful',
      email: 'ellie@gmail.com',
      messge: 'go for it',
      fileName: 'ellie',
      fileURL: 'ellie.png',
    },
    {
      id: '2',
      name: 'ellie2',
      company: 'samsung',
      theme: 'dark',
      email: 'ellie@gmail.com',
      messge: 'go for it',
      fileName: 'ellie',
      fileURL: null,
    },
    {
      id: '3',
      name: 'ellie3',
      company: 'samsung',
      theme: 'light',
      email: 'ellie@gmail.com',
      messge: 'go for it',
      fileName: 'ellie',
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () =>{
    authService.logout();

  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if(!user){
        history.push('./');
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  }
  return (  
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard}/>
        <Preview cards={cards}/>
      </div>
      <Footer />
    </section>
  )
};

export default Maker;
'use client';
// import Head from 'next/head';
// import { useEffect } from 'react';
// import styles from '../styles.module.css';

// export default function Homee() {
//   useEffect(() => {
//     dance();
//   }, []);

//   const dance = () => {
//     const newSize = 40;
//     const h1 = document.querySelector('h1');
//     const text = h1.textContent;
//     const length = text.length;
//     const oldSize = window.getComputedStyle(h1).fontSize;

//     let newText = '';

//     for (let i = 0; i < length; i++) {
//       newText += '<span>' + text.charAt(i) + '</span>';
//     }

//     h1.innerHTML = newText;

//     h1.addEventListener('mouseenter', function (e) {
//       const span = e.target;
//       span.style.fontSize = newSize + 'px';
//     });

//     h1.addEventListener('mouseleave', function (e) {
//       const span = e.target;
//       span.style.fontSize = oldSize;
//     });
//   };

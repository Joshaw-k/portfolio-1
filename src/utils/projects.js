import React from "react";
import reactJS from "../assets/react-removebg-preview.png";
import airtable from "../assets/airtable-removebg-preview.png";
import stcom from "../assets/stcom-removebg-preview.png";
import axios from "../assets/axios-removebg-preview.png";
import redux_1 from "../assets/redux-1-removebg-preview.png";
import rechart from "../assets/rechart-removebg-preview.png";
import fusion from "../assets/fusion-removebg-preview.png";
import html from "../assets/html.png";
import css from "../assets/css-removebg-preview.png";
import js from "../assets/JavaScript-logo.png";
import git from "../assets/git-removebg-preview.png";
import github from "../assets/GitHub-Mark-removebg-preview.png";
import tailwindCSS from "../assets/Tailwind_CSS_Logo.svg-removebg-preview.png";
import bootstrapCSS from "../assets/bootstrap-removebg-preview.png";
import furnies from "../assets/furnies.png";
import Cocktailtree from "../assets/Cocktailtree.png";
import Todoapp from "../assets/Todoapp.png";
import gittub from "../assets/gittub.png";
import quizapp from "../assets/quizapp.png";
import tracker from "../assets/tracker.png";

export const projects = [
  {
    title: "FurNies",
    img: furnies,
    desc: "This is a furniture e-commerce application where customers can purchase furnitures of their choice.",
    stack: [
      { title: "React", img: reactJS },
      { title: "StyledComponents", img: stcom },
      { title: "Airtable", img: airtable },
      { title: "Axios", img: axios },
    ],
  },
  {
    title: "JobsTracker",
    img: tracker,
    desc: "This application helps jobseeker keep track of jobs they have applied for and displays the current status of the job.",
    stack: [
      { title: "React", img: reactJS },
      { title: "StyledComponents", img: stcom },
      { title: "Redux", img: redux_1 },
      { title: "Recharts", img: rechart },
    ],
  },
  {
    title: "GitTub",
    img: gittub,
    desc: "This is a mini Github application where users can visualize their activities on the main github application.",
    stack: [
      { title: "React", img: reactJS },
      { title: "StyledComponents", img: stcom },
      { title: "Axios", img: axios },
      { title: "FusionCharts", img: fusion },
    ],
  },
  {
    title: "QuizApp",
    img: quizapp,
    desc: "",
    stack: [
      { title: "React", img: reactJS },
      { title: "VanillaCSS", img: css },
      { title: "Axios", img: axios },
    ],
  },
  {
    title: "TodoApp",
    img: Todoapp,
    desc: "",
    stack: [
      { title: "React", img: reactJS },
      { title: "VanillaCSS", img: css },
    ],
  },
  {
    title: "CocktailTree",
    img: Cocktailtree,
    desc: "",
    stack: [
      { title: "React", img: reactJS },
      { title: "VanillaCSS", img: css },
    ],
  },
];
export const stack = [
  { title: "HTML", img: html },
  { title: "CSS", img: css },
  { title: "JS", img: js },
  { title: "Git", img: git },
  { title: "GitHub", img: github },
  { title: "React", img: reactJS },
  { title: "TailwindCSS", img: tailwindCSS },
  { title: "BootstrapCSS", img: bootstrapCSS },
];

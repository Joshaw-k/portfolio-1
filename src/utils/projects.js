import React from "react";
import reactJS from "../assets/reactjs.png";
import airtable from "../assets/airtable.png";
import stcom from "../assets/stcom.jpg";
import axios from "../assets/axios.png";
import redux_1 from "../assets/redux-1.png";
import rechart from "../assets/rechart.png";
import fusion from "../assets/fusion.jpg";
import css from "../assets/css.jpg";

export const projects = [
  {
    title: "FurNies",
    img: "",
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
    img: "",
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
    img: "",
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
    img: "",
    desc: "",
    stack: [
      { title: "React", img: reactJS },
      { title: "VanillaCSS", img: css },
      { title: "Axios", img: axios },
    ],
  },
  {
    title: "TodoApp",
    img: "",
    desc: "",
    stack: [
      { title: "React", img: reactJS },
      { title: "VanillaCSS", img: css },
    ],
  },
  {
    title: "CocktailTree",
    img: "",
    desc: "",
    stack: [
      { title: "React", img: reactJS },
      { title: "VanillaCSS", img: css },
    ],
  },
];
export const stack = [
  { title: "HTML", img: "" },
  { title: "CSS", img: "" },
  { title: "JS", img: "" },
  { title: "Git", img: "" },
  { title: "GitHub", img: "" },
  { title: "React", img: "" },
  { title: "TailwindCSS", img: "" },
  { title: "BootstrapCSS", img: "" },
];

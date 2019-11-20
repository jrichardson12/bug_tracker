import React from 'react';
import logo from './logo.svg';
import ProjectList from './projects/project_list'
import './App.css';

const mockProjectList = [
  {id: 1, name: "Job Hunt", img: "Some Img", lead: "jrichardson12"},
  {id: 2, name: "Portfolio", img: "Some Img", lead: "jrichardson12"},
  {id: 3, name: "Wedding", img: "Some Img", lead: "jrichardson12"}
];

const App = () => (
  <div>
    <ProjectList projects={mockProjectList} />
  </div>
)

export default App;

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/health', (req,res) => res.json({ ok:true }));
app.get('/api/projects', (req,res) => res.json([
  {title:'AI Analytics Dashboard',description:'Turn business data into clear decisions.',stack:['Python','ML','JavaScript']},
  {title:'News Intelligence Platform',description:'Fast news discovery with category browsing.',stack:['Node.js','Express','Vite']},
  {title:'Full-Stack Business App',description:'REST API, persistence and responsive UI.',stack:['PHP','MySQL','JavaScript']}
]));
app.listen(port, () => console.log('Portfolio API running on port '+port));
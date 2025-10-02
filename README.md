# USIU First-Year Companion

A simple companion web app for freshman USIU students.  
It helps estimate weekly transport and snack costs, shows potential savings, and allows toggling between light/dark themes.  

--
- Personalized greeting (asks for your name on load).  
- Weekly **transport + snack cost estimator** using prompts.  
- Shows total weekly cost and potential savings (e.g., 10% less).  
- **Theme toggle** (current/light/dark mode).  
- Runs in **Docker/Nginx**  

---

##  Project Structure
firstyear-comp/
├─ design/
│ ├─ wireframe-estimator.png 
│ └─ notes.md 
├─ public/
│ ├─ index.html # Main page
│ ├─ styles.css # Styling
│ └─ script.js # JS
├─ Dockerfile 
├─ .dockerignore 
└─ README.md 


Run with docker 

1. build the image

    docker build -t bosirejoy/firstyearcomp .

2. run the container

docker run --rm -d -p 8080:80 bosirejoy/firstyearcomp

3. open in browser

http://localhost:8080/

Needs Brief:  design/notes.md

Wireframe:  design/wireframe-estimator.png

 github repo link : https://github.com/bosirejoy33/firstyear-comp.git
 
\\ docker tags https://hub.docker.com/r/bosirejoy33/firstyear-comp/tags

 \\ live site : https://bosirejoy33.github.io/firstyear-comp/
 



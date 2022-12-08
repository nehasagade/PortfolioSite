/**
 * Script for all pages
 */
"use strict";

// //get the buttons and create event listeners
// const previous = document.querySelector(".prev");
// const next = document.querySelector(".next");

// previous.addEventListener("click", previousSlide);
// next.addEventListener("click", nextSlide);

// let slideIndex = 0;

// showSlide();

// function showSlide() {
//     // Populate an array with objects of the slideshow (my projects)
//     const myPortfolio = {name:"My Portfolio", image: "MyPortfolio.png", description: "This website was created using HTML, CSS, and vanilla JavaScript.", alt:"Project Screenshot"};

//     const webDevNotes = {name: "Neha's Notes", image: "", description:"This was my first website that I created as part of Codecademy's Web Development course. It's a reference sheet for HTML and CSS, made with HTML and CSS.", alt: "Project Screenshot", githubLink: "https://github.com/nehasagade/nehasnotes", liveLink: "https://nehasagade.github.io/nehasnotes/"};

//     const projects = [myPortfolio, webDevNotes];

//     if (slideIndex >= projects.length) {
//         slideIndex = 0;
//     }

//     if (slideIndex === -1) {
//         slideIndex = projects.length -1;
//     }

//     // Add the iamge
//     const slideImage = document.querySelector(".slideImage img");
//     slideImage.src = "images/" + projects[slideIndex].image;
//     slideImage.alt = projects[slideIndex].alt;

//     // Add the project title
//     const projectTitle = document.querySelector(".title");
//     projectTitle.innerHTML = projects[slideIndex].name;

//     // Add the description
//     const projectDescription = document.querySelector(".description");
//     projectDescription.innerHTML = projects[slideIndex].description;

//     // Links
//     const githubLink = document.getElementById("githubLink");
//     githubLink.href = projects[slideIndex].githubLink;

//     const liveLink = document.getElementById("liveLink");
//     liveLink.href = projects[slideIndex].liveLink;
// }

// function previousSlide() {
//     slideIndex--;
//     showSlide();
// }

// function nextSlide() {
//     slideIndex++;
//     showSlide();
// }

// DISPLAY ALL PROJECTS
let allProjects = document.getElementById("allProjects");
allProjects.addEventListener("DOMContentLoaded", showProjects());

function showProjects(){
    //Populate an array with objects of the slideshow (my projects)
    const myPortfolio = {name:"My Portfolio", image: "MyPortfolio.png", description: "This website was created using HTML, CSS, and vanilla JavaScript.", alt:"Project Screenshot", githubLink: "", liveLink: ""};

    const webDevNotes = {name: "Neha's Notes", image: "", description:"This was my first website that I created as part of Codecademy's Web Development course. It's a reference sheet for HTML and CSS, made with HTML and CSS.", alt: "Project Screenshot", githubLink: "https://github.com/nehasagade/nehasnotes", liveLink: "https://nehasagade.github.io/nehasnotes/"};

    const projects = [myPortfolio, webDevNotes];

    // 
    let allProjects = document.getElementById("allProjects");

    projects.forEach(project => {
        const projectsDiv = document.createElement("div");
        projectsDiv.setAttribute("class", "projects");
        
        const projectImageDiv = document.createElement("div");
        projectImageDiv.setAttribute("class", "projectImage");

        let projectImage = document.createElement("img");
        projectImage.src = `images/${project.image}`;
        projectImage.alt = project.alt;
        projectImage.width = 480;
        projectImage.length = 340;

        projectImageDiv.appendChild(projectImage);
        projectsDiv.appendChild(projectImageDiv);

        const projectDetailsDiv = document.createElement("div");
        projectDetailsDiv.setAttribute("class", "projectDetails");

        let projectTitle = document.createElement("h3");
        projectTitle.setAttribute("class", "projectTitle");
        projectTitle.textContent = project.name;
        projectDetailsDiv.appendChild(projectTitle);
        
        let projectDrescription = document.createElement("p");
        projectDrescription.setAttribute("class", "projectDescription");
        projectDrescription.textContent = project.description;
        projectDetailsDiv.appendChild(projectDrescription);
        
        if (project.githubLink.length > 0) {
            let projectGithubLink = document.createElement("a");
            projectGithubLink.href = project.githubLink;
            projectGithubLink.textContent = "GitHub";
            projectDetailsDiv.appendChild(projectGithubLink);
        }
        
        if (project.liveLink.length > 0) {
            let projectLiveLink = document.createElement("a");
            projectLiveLink.href = project.liveLink;
            projectLiveLink.textContent = "Live";
            projectDetailsDiv.appendChild(projectLiveLink);
        }

        projectsDiv.appendChild(projectDetailsDiv);
        allProjects.appendChild(projectsDiv);

    })
}
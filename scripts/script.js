/**
 * Script for all pages
 */
"use strict";

// DISPLAY ALL PROJECTS
let allProjects = document.getElementById("allProjects");
allProjects.addEventListener("DOMContentLoaded", showProjects());

function showProjects(){
    //Populate an array with objects of the slideshow (my projects)
    const beanSceneWeb = {name: "Bean Scene Bookings", image: "", description: "This web app was created using ASP .NET with Entity Framework and MVC architecture. Customers, staff, and managers of medium-sized restaurant Bean Scene can make and manage bookings.", alt: "Screenshot of Bean Scene homepage", githubLink: "", liveLink: ""};

    const beanSceneMobile = {name: "Bean Scene Ordering", image: "", description: "This mobile app was created using React Native, a C# Rest API, and a MongoDB. Staff, and managers of Bean Scene can make and manage orders.", alt: "Screenshot of Bean Scene mobile app", githubLink: "", liveLink: ""};

    const myPortfolio = {name:"My Portfolio", image: "MyPortfolio.png", description: "This website was created using HTML, CSS, and vanilla JavaScript.", alt:"Project Screenshot", githubLink: "https://github.com/nehasagade/PortfolioSite", liveLink: ""};

    const webDevNotes = {name: "Neha's Notes", image: "NehasNotes.png", description:"This was my first website that I created as part of Codecademy's Web Development course. It's a reference sheet for HTML and CSS, made with HTML and CSS.", alt: "Project Screenshot", githubLink: "https://github.com/nehasagade/nehasnotes", liveLink: ""};

    const projects = [beanSceneWeb, beanSceneMobile, myPortfolio, webDevNotes];

    // Get the allProjects div, and the required elements for each project. 
    let allProjects = document.getElementById("allProjects");

    projects.forEach(project => {
        const projectsDiv = document.createElement("div");
        projectsDiv.setAttribute("class", "projects");
        
        const projectImageDiv = document.createElement("div");
        projectImageDiv.setAttribute("class", "projectImage");

        let projectImage = document.createElement("img");
        projectImage.src = `images/${project.image}`;
        projectImage.alt = project.alt;

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
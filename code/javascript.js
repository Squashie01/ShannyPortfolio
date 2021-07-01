const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}




//  Projects JavaScript

function getProjects()
{
    return fetch("../files/projects.json")
    .then(response => response.json())
    .then(data => {
        return data;
    })
}


function showProjects(data){
    let projectsContainer = document.querySelector(".projects");
    
    let projectsHTML = "";

    for (let i = 0; i < data.length; i++)
    {
        if(i %2 != 0)
        {
            projectsHTML += 
            '<div class="project1">' +
            '<div class="project-info">' +
            '<h3>' + data[i].title + '</h3>' +
            '<span>' + data[i].description + '</span>' +
            '<a href="' + data[i].url + '"> <button class="vist-website"> Visit Website </button> </a>' +
            '</div>' +
            '<div class="project-img">' +
            '<img src="' + data[i].image + '" alt="">' +
            '</div>' +
            '</div>' +
            '<div class="horizontal-Line"></div>';
        }

        else
        {
            projectsHTML += 
            '<div class="project2">' +
            '<div class="project-img">' +
            '<img src="' + data[i].image + '" alt="">'+
            '</div>' +
            '<div class="project-info">' +
            '<h3>' + data[i].title + '</h3>' +
            '<span>' + data[i].description + '</span>' +
            '<a href="' + data[i].url + '"> <button class="vist-website"> Visit Website </button> </a>' +
            '</div>' +
            '</div>' +
            '<div class="horizontal-Line"></div>';
        }
    }

    projectsContainer.innerHTML = projectsHTML;
}

getProjects().then(data => {
    showProjects(data);
});
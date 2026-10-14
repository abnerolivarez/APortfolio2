


/* =========================================================
   PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVBAR
========================================================= */

const mobileLinks =
    document.querySelectorAll("#mobile .nav-link");

const mobileMenu =
    document.getElementById("mobile");


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        const navbar =
            bootstrap.Collapse.getInstance(mobileMenu);

        if (navbar) {

            navbar.hide();

        }

    });

});



/* =========================================================
   SCROLL REVEAL
========================================================= */

const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document.querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });



/* =========================================================
   PROJECT FILTER
========================================================= */

const filterButtons =
    document.querySelectorAll(".filter");


const projects =
    document.querySelectorAll(".project");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {


        /* Remove active class */

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        /* Add active class */

        button.classList.add("active");


        /* Get category */

        const filter =
            button.dataset.filter;


        /* Filter projects */

        projects.forEach(project => {

            const category =
                project.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                project.classList.remove("hide");

            } else {

                project.classList.add("hide");

            }

        });

    });

});



/* =========================================================
   PROJECT MODAL
========================================================= */

const modalTitle = document.getElementById("modalTitle");

const modalText = document.getElementById("modalText");

const modalTags = document.getElementById("modalTags");

const modalIcon = document.getElementById("modalIcon");

const imageProject = document.getElementById("image-project"); 


/*
    Project information
*/

const projectData = {

    "Brew & Bean": {
        id:1,
        description:
            "A sophisticated coffee shop website with menu browsing, product details, category filtering, ordering functionality and animated interface elements.",

        technologies:
            [
                "Bootstrap",
                "JavaScript",
                "HTML",
                "CSS",
                "Responsive UI"
            ],
        img:"image/project1.jpg",
        icon:"fa-solid fa-mug-hot",
        link:"https://abnerolivarez.github.io/Coffee-Project/"

    },


    "Restaurant": {
        id:2,
        description:
            "A professional business website for a printing and graphic communications service. The interface focuses on services, branding, clear calls-to-action and responsive design.",

        technologies:
            [
                "HTML",
                "CSS",
                "Bootstrap",
                "JavaScript",
                "Web3Forms"
            ],

        img:"image/project2.jpg",
        icon: "fa-solid fa-print",
        link:"https://abnerolivarez.github.io/CSS-Project3/",

    },


    "E-Commerce Interface": {
        id:3,
        description:
            "A Laravel-based e-commerce interface inspired by modern shopping platforms. It includes product browsing, product details, cart functionality, account pages and order-oriented flows.",

        technologies:
            [
                "Laravel",
                "PHP",
                "MySQL",
                "JavaScript",
                "Bootstrap"
            ],

        img: "image/project3.jpg",
        icon: "fa-solid fa-cart-shopping",
        link:"https://abnerolivarez.github.io/JavaScript-2-final/",

    },


    "Car Rental UI": {
        id:4,
        description:
            "A responsive car rental interface featuring vehicle filtering, availability states, favorites, rental validation and interactive booking functionality.",

        technologies:
            [
                "Bootstrap",
                "Vanilla JavaScript",
                "LocalStorage",
                "HTML",
                "CSS"
            ],

        img:"image/project4.jpg",
        icon: "fa-solid fa-car",
        link:"https://abnerolivarez.github.io/Car-Rental-/index.html",

    },


    "Head Phone": {
        id:5,
        description:
            "Escape into your world. Premium sound meets lightweight, all-day comfort for an unmatched listening experience.",

        sound:
            [
                "Bootstrap",
                "Vanilla JavaScript",
                "LocalStorage",
                "HTML",
                "CSS"
            ],

        img:"image/project5.jpg",
        icon: "fa-solid fa-headphones",
        link:"https://abnerolivarez.github.io/Javascript2-NewPortal/",

    }

};



/*
    Open project modal
*/

document
    .querySelectorAll(".project-link")
    .forEach(button => {


        button.addEventListener("click", () => {


            const projectName = button.dataset.project;


            const data = projectData[projectName];


            if (!data) {

                return;

            }


            /* Title */

            modalTitle.textContent = projectName;


            /* Description */

            modalText.textContent = data.description;


            /* Icon */

            modalIcon.innerHTML = `
                    <i class="${data.icon}"></i>
                `;

            imageProject.innerHTML = `
                
                <a href="${data.link}" target="_blank">
                    <img src="${data.img}" alt="Image Project" 
                    class="data-image img-fluid w-100 mb-2 rounded-2">
                </a>
                `
                


            /* Technologies */

            modalTags.innerHTML = "";


            data.technologies.forEach(technology => {

                const tag = document.createElement("span");


                tag.textContent =
                    technology;


                modalTags.appendChild(tag);

            });

        });

    });



/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


function updateActiveNavigation() {


    let currentSection = "";


    const scrollPosition =
        window.scrollY + 150;


    sections.forEach(section => {


        const sectionTop =
            section.offsetTop;


        const sectionHeight =
            section.offsetHeight;


        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
                sectionTop + sectionHeight
        ) {

            currentSection =
                section.id;

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();



/* =========================================================
   BACK TO TOP
========================================================= */

const backTop = document.getElementById("backtop");

window.addEventListener("scroll",() => {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    }
);



backTop.addEventListener("click",() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);



/* =========================================================
   HERO IMAGE FALLBACK
========================================================= */

const profileImage =
    document.querySelector(
        ".portrait img"
    );


const initials = document.querySelector(".initials");

if (profileImage) {

    profileImage.addEventListener("load",() => {
            initials.style.display ="none";
        }
    );

    profileImage.addEventListener("error",() => {

            profileImage.style.display = "none";

            initials.style.display = "block";
        }
    );

}



/* =========================================================
   CURRENT YEAR
========================================================= */

const year =
    new Date().getFullYear();


const footer =
    document.querySelector(".footer span");


if (footer) {

    footer.textContent =
        `© ${year} Abner Olivarez`;

}

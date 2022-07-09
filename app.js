// MENU

const btnMenu = document.querySelector(".menu-btn");
const links = document.querySelector(".links");
const linksContainer = document.querySelector(".links-container");
const banner = document.querySelector(".banner");

btnMenu.addEventListener("click", () => {
  // links.classList.toggle('show')
  // console.log('ok')

  //LINKS

  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
 
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
    banner.style.backgroundColor = "rgba(228, 228, 228, 0.171)";
  } else {
    linksContainer.style.height = 0;
    banner.style.backgroundColor = "";
  }
});

const nav = document.querySelector(".nav-header");

window.addEventListener("scroll", () => {
  const navHeight = nav.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;
  const btnTop = document.querySelector(".to-top");
  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }

  if (scrollHeight > 400) {
    btnTop.classList.add("show-top");
  }
  else {
      btnTop.classList.remove('show-top')
  }
 

});

const scrollLinks = document.querySelectorAll('.scrollLinks')

scrollLinks.forEach((link) => {
    
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const menuHeight = btnMenu.getBoundingClientRect().height;
        let position = element.offsetTop - menuHeight;
        console.log("about")
        // console.log(element)
        // console.log(menuHeight)
        window.scrollTo({
          top: position,
            left: 0,
        });

        linksContainer.style.height = 0

        banner.style.backgroundColor = "";
    })
  
});

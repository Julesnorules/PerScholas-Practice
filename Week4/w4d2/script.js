const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

const mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)'

mainEl.innerHTML = '<h1>SEL ROCKS</h1>'

mainEl.classList.add('flex-ctr');

const topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

topMenuEl.classList.add('flex-around');

for(link of menuLinks) {
  let newAnchor = document.createElement('a')
  newAnchor.setAttribute('href', link.href)
  newAnchor.textContent = link.text
  topMenuEl.appendChild(newAnchor)
}

const subMenuEl = document.querySelector("#sub-menu");

subMenuEl.style.height ='100%';

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

subMenuEl.classList.add('flex-aroundto');

subMenuEl.style.position = 'absolute'

subMenuEl.style.top = '0'

const topMenuLinks = document.querySelectorAll('a');

let showingSubMenu = false;

topMenuEl.addEventListener('click', (event) => {
  event.preventDefault();
  if(event.target === document.getElementById('top-menu'))
    return;
  let activEl = document.getElementsByClassName("active");
  if (activEl.length > 0) {
      activEl[0].className = activEl[0].className.replace("active", "");
      showingSubMenu = false;
      subMenuEl.style.top = '0';
    return;
  } 
  
  event.target.classList.add("active");
  for(let i = 0; i<menuLinks.length; i++){
    if(event.target.innerHTML === menuLinks[i].text){
      if (menuLinks[i].hasOwnProperty("subLinks")){
        showingSubMenu = true;
        console.log(showingSubMenu);
      } else{
          showingSubMenu = false;
          console.log(showingSubMenu);
        }
      if(showingSubMenu === true){
        console.log(menuLinks[i].subLinks);
        subMenuEl.style.top = '100%';
      } else {            
          subMenuEl.style.top = '0';
        }
    }
  
  }

})

let buildSubMenu = (subLinks) => {
  subMenuEl.innerHTML = "";
  subLinks.forEach(link => {
    const newLinkEl = document.createElement('a');
    newLinkEl.setAttribute('href', link.href);
    newLinkEl.textContent = link.text;
    subMenuEl.appendChild(newLinkEl);
  });

}

subMenuEl.addEventListener('click', function(event2){
  event2.preventDefault();
  const link = event2.target;
  if (link.tagName != 'a') return;
    console.log(link.textContent);
  showingSubMenu = false;
  subMenuEl.style.top = '0';
  topMenuLinks.forEach(function(link){
    link.classList.remove('active');
  });
  mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
});

// Attach a delegated 'click' event listener to subMenuEl.

// The first line of code of the event listener function should call the event object's preventDefault()method.

// The second line of code function should immediately return if the element clicked was not an <a>element.

// console.logthe content of the <a>to verify the handler is working.

// Task 6.1
// Next, the event listener should:

// Set showingSubMenuto false.
// Set the CSS topproperty of subMenuElto 0.
// Task 6.2
// Remove the class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.

// Task 6.3
// Update the contents of mainElto the contents of the <a>element, within an <h1>, clicked within subMenuEl.

// Task 6.4
// If the ABOUT link is clicked, an <h1>about</h1>should be displayed.

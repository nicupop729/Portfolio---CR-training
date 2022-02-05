const hamburgerBtn = document.querySelector('.hamburger-btn');

hamburgerBtn.addEventListener('click', () => {
  const textHTML = `
  <div
  class="toggle-nav"
 >
  <span id="close-icon-id">
    <ion-icon name="close-outline"></ion-icon>
  </span>
  <ul>
  <li id="portf-mob-nav">Portfolio</li>
  <li id="ab-mob-nav">About</li>
  <li id="cont-mob-nav">Contact</li>
  </ul>
</div>
  `;
  document.body.insertAdjacentHTML('afterbegin', textHTML);

  const menuDiv = document.querySelector('.toggle-nav');
  const closeIcon = document.querySelector('#close-icon-id');
  const menuPortfolio = document.querySelector('#portf-mob-nav');
  const menuAbout = document.querySelector('#ab-mob-nav');
  const menuContact = document.querySelector('#cont-mob-nav');
  menuDiv.style.backgroundColor = '#fff';
  menuDiv.style.display = 'block';

  closeIcon.addEventListener('click', () => {
    menuDiv.style.display = 'none';
  });

  menuPortfolio.addEventListener('click', () => {
    menuDiv.style.display = 'none';
    document.location = '#projects';
  });

  menuAbout.addEventListener('click', () => {
    menuDiv.style.display = 'none';
    document.location = '#about-me';
  });

  menuContact.addEventListener('click', () => {
    menuDiv.style.display = 'none';
    document.location = '#contact';
  });
});

header .gnav {
  visibility: unset;
}

.gnav-wrapper {
  position: relative;
  background: #FFF;
  width: 100%;
  height: 64px;
  display: flex;
  border-bottom: 1px solid #EAEAEA;
}

.gnav {
  visibility: unset;
  display: grid;
  grid-template-areas: 'toggle  brand   profile logo'
                       'search  search  search  search'
                       'navlist navlist navlist navlist';
  grid-template-columns: 64px 1fr auto 64px;
  grid-template-rows: 64px auto;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  flex: 0 1 100%;
  box-sizing: border-box;
}

.gnav a {
  color: #2e2e2e;
  text-decoration: none;
}

.gnav a.newsletter-modal-cta {
  display: inline-flex;
  align-self: center;
  justify-self: center;
  cursor: pointer;
  background-color: #1473E6;
  color: white;
  font-size: 14px;
  width: auto;
  padding: 8px 16px;
  margin: 10px;
  border-radius: 100px;
  font-weight: bold;
}

.gnav a.newsletter-modal-cta:hover {
  background-color: #0F66D0;
}

.gnav.is-Open {
  position: fixed;
  left: 0;
  right: 0;
  max-height: 100%;
  overflow: scroll;
}

button.gnav-toggle {
  grid-area: toggle;
  font-size: 20px;
  padding: 0;
  border: none;
  background: none;
}

button.gnav-toggle:after {
  content: "\2630";
  font-weight: 700;
}

.gnav.is-Open button.gnav-toggle::after {
  content: "\2715";
}

.gnav .gnav-brand {
  grid-area: brand;
  display: flex;
  align-items: center;
  color: #fa0f00;
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
}

.gnav .gnav-logo {
  grid-area: logo;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 41px;
  padding: 0 8px;
  box-sizing: border-box;
}

.gnav .gnav-logo img {
  width: 25px;
}

.gnav .gnav-mainnav {
  grid-area: navlist;
  display: none;
  margin: 0;
  padding: 0;
  list-style: none;
  background: #FFF;
}

.gnav.is-Open .gnav-mainnav {
  display: block;
}

.gnav-navitem {
  font-size: 14px;
}

.gnav-navitem.has-Menu.is-Open:before {
  background: #969796;
  position: absolute;
  width: 4px;
  top: 0;
  bottom: 0;
  left: 0;
  display: block;
  content: '';
  z-index: 1;
}

.gnav-navitem a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 12px;
  color: rgb(44, 44, 44);
  transition: background-color .1s ease;
}

.gnav-navitem.has-Menu.is-Open > a {
  padding: 20px 24px;
  font-weight: 700;
  position: relative;
  border-bottom: none;
  background-color: #FAFAFA;
}

.gnav-navitem.has-Menu.is-Open > a:before {
  content: '';
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 0;
  display: block;
  border-bottom: 1px solid #D1D1D1;
}

.gnav-navitem > a:hover {
  background-color: #FAFAFA;
}

.gnav-navitem > a {
  border-bottom: solid 1px #f3f3f3;
}

.gnav-navitem.has-Menu > a:after {
  display: flex;
  width: 5px;
  height: 5px;
  border-top-width: 0;
  border-left-width: 0;
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-style: solid;
  border-color: #2c2c2c;
  transform-origin: 75% 75%;
  transform: rotate(45deg);
  transition: transform .1s ease;
  content: '';
  margin-left: 5px;
  margin-right: 3px;
}

.gnav-navitem.has-Menu.is-Open > a:after {
  transform: rotate(-135deg);
}

.gnav-navitem-menu {
  display: none;
  padding: 14px 0;
  background-color: #FAFAFA;
}

.gnav-navitem.has-Menu.is-Open {
  position: relative;
}

.gnav-navitem.has-Menu.is-Open .gnav-navitem-menu {
  display: block;
}

.gnav-navitem-menu ul {
  padding-left: 0;
  margin: 0;
  list-style: none;
}

.gnav-navitem-menu a {
  padding: 12px 36px;
  white-space: nowrap;
}

.gnav-navitem-menu a:hover {
  color: #1473E6;
  background-color: #F5F5F5;
}

.gnav-promo {
  width: 260px;
  border: 1px solid #D8D8D8;
  background: #FFF;
  margin: 12px 0px 0px 36px;
}

.gnav-promo p:nth-child(2) {
  font-weight: 700;
  margin: 24px 24px 12px 24px;
}

.gnav-promo p:nth-child(3) {
  margin: 0px 24px 12px 24px;
}

.gnav-promo p:first-of-type,
.gnav-promo p:last-of-type {
  margin: 0;
}

.gnav-promo picture,
.gnav-promo img {
  display: block;
}

.gnav-promo img {
  width: 100%;
}

.gnav-promo a {
  color: #1473E6;
  font-weight: 700;
  padding: 24px;
}

.gnav-search {
  grid-area: search;
}

.gnav-search button.gnav-search-button {
  overflow: hidden;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 6px; /* Two pixel offset due to svg crop */
  display: none;
  align-items: center;
}

.gnav.is-Open .gnav-search-bar {
  display: block;
}

.gnav-search button svg {
  width: 20px;
  height: 20px;
}

.gnav-search .gnav-search-button:hover {
  fill: #2b9af3;
}

.gnav-search.is-Open .gnav-search-button:after {
  content: "\2715";
  width: 20px;
  /* line-height: 1; */
  font-size: 24px;
  padding: 1px 0 0 0;
}

.gnav-search.is-Open .gnav-search-button svg {
  display: none;
}

.gnav-search-bar {
  display: none;
  background: #FFF;
  border-bottom: 1px solid #EAEAEA;
  padding-bottom: 20px;
}

.gnav-curtain.is-Open {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.75);
  -webkit-backdrop-filter: blur(1em);
  backdrop-filter: blur(1em);
}

.gnav-search-field {
  position: relative;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  padding: 0 12px;
  box-sizing: border-box;
}

.gnav-search-field svg {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 6px;
  left: 18px;
  fill: rgb(110, 110, 110);
  transition: fill 130ms ease-in-out;
}

.gnav-search-field:hover svg {
  fill: rgb(44, 44, 44);
}

.gnav-search-field:hover .gnav-search-input {
  border-color: rgb(179, 179, 179);
}

.gnav-search-field .gnav-search-input {
  display: block;
  width: 100%;
  line-height: 30px;
  border: 1px solid;
  border-color: rgb(202, 202, 202);
  border-radius: 4px;
  padding: 0 30px;
  font-size: 14px;
  font-family: 'adobe-clean';
  outline: none !important;
  -webkit-appearance: none;
  box-sizing: border-box;
  transition: border-color 130ms ease-in-out, box-shadow 130ms ease-in-out;
}

.gnav-search-field a {
  line-height: 32px;
  background: rgb(20, 115, 230);
  color: white;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 600;
  padding: 0 16px;
}

.gnav-search-field .gnav-search-input:focus {
  border-color: rgb(42, 124, 223);
}

.gnav-search-input::placeholder {
  font-style: italic;
  font-weight: 400;
  color: #8e8e8e;
  transition: color 130ms ease-in-out;
}

.gnav-search-input:focus::placeholder,
.gnav-search-field:hover .gnav-search-input::placeholder {
  color: #2c2c2c;
}

.gnav-search-results {
  padding: 0 20px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
  margin-top: 20px;
}

.gnav-search-results .article-card {
  margin: 0;
  width: unset;
  max-width: unset;
}


@media (min-width: 1200px) {
  .gnav-search-results .article-card:nth-of-type(2n) {
    margin-right: unset;
  }
}


.gnav-search-highlight {
  background-color: transparent;
  position: relative;
  z-index: 1;
}

.gnav-search-highlight:after {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: -4px;
  right: -4px;
  background-color: rgba(255, 208, 0, 0.3);
  border-radius: 4px;
}

.gnav-search-results .article-card-body h3 {
  overflow: unset;
  overflow-y: clip;
}

.gnav-profile {
  display: flex;
  justify-content: center;
  position: relative;
  min-width: 54.25px;
  padding: 0 8px;
  box-sizing: border-box;
}

.gnav-profile .gnav-signin {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.gnav-profile .gnav-profile-button {
  padding: 0 8px;
  border: none;
  background: none;
  cursor: pointer;
}

.gnav-profile .gnav-profile-button .gnav-profile-img {
  display: block;
  width: 30px;
  border-radius: 4px;
}

.gnav-profile .gnav-profile-menu {
  display: none;
  position: fixed;
  right: 0;
  top: 64px;
  min-width: 320px;
  background: #FFF;
  border: 1px solid #E1E1E1;
  border-radius: 0 0 4px 4px;
  overflow: hidden;
}

.gnav-profile.is-Open .gnav-profile-menu {
  display: unset;
}

.gnav-profile-header {
  display: flex;
  padding: 20px;
  align-items: start;
}

.gnav-profile-header .gnav-profile-img {
  width: 64px;
  height: 64px;
  border-radius: 4px;
}

.gnav-profile-details {
  margin-left: 16px;
  align-self: stretch;
  display: flex;
  flex-wrap: wrap;
}

.gnav-profile-name {
  font-size: 18px;
  line-height: 1;
  margin: 0;
  font-weight: 700;
  flex: 0 0 100%;
}

.gnav-profile-email {
  color: #707070;
  font-size: 14px;
  line-height: 1.25;
  margin: 0;
  flex: 0 0 100%;
}

.gnav-profile-account {
  margin: 0;
  text-decoration: underline;
  font-size: 14px;
  align-self: flex-end;
  flex: 0 0 100%;
}

.gnav-profile-actions {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 14px;
}

.gnav-profile-actions a {
  padding: 14px 20px;
  display: block;
  border-top: 1px solid #E1E1E1;
  box-sizing: border-box;
  color: #4b4b4b;
}

.gnav-profile-menu a:hover {
  background-color: #FAFAFA;
}

@media (min-width: 1200px) {
  .gnav {
    grid-template-areas: 'brand navlist search profile logo';
    grid-template-columns: auto 1fr auto auto auto;
    grid-template-rows: unset;
    padding: 0 12px 0 0;
  }

  .gnav.is-Open {
    position: unset;
  }

  .gnav-toggle {
    display: none;
  }

  .gnav .gnav-brand {
    padding: 0 20px;
  }

  .gnav.is-Open .gnav-search-bar {
    display: none;
  }

  .gnav-search.is-Open .gnav-search-bar {
    display: block;
  }

  .gnav.is-Open .gnav-mainnav,
  .gnav .gnav-mainnav {
    display: flex;
    background: unset;
  }

  .gnav-navitem {
    display: flex;
    align-items: stretch;
    position: relative;
  }

  .gnav-navitem.has-Menu.is-Open:before {
    all: unset;
  }

  .gnav-navitem.has-Menu > a {
    border-bottom: unset;
  }

  .gnav-navitem.has-Menu.is-Open > a {
    font-weight: unset;
    padding: 20px;
  }
  

  .gnav-navitem.has-Menu.is-Open > a:before {
    all: unset;
  }

  .gnav-navitem a {
    justify-content: unset;
    line-height: unset;
    padding: 20px;
    border-bottom: unset;
  }

  .gnav-navitem-menu.medium-Variant {
    padding: 30px 40px 40px 20px;
  }

  .gnav-navitem-menu > * {
    grid-row: 1;
  }

  .gnav-navitem-menu a {
    padding: 6px 20px;
  }

  .gnav-promo {
    margin: 10px 0px 0px 36px;
  }

  .gnav-promo a {
    padding: 24px;
  }

  .gnav-navitem.has-Menu.is-Open .gnav-navitem-menu {
    display: grid;
    position: absolute;
    top: 100%;
    border-top: 1px solid #EAEAEA;
    box-shadow: 0px 3px 3px rgb(0 0 0 / 20%);
  }

  .gnav-search {
    display: flex;
  }

  .gnav-search button.gnav-search-button {
    display: flex;
  }

  .gnav-search-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 64px;
    max-height: calc(100% - 64px);
    overflow: scroll;
  }

  .gnav-search.is-Open .gnav-search-bar {
    display: block;
  }
  
  .gnav-search-results {
    margin: 20px auto;
  }

  .gnav-search-results .article-card:first-of-type {
    margin-top: unset;
  }

  .gnav-profile .gnav-profile-menu {
    position: absolute;
    top: 100%;
  }
}

@media (min-width: 1440px) {
  .gnav, .gnav-search-field, .gnav-search-results {
    max-width: 1440px;
  }
}

<template>
<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light row no-gutters">
    <a class="navbar-brand" href="http://cooking.megabrielson.com">mCooking</a>
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <div class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/home">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/list">List</router-link>
        </li>
      </div>
    </div>
  </nav>
  <p>
    <router-view />
  </p>
  <footer>
    <a href="https://github.com/megangabrielson/Recipe-Improved">Github Repository</a>
  </footer>
</body>
</template>

<script>
export default {}
</script>

<style>
form {
  font-size: 1.2em;
  text-align: center;
  margin: 10px 0 10px 0;
}

input {
  background-color: #e9ad99;
}

input:focus {
  outline-color: white;
  outline-width: .25px;
}

button {
  margin: 8px;
  border-radius: 12px;
  background-color: #605e61;
  color: white;
  border: none;
  transition-duration: 0.4s;
}

button:active {
  background-color: gray;
}

textarea {
  width: 100%;
  height: 600px;
  resize: none;
  background-color: silver;
}

/* Menu */
.bg-light {
  background-color: #a8b6b9 !important;
}

.navbar-light .navbar-brand {
  color: #605e61 !important;
  font-size: 2em;
}

.navbar-light .navbar-nav .nav-link {
  color: #605e61 !important;
  font-size: 1.2em;
}

.navbar-expand-lg .navbar-nav .nav-link {
  padding: 5px 30px;
}

.dropdown-item,
.dropdown-menu {
  background-color: #e9ad99;
  color: #605e61 !important;
}

.dropdown-divider {
  border-color: #605e61 !important;
}

.navbar {
  border-bottom: .5px #605e61 solid;
  font-family: 'Montserrat', sans-serif;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #3f3d40 !important;
}

/* General Page */
body {
  background-color: #e8c4aa;
  color: #605e61;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

a {
  color: #605e61;
}

a:hover {
  color: black;
}

h1 {
  font-size: 3em;
  text-align: center;
  font-family: 'Gloria Hallelujah', cursive;
  padding: 25px 0 25px 0;
}

h2 {
  font-size: 1.5em;
  padding: 0 0 10px 0;
  font-weight: bolder;
}

h3 {
  font-size: 1.1em;
  font-weight: bolder;
  padding: 15px 0 10px 0;
}

img {
  width: 100%;
  vertical-align: center;
  border: #d99d90 dotted 8px;
  padding: 5px;
  margin: 15px;
}

.col-lg img {
  border: none;
  padding: 0;
}

.product img {
  width: 200px;
  height: 200px;
  border: none;
}

.main-page {
  padding: 0 10px;
}

#signature {
  font-family: 'Dancing Script', cursive;
  font-size: 2em;
}

strong {
  font-weight: lighter;
  font-size: 1.3em;
}

footer {
  background-color: #605e61;
  padding: 10px;
  text-align: center;
  margin: 10px 0 0 0;
}

footer a {
  color: #e0cfb6;
}

footer a:hover {
  color: #e8c4aa;
  font-size: 1.1em;
}

a:hover {
  text-decoration-line: none;
}

.hover-pic img {
  margin: 5px 0;
}

p {
  text-align: center;
  margin: 10px 10px;
}

/* Image transitions */
.hover-pic {
  cursor: pointer;
  height: 400px;
  position: relative;
  overflow: hidden;
  width: 400px;
  text-align: center;
  vertical-align: center;
}

.hover-pic .content {
  background-color: white;
  position: absolute;
  top: 0;
  color: gray;
  -webkit-transition: all 300ms ease-out;
  -moz-transition: all 300ms ease-out;
  -o-transition: all 300ms ease-out;
  -ms-transition: all 300ms ease-out;
  transition: all 300ms ease-out;
  opacity: 0;
  width: 400px;
  height: 400px;
  padding: 40% 5px;
  align-items: center;
}

.hover-pic:hover .content {
  opacity: 0.8;
}

.hover-pic .text {
  -webkit-transition: all 300ms ease-out;
  -moz-transition: all 300ms ease-out;
  -o-transition: all 300ms ease-out;
  -ms-transition: all 300ms ease-out;
  transition: all 300ms ease-out;
}

.hover-pic .text {
  opacity: 0;
  transition-delay: 0.2s;
  transition-duration: 0.3s;
}

.hover-pic:hover .text {
  opacity: 1;
}

.hover-pic {
  margin: auto;
}

.arrow img {
  background-size: contain;
  height: 225px;
  width: 100%;
  transform: rotateZ(-40deg);
  overflow: hidden;
}

.main {
  margin: 0 200px;
}

.divider hr {
  border: 3px gray solid;
}

.overview {
  font-size: 1.2em;
}

#picture {
  height: auto;
  width: 90%;
  padding: 10px;
  margin: 20px;
  float: right;
  margin-top: 50px;
}

#instructions {
  font-size: 1.3em;
  margin-right: 15%;
  padding-left: 10px;
  text-align: left;
}

#recipeName {
  font-size: 1.2em;
  padding-top: 20px;
  padding-left: 10px;
  margin-right: 15%;

}

@media screen and (max-width: 1000px) {
  .col-lg {
    text-align: center;
  }

  #picture {
    margin: 0;
    padding: 0;
    float: none;
  }

  #instructions {
    margin-right: 0;
    padding: 0 40px;
    text-align: left;
  }
}

/*
#605e61 //dark gray
#a8b6b9 //bluish
#3f3d40 //dark salmon
#e8c4aa //salmon
#d99d90 //black
#e0cfb6 //taupe */

#type {
  font-size: 1.2em;
  font-style: italic;
  padding-left: 10px;
  margin-top: -25px;
}

#similar {
  text-align: center;
  padding: 10px;
}

#recipeSubmit {
  background-color: #f8f9fa;
  border-style: outset;
}

#recipeInput {
  text-align: center !important;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #3f3d40 !important;
}


.product {
  display: grid;
  padding: 5px 10px 20px 10px;
  margin: 40px;
  border: #a8b6b9 solid 1.5px;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: content-box;
}
</style>

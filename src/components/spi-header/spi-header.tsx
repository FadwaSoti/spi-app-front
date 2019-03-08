import { Component } from "@stencil/core";

@Component({
  tag: "spi-header",
  styleUrl: "spi-header.scss"
})
export class SpiHeader {
  burger!: any;
  menu!: any;

  toggleBurger() {
    console.log("quizz!!");
    this.burger.classList.toggle("is-active");
    this.menu.classList.toggle("is-active");
  }

  render() {
    return (
      <nav
        class="navbar "
        role="navigation"
        aria-label="main navigation"
      >
        <div class="container">
          <div class="navbar-brand">
            <span class="navbar-item">
              <small class="id"><stencil-route-link url="/"><i class="fas fa-school"></i>&nbsp;&nbsp;&nbsp;SPI-ADM</stencil-route-link></small>
            </span>

            <a
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbar-content"
              onClick={() => this.toggleBurger()}
              ref={el => (this.burger = el)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div
            id="navbar-content"
            class="navbar-menu"
            ref={el => (this.menu = el)}
          >

<div class="navbar-end navbar-item has-dropdown is-hoverable">
<stencil-route-link url="/enseignant" activeClass="none">
 <a class="navbar-link">
 <i class="fas fa-chalkboard-teacher"></i> Enseignant
        </a></stencil-route-link>

        <div class="navbar-dropdown">
          <a href="/enseignant"class="navbar-item">
            Liste des enseignants
          </a>
          <a href="/enseignant-ajouter"class="navbar-item">
            Ajouter un enseignant
          </a>
          <a href="/enseignant-name"class="navbar-item">
            Chercher enseignant
          </a>
          
         
        </div>
      
    </div>
    <div class="navbar-end navbar-item has-dropdown is-hoverable">
<stencil-route-link url="/formation" activeClass="none">
 <a class="navbar-link">
 <i class="fas fa-chalkboard-teacher"></i> Formation
        </a></stencil-route-link>

        <div class="navbar-dropdown">
          <a href="/formation"class="navbar-item">
            Afficher liste des formations
          </a>
          <a href="/formation-ajouter"class="navbar-item">
            Ajouter formation
          </a>
          <a href="/formation-chercher"class="navbar-item">
            Chercher formation
          </a>
         
        </div>
      
    </div>
    <div class="navbar-end navbar-item has-dropdown is-hoverable">
<stencil-route-link url="/enseignant" activeClass="none">
 <a class="navbar-link">
 <i class="fas fa-chalkboard-teacher"></i> Promotion
        </a></stencil-route-link>

        <div class="navbar-dropdown">
          <a href="/enseignant/detail"class="navbar-item">
            Afficher promotion
          </a>
          <a href="/enseignant/add"class="navbar-item">
            Ajouter promotion
          </a>
          <a class="navbar-item">
            Chercher candidat
          </a>
         
        </div>
      
    </div>
    <div class="navbar-end navbar-item has-dropdown is-hoverable">
<stencil-route-link url="/enseignant" activeClass="none">
 <a class="navbar-link">
 <i class="fas fa-chalkboard-teacher"></i> Candidat
        </a></stencil-route-link>

        <div class="navbar-dropdown">
          <a href="/enseignant/detail"class="navbar-item">
            Afficher candidat
          </a>
          <a href="/enseignant/add"class="navbar-item">
            Ajouter candidat
          </a>
          <a class="navbar-item">
            Modifier Enseignant
          </a>
         
        </div>
      
    </div>

    </div>
    </div>
      </nav>

    );
  }
}
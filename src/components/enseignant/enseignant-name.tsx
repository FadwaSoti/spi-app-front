import { Component, State } from '@stencil/core';

@Component({
  tag: 'enseignant-name',
  styleUrl: 'enseignant-details.scss'
})

export class EnseignantName {

  @State() enseignant: any = "";

  InputName: HTMLInputElement;

  getens() {
    let nom = this.InputName.value;
    let url = 'https://api-dosispi.cleverapps.io/enseignants/nom/' + nom

    console.log(url)
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.enseignant = data;
      });
  }

  render() {
    if (this.enseignant == "") {
      return (

        <div class="center">
          <br></br>

          <div class="field has-addons">
            <div id="id1" class="control">
              <input class="input has-text-centered is-rounded" ref={(el: HTMLInputElement) => this.InputName = el} type="text" placeholder="» » » » » » Saisire le nom « « « « « «" />
            </div>
            <div class="control">
              <button class="button is-primary is-rounded" onClick={() => this.getens()}>Chercher</button>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div>
          <div class="center">
            

            <div class="field has-addons">
              <div id="id1" class="control">
                <input class="input has-text-centered is-rounded" ref={(el: HTMLInputElement) => this.InputName = el} type="text" placeholder="» » » » » » Saisire le nom « « « « « «" />
              </div>
              <div class="control">
                <button class="button is-primary is-rounded" onClick={() => this.getens()}>Chercher</button>
              </div>
            </div>
          </div>

          <div class="container is-fluid">
            <div class="card">
              <header class="card-header">
                <div class="card-image">
                  <div class="media-right">

                    <figure class="image is-50x50 is-right">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="Image" />
                    </figure>
                  </div>
                </div>
                <div class="" id="titre"><br></br>
                <p class="card-header-title">{this.enseignant[0].nom} {this.enseignant[0].prenom}</p>
                </div>
              </header>

              <div class="card-content">

                <div class="content">
                
                  <b>Numero: </b>{this.enseignant[0].noEnseignant}<br></br>
                  <b>Mobile: </b>{this.enseignant[0].mobile} <br></br>
                  <b>Telephone: </b>{this.enseignant[0].telephone}<br></br>
                  <b>Email UBO: </b>{this.enseignant[0].emailUbo}<br></br>
                  <b>Email personnel: </b>{this.enseignant[0].emailPerso}<br></br>
                  <b>Adresse: </b>{this.enseignant[0].adresse}<br></br>
                  <b>Code postal: </b>{this.enseignant[0].codePostal}<br></br>
                  <b>Ville: </b>{this.enseignant[0].ville}<br></br>
                  <b>Pays: </b>{this.enseignant[0].pays}<br></br>
                  <b>Sexe: </b>{this.enseignant[0].sexe}<br></br>
                  <b>Type: </b>{this.enseignant[0].type}<br></br>


                </div>
              </div>

              <footer class="card-footer">

                <a class="card-footer-item" href="/enseignant">Liste des enseignants</a>
                <a class="card-footer-item" href={'/enseignant-modifier/' + this.enseignant.noEnseignant}>Modifier</a>
                <a class="card-footer-item" href={'/enseignant-supprimer/' + this.enseignant.noEnseignant}>Supprimer</a>

              </footer>
            </div>
          </div>
          <br></br><br></br>

        </div>
      )
    }
  }
}
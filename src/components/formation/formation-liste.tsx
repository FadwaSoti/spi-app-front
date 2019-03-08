import { Component, State, Method } from '@stencil/core';
import { Formation } from '../../global/formation';
@Component({
    tag: 'formation-liste',
    styleUrl: 'formation-liste.scss'
  })
  export class FormationListe {

    data: any;
    @State() formations: Formation[];
  
    
  
  name: string = '/fetch/';

  apiRootUrl: string = 'https://api-dosispi.cleverapps.io/formations';
  @Method()
  load() {

    fetch(`${this.apiRootUrl}`).then(rsp => {
      return rsp.json();

    }).then(data => {
      this.formations = data;

    }).catch((err) => {
      console.error('Could not load data', err);
    });
  }

  componentWillLoad() {
    return fetch('https://api-dosispi.cleverapps.io/formations')
      .then(response => response.json())
      .then(data => {
        this.formations = data;
        console.log(this.formations);

      });

  }
 
  componentDidLoad() {
    this.load();

    console.log('Component has been rendered');
  }

  componentDidUpdate() {
    this.load();

    console.log('Component did update');
  }



@State() enseignant: any = "";

InputEmail: HTMLInputElement;
    
getens() {
    let url='https://api-dosispi.cleverapps.io/formations/nomFormation/'
        let email = this.InputEmail.value;
        return fetch(url+email)
        .then(response => response.json())
      .then(data => {
      this.enseignant = data;
        });
}

    render() {
        if(this.formations && this.formations.length > 0 ){
        return (
            <div>

            <head>
              <meta charset="UTF-8" />
              <title>Enseignant</title>
              <link rel="shortcut icon" href="../images/fav_icon.png" type="image/x-icon" />
              <link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css' />
              <link rel="stylesheet" href="../css/cards.css" />
            </head>
  
            <body>

<div class="container">
<div id="flow">
  <span class="flow-1"></span>
  <span class="flow-2"></span>
  <span class="flow-3"></span>
</div>

<div class="section">
  <div class="box">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input class="input has-text-centered is-rounded" type="text" placeholder="» » » » » » Recherche « « « « « «" ref={(el: HTMLInputElement) => this.InputEmail = el} />
      </div>
      <div class="control">
        <a class="button is-primary is-rounded"  onClick={() => this.getens()}>Chercher</a>
      </div>
    </div>
  </div>
</div>
</div>

 </body>


              <div><br></br>

                <div id="row" class="row columns is-multiline">
                
          {
            this.formations.map((formation) =>
            
                  <div class="column is-one-third">
                    <div class="card large round">
                      <div class="card  ">

                    
                        <header class="card-header">

                        </header>

                        <div class="card-content">
                          <div class="media">


                           

                            <div class="media-content">
                             
                           <p>
                              <i class="fas fa-angle-double-right"></i><b> Nom de formation:</b> {formation.nomFormation}<br></br>
                              <i class="fas fa-angle-double-right"></i><b> Code formation:</b> {formation.codeFormation} <br></br>
                              <i class="fas fa-angle-double-right"></i><b> Debut accreditation:</b> {formation.debutAccreditation}<br></br>
                              <i class="fas fa-angle-double-right"></i><b> Double diplome:</b> {formation.doubleDiplome}<br></br>
                              <i class="fas fa-angle-double-right"></i><b> Diplome:</b> {formation.diplome}<br></br>
                              <i class="fas fa-angle-double-right"></i><b> Trouver Accreditation:</b> {formation.finAccreditation}<br></br>
                              <i class="fas fa-angle-double-right"></i><b> Numero de l'année:</b> {formation.n0Annee}<br></br></p>
                             
                            </div>
                          </div>


                        </div>

                        <footer class="card-footer">
                            <a class="card-footer-item " href={'/formation-details/' + formation.codeFormation}>Details</a>
                            <a class="card-footer-item" href={'/formation-modifier/' + formation.codeFormation}>Modifier</a>
                            <a class="card-footer-item" href={'/formation-supprimer/' + formation.codeFormation}>Supprimer</a>
                        </footer>


                      </div>
                    </div>
                  </div>

)}
</div>
</div>
          <br></br>
          <div>
              <a id="ajouter" class="card-footer-item button is-primary is-rounded" href="/formation-ajouter">Ajouter formation</a>
          </div>

         
          <br></br>


        </div>



    )}
    else{
        return (
        
           <div>
  <body id="mabody">
  
                    
  <div class="container is-fluid"><br></br>
      <div id="maCard" class="card">
    <header class="card-header">
    <div class="card-image">
    <div class="media-right">

                <figure class="image is-50x50 is-right">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="Image"/>
                </figure>
    </div>
    </div>
    <div class="" id="titre"><br></br>
          <p class="card-header-title">{this.enseignant.nom} {this.enseignant.prenom}</p>
    </div>
    </header>
  
    <div class="card-content">

      <div class="content">
        <b>Numero: </b>{this.enseignant.noEnseignant}<br></br>
        <b>Mobile: </b>{this.enseignant.mobile} <br></br>
        <b>Telephone: </b>{this.enseignant.telephone}<br></br>
        <b>Email UBO: </b>{this.enseignant.emailUbo}<br></br>
        <b>Email personnel: </b>{this.enseignant.emailPerso}<br></br>
        <b>Adresse: </b>{this.enseignant.adresse}<br></br>
        <b>Code postal: </b>{this.enseignant.codePostal}<br></br>
        <b>Ville: </b>{this.enseignant.ville}<br></br>
        <b>Pays: </b>{this.enseignant.pays}<br></br>
        <b>Sexe: </b>{this.enseignant.sexe}<br></br>
        <b>Type: </b>{this.enseignant.type}<br></br>
        

      </div>
    </div>
  
    <footer class="card-footer">
    
      <a class="card-footer-item" href="/enseignant">Liste des formations</a>
      <a class="card-footer-item" href={'/enseignant-modifier/'+this.enseignant.noEnseignant}>Modifier</a>
      <a class="card-footer-item" href={'/enseignant-supprimer/'+this.enseignant.noEnseignant}>Supprimer</a>
  
    </footer>
  </div>
    </div>         
  <br></br><br/><br/>
  </body>
        </div>
        )}
    }
}
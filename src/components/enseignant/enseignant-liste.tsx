import { Component, State, Method } from '@stencil/core';
import { Enseingnant } from '../../global/enseignant';



@Component({
    tag: 'enseignant-liste',
    styleUrl: 'enseignant-liste.scss',
    
})

export class EnseignantListe {

  @State() enseignants: Enseingnant[];
  name: string = '/fetch/';

  apiRootUrl: string = 'https://api-dosispi.cleverapps.io/enseignants';
  @Method()
  load() {

    fetch(`${this.apiRootUrl}`).then(rsp => {
      return rsp.json();

    }).then(data => {
      this.enseignants = data;

    }).catch((err) => {
      console.error('Could not load data', err);
    });
  }

  componentWillLoad() {
    console.log('Component is being rendered');

    this.load();
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
    let url='http://api-dosispi.cleverapps.io/enseignants/emailUbo/'
        let email = this.InputEmail.value;
        return fetch(url+email)
        .then(response => response.json())
      .then(data => {
      this.enseignant = data;
        });
}

    render() {
        if(this.enseignants && this.enseignants.length > 0 && this.enseignant == ""){
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
            this.enseignants.map((enseignant) =>
            
                  <div class="column is-one-third">
                    <div class="card large round">
                      <div class="card  ">

                    
                        <header class="card-header">

                        </header>

                        <div class="card-content">
                          <div class="media">


                            <div class="media-left">
                              <figure class="image is-96x96">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="Image" />
                              </figure>
                            </div>


                            <div class="media-content">
                              <p class="title is-4 no-padding">{enseignant.nom} {enseignant.prenom}</p>
                              <p><b>Mobile:</b> {enseignant.mobile} <br></br>
                                <b>Email UBO:</b> {enseignant.emailUbo}</p>
                            </div>
                          </div>


                        </div>

                        <footer class="card-footer">
                            <a class="card-footer-item " href={'/enseignant-details/' + enseignant.noEnseignant}>Details</a>
                            <a class="card-footer-item" href={'/enseignant-modifier/' + enseignant.noEnseignant}>Modifier</a>
                            <a class="card-footer-item" href={'/enseignant-supprimer/' + enseignant.noEnseignant}>Supprimer</a>
                        </footer>


                      </div>
                    </div>
                  </div>

)}
</div>
</div>
          <br></br>
          <div>
              <a id="ajouter" class="card-footer-item button is-primary is-rounded" href="/enseignant-ajouter">Ajouter enseignant</a>
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
    
      <a class="card-footer-item" href="/enseignant">Liste des enseignants</a>
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
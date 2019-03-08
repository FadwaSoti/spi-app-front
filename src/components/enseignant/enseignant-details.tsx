import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { Enseingnant } from '../../global/enseignant';


@Component({
    tag: 'enseignant-details',
    styleUrl: 'enseignant-details.scss',
})
export class EnsDetails {
    @Prop() match: MatchResults;
    @State() enseignant: Enseingnant

    componentWillLoad() {
        let id = this.match.params.id;

        console.log(this.match.params);
        return fetch(
            "https://api-dosispi.cleverapps.io/enseignants/" + id
        )
            .then(response => response.json())
            .then(data => {
                this.enseignant = data;
                console.log(id);
            });
    }



    render() {

      
        return (
        <div>
  
  
                    
  <div class="container is-fluid"><br></br>
      <div class="card">
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
      
        </div>
        );
  }
}
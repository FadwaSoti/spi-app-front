import { Component, Prop, State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import { Enseingnant } from '../../global/enseignant';



@Component({
    tag: 'enseignant-supprimer',
    styleUrl: 'enseignant-supprimer.scss',

})
export class EnseignantDelete {
    @State() enseignant : Enseingnant
    @Prop() match: MatchResults;
    @State() data :any[] = [] ;
    @Prop() history: RouterHistory;
    @State() apiRootUrl: string = 'https://api-dosispi.cleverapps.io/enseignants/';
    
    deleteData(ens) {
        fetch("https://api-dosispi.cleverapps.io/enseignants", {
            method: "DELETE",
            body:JSON.stringify(ens),
            headers: {
              Accept: "application/json, text/plain, /",
              "Content-Type": "application/json"
            }
          })
    .then(response => response.json());
  }

  componentWillLoad() {
    let noEnseignant = this.match.params.noEnseignant;

    console.log(this.match.params);
    return fetch(
        "https://api-dosispi.cleverapps.io/enseignants/" + noEnseignant
    )
        .then(response => response.json())
        .then(data => {
            this.enseignant = data;
            console.log(noEnseignant);
        });
    }

render() {
    return (
        <div>
<br></br>
        <div id="row1" class="columns is-mobile is-centered">
       
            <article class="message is-success ">
            <div class="message-header is-mobile is-centered">
     <br></br>

        </div>
        <div class="message-body">
        <br></br>
        L'enseignant numéro  <strong>{this.match.params.noEnseignant}</strong>{this.deleteData(this.enseignant)} est bien suprimé.
        <br></br><br></br>
        <stencil-route-link url="/enseignant"  >
                  <button id="IdButton"
                          class="button is-link" 
                        >   Retourner à la liste
                        </button><br></br>

               </stencil-route-link>&nbsp;&nbsp;

        </div>
        </article>
        </div></div>
    );
}
}
import { Component, State, Prop } from '@stencil/core';
import {RouterHistory} from "@stencil/router";

@Component({
    tag: 'enseignant-ajouter',
    styleUrl: 'enseignant-ajouter.scss'

})
export class AjouterEnseignant {
    @State() noEnseignant : number;
    @State() nom : String ;
    @State() prenom: string;
    @State() adresse : string;
    @State() codePostal: string;
    @State() ville : string;
    @State() pays : string;
    @State() emailPerso : string;
    @State() emailUbo :string;
    @State() mobile : string;
    @State()telephone : string;
    @State()sexe : string;
    @State()type : string;

    @Prop() home : RouterHistory;

    reculer(){
        this.home.goBack();
      }

    postArticle(ens) {
    ens.preventDefault();
    console.log("!");
      const noEnseignant = this.noEnseignant;
      const nom = this.nom;
      const prenom = this.prenom;
      const adresse = this.adresse;
      const codePostal = this.codePostal;
      const pays = this.pays;
      const ville = this.ville;
      const emailUbo = this.emailUbo;
      const emailPerso = this.emailPerso;
      const mobile = this.mobile;
      const telephone = this.telephone;
      const sexe = this.sexe;
      const type = this.type;
      
    
    const payload = {
        noEnseignant,
        nom,
        prenom,
        adresse,
        codePostal,
        pays,
        ville,
        emailUbo,
        emailPerso,
        mobile,
        telephone,
        sexe,
        type
    };
   
    

    fetch("https://api-dosispi.cleverapps.io/enseignants", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(function(res) { this.reculer();
        return res.json();
      })
      .then(function(data) {
        console.log(JSON.stringify(data));
      });
  }

  componentWillLoad() {
    this.render();
  }
  
    render() {
        return (
            


    <form id="formee">
        
        <br></br>
        <br></br>
        <legend>&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;<b>Veuillez remplire le formulaire pour ajouter l'enseignant : </b></legend>
        <div class="columns is-mobile is-multiline is-centered">
        <div class="column is-half">

        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Nom:</b><input type="text" placeholder="Veuillez saisir le nom de l'enseignant..." class="input is-primary " onInput={(e: any) => (this.nom = e.target.value)} />
                </p>
            </div>
        

        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Prénom:</b><input type="text" placeholder="Veuillez saisir le prénom de l'enseignant..." class="input is-primary " onInput={(e: any) => (this.prenom = e.target.value)} />
                </p>
            </div>
        

        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Adresse:</b><input type="text" placeholder="Veuillez saisir l'adresse de l'enseignant..." class="input is-primary " onInput={(e: any) => (this.adresse = e.target.value)} />
                </p>
            </div>


        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Code postale:</b><input type="text" placeholder="Veuillez saisir le code postale de l'enseignant..." class="input is-primary " onInput={(e: any) => (this.codePostal = e.target.value)} />
                </p>
            </div>
        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Ville:</b><input type="text" placeholder="Veuillez saisir la ville de l'enseignant..." class="input is-primary " onInput={(e: any) => (this.ville = e.target.value)} />
                </p>
            </div>
        

        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Pays:</b><input type="text" placeholder="Veuillez saisir le pays de l'enseignant..." class="input is-primary " onInput={(e: any) => (this.pays = e.target.value)} />
                </p>
            </div>
        </div>
       
        <div class="column is-half">
     
        
        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Mobile:</b><input type="text" placeholder="Veuillez saisir le mobile de l'enseignant..." class="input is-primary " onInput={(e: any) => (this.mobile = e.target.value)} />
                </p>
            </div>
        
       
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Téléphone:</b><input type="text" placeholder="Veuillez saisir le télephone de l'enseignant..." class="input is-primary " onInput={(e: any) => (this.telephone = e.target.value)} />
                </p>
            </div>
        
        
     
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Email de l'UBO:</b><input type="text" placeholder="Veuillez saisir l'email UBO de l'enseignant..." class="input is-primary " onInput={(e: any) => (this.emailUbo = e.target.value)} />
                </p>
            </div>
    

        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Email personnel:</b><input type="text" placeholder="Veuillez saisir l'email personnel de l'enseignant..." class="input is-primary " onInput={(e: any) => (this.emailPerso = e.target.value)} />
                </p>
            </div>
        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Sexe:</b><input type="text" placeholder="Veuillez saisir le sexe de l'enseignant..." class="input is-primary " onInput={(e: any) => (this.sexe = e.target.value)} />
                </p>
            </div>
     

    
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Type:</b><input type="text" placeholder="Veuillez saisir le type de l'enseignant..." class="input is-primary " onInput={(e: any) => (this.type = e.target.value)} />
                </p>
            </div>
        </div>
         </div>
         
          <stencil-route-link url="/enseignant"  >
                  <button id="IdButton"
                          onClick={this.postArticle.bind(this)}
                          class="button is-link" 
                        >   Ajouter
                        </button>

               </stencil-route-link>&nbsp;&nbsp;

          <input type="reset" value="Vider les champs" class="button is-link" />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
  </form>
      
        );
    }
}
import { Component, State, Prop } from '@stencil/core';
import { Enseingnant } from '../../global/enseignant';
import { MatchResults } from '@stencil/router';

  @Component({
    tag: 'enseignant-modifier',
    styleUrl: 'enseignant-modifier.scss',
    shadow: true
  })
  export class EnsAdd {
    @State() value: string;
    @Prop() nom: string;
    adresse : string;
    codePostal: string;
    emailPerso : string;
    emailUbo :string;
    mobile : string;
    noEnseignant : number;
    pays : string;
    prenom : string;
    sexe : string;
    telephone : string;
    type : string;
    ville : string;

@Prop() match: MatchResults


    @State() enseignant: Enseingnant
    handleChangeNom(event) {
      this.nom = event.target.value;
    }
    handleChangeAdresse(event) {
      this.adresse = event.target.value;
    }
    handleChangeCodePostal(event) {
    this.codePostal = event.target.value;
    }
    handleChangeEmailPerso(event) {
    this.emailPerso = event.target.value;
    }
    handleChangeEmailUbo(event) {
    this.emailUbo = event.target.value;
    }
    handleChangeMobile(event) {
    this.mobile = event.target.value;
    }
    handleChangeNo(event) {
        this.noEnseignant = event.target.value;
    }
    handleChangePays(event) {
        this.pays = event.target.value;
    }
    handleChangePrenom(event) {
        this.prenom = event.target.value;
    }
    handleChangeType(event) {
        this.type = event.target.value;
    }
    handleChangeSexe(event) {
        this.sexe = event.target.value;
        console.log(event.target.value)
    }

    handleChangeVille(event) {
        this.ville = event.target.value;
        console.log(event.target.value)
    }
    handleChangeTelephone(event) {
        this.telephone = event.target.value;
        console.log(event.target.value)
    }
  
    postArticle(e) {
      e.preventDefault();
      console.log("!");
      const nom = this.nom;
      const prenom = this.prenom;
      const noEnseignant = this.noEnseignant;
      const adresse = this.adresse;
      const codePostal = this.codePostal;
      const pays = this.pays;
      const ville = this.ville;
      const sexe = this.sexe;
      const type = this.type;
      const mobile = this.mobile;
      const telephone = this.telephone;
      const emailUbo = this.emailUbo;
      const emailPerso = this.emailPerso;
      
      const payload = {
          nom,
          prenom,
          noEnseignant,
          adresse,
          codePostal,
          pays,
          ville,
          sexe,
          type,
          mobile,
          telephone,
          emailUbo,
          emailPerso
      };
      fetch("https://api-dosispi.cleverapps.io/enseignants", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
        .then(function(res) {
          return res.json();
        })
        .then(function(data) {
          console.log(JSON.stringify(data));
        });
    }
    

    render() {
      return (
       
        <form id="formee">
        
        <br></br>
        <br></br>
        <legend>&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;<b>Veuillez remplire le formulaire pour modifier l'enseignant : </b></legend>
        <div class="columns is-mobile is-multiline is-centered">
        <div class="column is-half">

        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Numero:</b><input type="text" placeholder="Veuillez saisir le numero de l'enseignant..." class="input is-primary " onInput={(event) => this.handleChangeNo(event)} />
                </p>
            </div> 

            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Nom:</b><input type="text" placeholder="Veuillez saisir le nom de l'enseignant..." class="input is-primary " onInput={(event) => this.handleChangeNom(event)} />
                </p>
            </div>        

        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Prénom:</b><input type="text" placeholder="Veuillez saisir le prénom de l'enseignant..." class="input is-primary " onInput={(event) => this.handleChangePrenom(event)}  />
                </p>
            </div>
        

        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Adresse:</b><input type="text" placeholder="Veuillez saisir l'adresse de l'enseignant..." class="input is-primary " onInput={(event) => this.handleChangeAdresse(event)}  />
                </p>
            </div>


        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Code postale:</b><input type="text" placeholder="Veuillez saisir le code postale de l'enseignant..." class="input is-primary " onInput={(event) => this.handleChangeCodePostal(event)} />
                </p>
            </div>
        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Ville:</b><input type="text" placeholder="Veuillez saisir la ville de l'enseignant..." class="input is-primary " onInput={(event) => this.handleChangeVille(event)} />
                </p>
            </div>
        

        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Pays:</b><input type="text" placeholder="Veuillez saisir le pays de l'enseignant..." class="input is-primary " onInput={(event) => this.handleChangePays(event)}  />
                </p>
            </div>
        </div>
       
        <div class="column is-half">
     
        
        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Mobile:</b><input type="text" placeholder="Veuillez saisir le mobile de l'enseignant..." class="input is-primary " onInput={(event) => this.handleChangeMobile(event)}  />
                </p>
            </div>
        
       
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Téléphone:</b><input type="text" placeholder="Veuillez saisir le télephone de l'enseignant..." class="input is-primary " onInput={(event) => this.handleChangeTelephone(event)}  />
                </p>
            </div>
        
        
     
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Email de l'UBO:</b><input type="text" placeholder="Veuillez saisir l'email UBO de l'enseignant..." class="input is-primary " onInput={(event) => this.handleChangeEmailUbo(event)}  />
                </p>
            </div>
    

        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Email personnel:</b><input type="text" placeholder="Veuillez saisir l'email personnel de l'enseignant..." class="input is-primary " onInput={(event) => this.handleChangeEmailPerso(event)}  />
                </p>
            </div>
        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Sexe:</b><input type="text" placeholder="Veuillez saisir le sexe de l'enseignant..." class="input is-primary " onInput={(event) => this.handleChangeSexe(event)}  />
                </p>
            </div>
     

    
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Type:</b><input type="text" placeholder="Veuillez saisir le type de l'enseignant..." class="input is-primary " onInput={(event) => this.handleChangeType(event)}  />
                </p>
            </div>
        </div>
         </div>
         
         <stencil-route-link url="/enseignant"  >
                  <input 
                          id="butt"
                          class="button is-link is-rounded" 
                          type="submit" name="action" 
                          onClick={this.postArticle.bind(this)}
                        >   Modifier
                        </input>
               </stencil-route-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               
          <input class="button is-link is-rounded"  type="reset" value="Vider les champs"/>
          <br></br>
          <br></br>
          <br></br>
          
  </form>
      
      );
    }
}
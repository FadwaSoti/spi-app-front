import { Component, Prop, State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';


@Component({
    tag: 'formation-details',
    styleUrl: 'formation-detail.scss',
    shadow: true
})
export class FormationDetails {

    @Prop() match: MatchResults;
    @State() formations: any;
    @Prop() back: RouterHistory;



    deleteFormation(ens) {



        fetch('https://api-dosispi.cleverapps.io/formations/', {
            method: "DELETE",
            body: JSON.stringify(ens),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        }).then(() => {
            alert("Deleted !!");
            location.href = '/formations';
        }).catch((error) => {
            alert(' Error ! please retry !! ');
            console.error(error);


        })

            .then(function (data) {
                console.log(JSON.stringify(data));
            });
    }






    componentWillLoad() {

        //let i = this.match.params.noEnseignant;
        return fetch('https://api-dosispi.cleverapps.io/formations/' + this.match.params.codeFormation)
            .then(response => response.json())
            .then(data => {
                this.formations = data;

                console.log(this.formations);
            });

    }


    render() {

        return (

            <div class="h">

                <br></br>
                <br></br>
                <br></br>
                <div class="container">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div class="r">
                        <div class="card">
                            <div class="has-text-centered">
                                <p id="nom" ><b>{this.formations.nomFormation} &nbsp; {this.formations.codeFormation}</b></p>
                            </div>
                        </div>
                        
                            <div class="">
                                <div class="card  ">
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-content">

                                                <p>
                                                    <i class="fas fa-angle-double-right"></i><b> Nom de formation:</b> {this.formations.nomFormation}<br></br>
                                                    <i class="fas fa-angle-double-right"></i><b> Code formation:</b> {this.formations.codeFormation} <br></br>
                                                    <i class="fas fa-angle-double-right"></i><b> Debut accreditation:</b> {this.formations.debutAccreditation}<br></br>
                                                    <i class="fas fa-angle-double-right"></i><b> Double diplome:</b> {this.formations.doubleDiplome}<br></br>
                                                    <i class="fas fa-angle-double-right"></i><b> Diplome:</b> {this.formations.diplome}<br></br>
                                                    <i class="fas fa-angle-double-right"></i><b> Trouver Accreditation:</b> {this.formations.finAccreditation}<br></br>
                                                    <i class="fas fa-angle-double-right"></i><b> Numero de l'année:</b> {this.formations.n0Annee}<br></br></p>

                                            </div>
                                        </div>


                                    </div>

                                    <footer class="card-footer">
                                        <a class="card-footer-item " href={'/formation-details/' + this.formations.codeFormation}>Details</a>
                                        <a class="card-footer-item" href={'/formation-modifier/' + this.formations.codeFormation}>Modifier</a>
                                        <a class="card-footer-item" href={'/formation-supprimer/' + this.formations.codeFormation}>Supprimer</a>
                                    </footer>


                                </div>
                            </div>
                       

                        <br></br>


                    </div>

                    <br/><br/><br/><br/>
                </div>
                ); }</div>

        )
    }






}
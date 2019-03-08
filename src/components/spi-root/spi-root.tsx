import { Component } from "@stencil/core";
import {MatchResults as _} from '@stencil/router'; // _ = !"declared but never read"

@Component({
  tag: "spi-root",
  styleUrl: "spi-root.scss"
})
export class SpiRoot {
  render() {
    return (
      <div>
        <spi-header />

        <main class="">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="spi-home" exact={true} />
              <stencil-route url="/enseignant" component="enseignant-liste" exact={true} />
              <stencil-route url="/enseignant-details/:id" component="enseignant-details"/>
              <stencil-route url="/enseignant-modifier/:id" component="enseignant-modifier"  />
              <stencil-route url="/enseignant-ajouter" component="enseignant-ajouter"  />
              <stencil-route url="/enseignant-supprimer/:noEnseignant" component="enseignant-supprimer"  />
              <stencil-route url="/enseignant-recherche" component="enseignant-recherche"  />
              <stencil-route url="/enseignant-name" component="enseignant-name"  />
              

              <stencil-route url="/formation" component="formation-liste" />
              <stencil-route url="/formation-ajouter" component="formation-ajouter" />
              <stencil-route url="/formation-details/:codeFormation" component="formation-details" />
              
              
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}

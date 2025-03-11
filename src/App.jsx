import { createSignal } from "solid-js";
import logo from "./assets/logo.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  return (
    <main>
      <div class="pure-g">
        {/* Explications */}{" "}
        <div class="pure-u-1-2">
          <div id="explanation">
            <h3>Introduction à l'outil</h3>
            <p>
              Cette apllication a pour objectif de faciliter le travail de la MJ
              dans le cadre de sa préparation de séances du jeu de rôle Mutant:
              Year Zero.
            </p>
            <p>
              Elle vise à automatiser au maximum les étapes de création de la
              Zone, explicitées au chapitre 11 du livre de base...
            </p>

            <h3>Remarque importante</h3>
            <p>
              Cette application ne vise pas à se substituer au livre de base
              (disponible sur le site d' Arkhane Asylum) : elle vise uniquement
              à faciliter le travail de la MJ.
            </p>

            <p>
              En vue de cet objectif, elle reprend certains éléments du livre de
              base (ruines, ambiances etc.) pour fluidifier les descriptions -
              et donc l'expérience de jeu à la table - mais le livre de base
              reste nécessaire pour obtenir le détail des éléments importants du
              jeu (comme les menaces ou artefacts).
            </p>
          </div>
        </div>
        {/* Formulaire */}
        <div class="pure-u-1-2">
          <form class="pure-form pure-form-stacked" id="generator">
            <fieldset>
              <label for="sector-number">Nombre de secteurs </label>
              <input
                id="sector-number"
                type="number"
                class="pure-input-1-3"
                placeholder="2 - 12"
              />
              <span class="pure-form-message">
                Le nombre de secteurs à générer
              </span>
              <label for="threat-level">Niveau de menace </label>
              <input
                id="threat-level"
                type="number"
                class="pure-input-1-3"
                placeholder="0 - 12"
              />
              <span class="pure-form-message">
                Dangerosité relative des secteurs
              </span>
              <label for="seed">Seed</label>
              <input
                id="seed"
                type="text"
                class="pure-input-1-3"
                placeholder="Mutant: Year Zero"
              />
              <span class="pure-form-message">Graine (optionnelle)</span>
              <button type="submit" class="pure-button pure-button-primary">
                Générer...
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </main>
  );
}

export default App;

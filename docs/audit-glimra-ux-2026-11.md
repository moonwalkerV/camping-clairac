# Audit UX et direction créative — Camping Clairac

Date : 19 novembre 2026. Branche de proposition, **sans fusion vers main**.

## Ce que le code confirme
- Eleventy 3 avec HTML statique, contenus pilotés par `src/_data/accueil.json` et `site.json`.
- Univers propre au site : **carnet de la ferme**, tirages photo inclinés, annotations manuscrites, corde à linge et carte dessinée ; polices locales Fraunces, Source Sans 3, Caveat et Bryndan Write.
- Premier écran en deux panneaux, photographie authentique `tente-cloche-pins.webp`, CTA réservation et téléphone, météo Open-Meteo.
- Pages d'accueil, aire naturelle, séjourner, coups de cœur, informations pratiques ; gîte et 25 emplacements présentés.
- Les coups de cœur sont **déjà** divisés entre favoris visibles et autres adresses dans des `details` : ne pas refaire.
- Boutons mobiles, menu responsive, évitement clavier, libellés formulaire, canonical et noindex sur la démo déjà codés.
- Aucun score Lighthouse, test clavier end-to-end ou test sur appareils réels n'a été effectué dans cette revue du dépôt.

## Réalisations dans cette branche
1. **Choix rapide dans le hero** : deux liens distincts vers les emplacements (dès 25 € / nuit pour deux) et le gîte, avec focus visible et disposition adaptée au mobile. Les cartes plus complètes existantes restent en bas de page.
2. **Formulaire en démo** : aucun envoi vers Web3Forms n'est proposé lorsque `site.demo` est vrai ou que la clé vaut `A-REMPLACER`. Affichage explicite de l'indisponibilité ; email et téléphone restent utilisables.
3. Aucun changement de tarifs, de contenu touristique rédigé par les exploitants, de photos ni des données légales.

## Directions artistiques à comparer — sans les fusionner maintenant

### A. « Clairac raffiné » — recommandée
- Conserver le hero scindé olive sombre / photographie et l'identité « carnet de la ferme ».
- Accentuer la hiérarchie entre le titre, les deux modes de séjour et le CTA réservation ; garder la véritable photographie comme sujet principal.
- Utiliser les tirages photo comme accents uniques, pas sur chaque bloc ; renforcer l'espace entre grandes sections.
- Garder les surtitres manuscrits, les textes authentiques et les photos du domaine.
- Objectif : un site crédible et vivant, sans connotation de camping de luxe.

### B. « Clairac éditorial »
- Variante plus expressive à prototyper séparément : photo du domaine presque plein écran, cadrage type couverture de carnet, titre serif court et note manuscrite superposée.
- Les deux choix de séjour deviennent une bande visible dès l'ouverture, suivie d'un panorama photo asymétrique.
- Ne pas introduire de photographie de banque d'images ; contrôler contrastes, poids de l'image LCP et mobile.
- Risque : l'image doit être d'excellente qualité et le texte rester lisible quel que soit le cadrage.

## Points à résoudre avant la mise en production
- Identité juridique de l'exploitante, forme et numéro d'immatriculation.
- Tarifs, capacité et couchages du gîte après validation de l'exploitant.
- Adresse email de réception et clé Web3Forms configurée et testée par un envoi réel.
- Contrôle du passage de `demo: true` à `false` au moment du domaine final : le bandeau et le `noindex` doivent être retirés seulement à ce moment.
- Vérifier l'exactitude des horaires des lieux conseillés et les licences de leurs photographies.
- Tests : `npm ci && npm run build`, Lighthouse mobile/desktop, axe ou pa11y, navigation clavier, dates du formulaire, envoi réel, viewport 360 à 1440 px. Les vérifications manuelles mobiles déjà réalisées par la propriétaire ne sont pas invalidées.

## Observation technique importante
La règle `site.demo or web3forms_cle == "A-REMPLACER"` vise la sécurité de la démo. Pour une version de production, remplacer la clé et vérifier la politique de secrets/données avant bascule. Ne pas présenter un formulaire bloqué comme une fonctionnalité en production.

## Organisation du travail partagé avec Claude
- Claude et Codex peuvent travailler sur des branches séparées et commenter des pull requests GitHub.
- Il n'existe **pas** d'échange autonome direct Claude ↔ ChatGPT du seul fait de la connexion GitHub.
- Éviter d'avoir deux modèles qui poussent simultanément sur `main`. Protéger `main` et utiliser Vercel Preview pour la revue.

# Gabarit de site vitrine

Site statique rapide (Eleventy), contenu modifiable par le client avec Pages CMS, publié gratuitement sur Cloudflare Pages.
Les textes de démonstration (« Le Fournil d'Exemple ») sont à remplacer.

**Chaque site doit avoir son propre design : lire d'abord `DESIGN.md`** (thèmes par secteur, sections, fiche DA, check-list anti-site-générique).

**Référencement : suivre `SEO.md`** (check-list SEO local en 35 cases : au brief, pendant la fabrication, à la mise en ligne, fiche Google, suivi). Version à cocher : https://claude.ai/artifact/WSLE9ovca3FGPfK9xjVB9r

## Où se trouve quoi

| Fichier | Rôle |
|---|---|
| `src/_data/site.json` | Thème, type d'en-tête, nom, couleurs, polices, coordonnées, horaires, réseaux, formulaire, menu |
| `src/_data/accueil.json` | Liste ordonnée des sections de l'accueil (type + contenu) |
| `src/_includes/sections/` | Les sections disponibles (voir `DESIGN.md`) |
| `src/pages/*.md` | Pages en plus (offres, à propos, mentions légales). Une page = un fichier. |
| `src/assets/socle.css` | Socle commun, sans style visible |
| `src/assets/themes/*.css` | Les 5 thèmes (domaine, comptoir, chantier, souffle, cabinet) ; un fichier par client en plus |
| `exemples/` | 4 sites d'exemple pour montrer les thèmes (ne pas livrer) |
| `src/assets/img/` | Logo, favicon, photos, image de partage (1 200 × 630) |
| `src/_redirects` | Redirections des anciennes adresses (refonte seulement) |
| `SEO.md` | Check-list SEO local, à copier dans le dossier du client |
| `.pages.yml` | Ce que le client peut modifier dans Pages CMS |
| `.github/workflows/deploiement.yml` | Publication automatique sur Cloudflare Pages |

## Travailler en local

```
npm install
npm run dev     # aperçu sur http://localhost:8080
npm run build   # site final dans _site/
```

## Un nouveau site client, pas à pas

1. Sur GitHub, « Use this template » → nouveau dépôt privé `site-nomduclient`.
2. Au brief : faire la partie 1 de `SEO.md` (vraies recherches, 3 concurrents, nom-adresse-téléphone, fiche Google). Remplir la fiche DA (`DESIGN.md`), puis demander à Claude de remplir `site.json`, `accueil.json` et de créer le thème du client. Supprimer le dossier `exemples/`.
3. Site une page : supprimer `src/pages/offres.md` et `a-propos.md`, et garder dans `navigation` seulement l'accueil et le contact.
4. Formulaire : créer une clé gratuite sur web3forms.com avec l'e-mail du client, la coller dans `site.json` (`web3forms_cle`).
5. Cloudflare : créer le compte du client (avec son e-mail, en visio), puis Workers & Pages → créer un projet Pages en « Direct Upload » nommé `site-nomduclient`.
6. Dans Cloudflare : créer un jeton d'API (modèle « Edit Cloudflare Workers » ou droit « Cloudflare Pages : Edit ») et noter l'Account ID.
7. Dans le dépôt GitHub : Settings → Secrets and variables → Actions. Secrets `CLOUDFLARE_API_TOKEN` et `CLOUDFLARE_ACCOUNT_ID`, variable `CF_PROJET`.
8. Pousser sur `main` : le site est en ligne sur `site-nomduclient.pages.dev`.
9. Nom de domaine (au nom du client) : dans le projet Pages, Custom domains → ajouter le domaine et suivre les instructions DNS.
10. Pages CMS : se connecter sur app.pagescms.org avec GitHub, ouvrir le dépôt, puis inviter le client par e-mail (Collaborators).
11. Mettre `url` dans `site.json`, vérifier la check-list de mise en ligne et les parties 3 et 4 de `SEO.md` (Search Console, redirections, test des données structurées, fiche Google).
12. Poser les rappels de suivi de `SEO.md` (1 mois, 3 mois, 6 mois).

Pendant la fabrication, on peut utiliser votre propre compte Cloudflare (mêmes secrets), puis basculer les secrets sur le compte du client à la mise en ligne.

## Polices et RGPD

Le gabarit charge les polices depuis Google Fonts, ce qui transmet l'adresse IP des visiteurs à Google. Pour un site client, mieux vaut héberger les polices dans `src/assets/fonts/` (fichiers .woff2 téléchargés depuis Google Fonts), déclarer les `@font-face` dans le fichier du thème et retirer les deux lignes `fonts.googleapis.com` de `base.njk`.

## Si le client part

Le code est à lui : transférer le dépôt GitHub sur son compte, ou lui remettre le dossier zippé. N'importe quel hébergeur de sites statiques peut le publier en quelques minutes.

## À ajouter lors des 2 sites d'entraînement : données structurées

Idée notée le 04/11/2026 (reel @forgeone_) :
- Ajouter dans `base.njk` un bloc JSON-LD rempli automatiquement depuis `site.json` (et Pages CMS) : type `LocalBusiness` ou `ProfessionalService`, nom, logo, téléphone, adresse ou zone desservie, horaires, liens réseaux. Si le site vend des produits : un bloc `Product` par fiche (prix, disponibilité, avis seulement s'ils sont réels et visibles sur la page).
- Check-list de mise en ligne : tester une page avec search.google.com/test/rich-results (aucune erreur).
- Ne jamais promettre les étoiles au client : Google ne les affiche pas pour une entreprise locale de services depuis son propre site (elles viennent de la fiche Google Business), et rien n'est garanti même pour des produits.

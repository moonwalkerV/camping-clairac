# Faire un site qui ne ressemble à aucun autre

Le gabarit a deux étages :

- **Le socle** (`base.njk`, `socle.css`, formulaire, SEO, mentions légales, Pages CMS, déploiement) est le même pour tous les clients. Il ne se voit pas : pas de rayon, pas d'ombre, pas de taille de titre.
- **Le design** se joue sur trois leviers que l'on choisit pour chaque client :
  1. le **thème** (`site.json` → `theme`) : `domaine`, `comptoir`, `chantier`, `souffle`, `cabinet` ;
  2. les **sections** de l'accueil et leur ordre (`accueil.json` → `sections`) ;
  3. la **marque du client** : couleurs, polices, logo, photos, ton (`site.json`).

Un thème n'est pas un modèle à remplir : c'est un point de départ que l'on modifie pour chaque client (au moins l'élément signature, voir plus bas).

## Les 5 thèmes

| Thème | Pour qui | Ce qui le distingue |
|---|---|---|
| `domaine` | vin, tourisme, hébergement, produits du terroir haut de gamme | photo plein écran, serif fin, majuscules espacées, alternance image/texte, beaucoup d'air, en-tête centré sur la photo |
| `comptoir` | restaurant, boulangerie, commerce, épicerie | titres très gras, pastilles inclinées, carte avec pointillés et prix, galerie qui défile, bouton de commande toujours visible |
| `chantier` | artisan, bâtiment, dépannage | condensé en majuscules, téléphone énorme dans l'en-tête et l'accueil, garanties, services numérotés, avant/après, étapes du chantier |
| `souffle` | bien-être, soin, accompagnement, coaching | colonne étroite centrée, formes arrondies, image en arche, séances avec durée et prix en pastilles, aucun élément pressant |
| `cabinet` | conseil, professions libérales, services B2B | grille nette, chiffres clés, filets fins, cartes séparées par des traits, peu d'images, sérieux sans être froid |

## Les sections disponibles

| Section | Usage |
|---|---|
| `hero-plein-ecran` | grande photo d'ambiance (domaine, hôtel, paysage) |
| `hero-scinde` | texte + photo côte à côte (commerce, produit) |
| `hero-appel` | téléphone en très grand + garanties (urgence, artisan) |
| `hero-centre` | message calme et centré + image arrondie (soin) |
| `hero-sobre` | sans photo, avec chiffres clés (conseil) |
| `offres-cartes` | 3 offres comparables |
| `offres-menu` | carte de restaurant, liste de produits avec prix |
| `offres-lignes` | peu d'offres, chacune avec une belle photo |
| `offres-seances` | prestations avec durée et prix |
| `offres-liste` | services numérotés |
| `recit` | histoire, portrait, citation |
| `etapes` | déroulé d'une prestation |
| `avant-apres` | preuves visuelles de travaux |
| `galerie` | photos (mosaïque ou défilement selon le thème) |
| `avis`, `chiffres`, `faq`, `bandeau`, `contact` | preuves, réassurance, appel à l'action, coordonnées et formulaire |

Toutes les sections lisent les mêmes champs (`surtitre`, `titre`, `intro`, `texte`, `citation`, `image`, `alt`, `bouton`, `items[]`), ce qui permet au client de tout modifier dans Pages CMS sans rien casser.

## La méthode, du brief au site

1. **Brief + plateforme de marque** (ou kit d'identité si le client a pris le Pack).
2. **Fiche DA du site** (ci-dessous), remplie en 30 minutes. C'est elle qui rend le site unique.
3. **Claude** reçoit la fiche + le brief + les textes et produit : `site.json`, `accueil.json` (choix et ordre des sections), puis un fichier `src/assets/themes/<client>.css` copié du thème le plus proche et modifié selon la fiche.
4. **Relecture** avec la check-list anti-site-générique. Si 3 points ou plus échouent, on retravaille avant de montrer au client.

### Fiche DA du site (à remplir pour chaque client)

```
Client :                       Secteur :
Trois mots de la marque :      (ex. « franc, solaire, transmis »)
Ce que le visiteur doit faire en premier :   (appeler / réserver / venir / demander un devis)
Thème de départ :              Pourquoi :
Couleurs (fond, texte, accent, second, doux) :
Polices (titre / texte) :      Graisse et casse des titres :
Formes :                       (angles droits, arrondis, arche, découpe, filets...)
Densité :                      (aérée / généreuse / compacte)
Photo :                        (plein écran, détourée, cadrée serrée, noir et blanc, illustration...)
Ordre des sections :
Élément signature :            (UNE chose qu'on ne verra que sur ce site)
Ce qu'on s'interdit :          (ex. pas de dégradé, pas d'icônes génériques)
Sites de référence (2-3) :
```

### Le message à donner à Claude

> Voici le brief, la plateforme de marque et la fiche DA de [client]. Pars du thème `[thème]`. 1) Remplis `site.json` et `accueil.json` avec les textes fournis, en choisissant les sections et leur ordre selon la fiche. 2) Crée `src/assets/themes/[client].css` à partir du thème de départ et transforme-le pour qu'il corresponde à la fiche : typographie, formes, densité, traitement des photos, et l'élément signature. Garde le socle intact (accessibilité, contrastes AA, focus visible, pas de débordement à 390 px). 3) Dis-moi quels points de la check-list anti-site-générique restent faibles.

## Check-list anti-site-générique

Avant de montrer le site, cocher chaque point. Trois « non » = on retravaille.

1. Si on cache le logo, reconnaît-on quand même la marque (couleurs, polices, ton) ?
2. L'accueil commence-t-il par ce que le visiteur doit faire en premier pour ce métier (appeler, réserver, venir) ?
3. Le titre principal dit-il quelque chose que seul ce client peut dire (lieu, chiffre, méthode), et pas « Bienvenue » ou « Votre partenaire de confiance » ?
4. Les polices viennent-elles de la plateforme de marque, et ne sont-elles pas celles du site précédent ?
5. Y a-t-il un élément signature (forme, détail graphique, mise en page) qu'on ne retrouve sur aucun autre site du portfolio ?
6. L'ordre des sections est-il différent du dernier site livré du même thème ?
7. Les photos sont-elles celles du client (ou une direction photo assumée), et pas des images de banque reconnaissables ?
8. Aucune icône générique (coche dans un rond, ampoule, poignée de main) ni texte de remplissage ?
9. Les textes parlent-ils comme le client parle (tutoiement ou vouvoiement, mots du métier) ?
10. La densité correspond-elle au secteur (aéré pour le haut de gamme, généreux pour le commerce, compact pour l'urgence) ?
11. Le site se lit bien sur téléphone (390 px), contrastes AA, boutons de 44 px minimum ?
12. Mis à côté des 3 derniers sites livrés, quelqu'un les distinguerait-il au premier coup d'œil ?

## Check-list visibilité (Google et assistants IA)

À cocher avant la mise en ligne, en plus de la check-list anti-site-générique. La check-list SEO complète (35 cases, fiche Google comprise) est dans `SEO.md` ; ces 4 points en font partie. Ce n'est pas un « site pour les robots » : c'est du bon référencement, qui sert aussi à ChatGPT, Claude, Perplexity et aux résumés IA de Google.

1. **Cloudflare** : au branchement du domaine, ouvrir le réglage des robots IA (AI Crawl Control / « Block AI bots ») et vérifier que les robots de recherche (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, PerplexityBot, Googlebot) ne sont pas bloqués. Le blocage des robots d'entraînement reste au choix du client.
2. **Vraie FAQ** : une section `faq` (accueil ou page dédiée) avec 4 à 8 questions que les clients posent vraiment (prix, délais, zone, déroulé). Elle produit automatiquement le balisage schema.org FAQPage.
3. **Liens entre les pages** : chaque page renvoie vers au moins 2 autres pages utiles (offres ↔ à propos ↔ contact), avec des textes de lien parlants (pas « cliquez ici »).
4. **Données structurées complètes** : dans `site.json`, `type_schema` précis (Bakery, Winery, Plumber...), nom, description, adresse, téléphone et image de partage remplis ; tester l'URL sur https://search.google.com/test/rich-results.

On ne détourne jamais une page légale (mentions légales, confidentialité) pour y mettre du contenu commercial.

## Construire les exemples

```
npm run exemples      # construit les 4 exemples dans _exemples/
EXEMPLE=domaine npx eleventy --serve   # aperçu d'un exemple
```

Les exemples (`exemples/<nom>/_data` et `exemples/<nom>/img`) servent de démonstration. Ils ne sont pas à livrer.

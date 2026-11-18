# Check-list SEO minimum : site d'un petit client local

Version du 04/11/2026. Pour un commerce, un artisan, une thérapeute, une association : un site de 1 à 5 pages et une fiche Google.

Les listes « 100 notions de SEO » parlent surtout aux gros sites (boutiques, médias, sites en plusieurs langues). Pour un petit client local, ces 35 cases font l'essentiel du travail, et une bonne partie est déjà réglée par le gabarit. Les voici, dans l'ordre où on les fait.

**Repères**
- ⚙ = déjà fait par le gabarit, rien à faire (juste vérifier)
- ✎ = à faire pour chaque site
- 📍 = fiche Google Business (avec le client)
- Priorité : **[1] indispensable**, **[2] utile**, **[3] bonus**
- (n° …) = la notion correspondante dans la liste des 100

**Ce qu'on promet au client : rien sur les positions.** Phrase type : « Je livre un site construit selon les bonnes pratiques du référencement local, et je vous montre comment faire vivre votre fiche Google. Je ne peux pas garantir une place dans Google : c'est lui qui décide, et les effets se voient en général après 3 à 6 mois. » Pas de promesse d'étoiles dans les résultats : pour une entreprise locale, les étoiles viennent des avis de la fiche Google, pas du site.

---

## 1. Avant de fabriquer (au brief)

- [ ] ✎ [1] **Les vraies recherches du client** : noter 5 à 10 phrases que ses clients tapent, presque toujours « métier + ville » (« boulangerie levain Béziers », « plombier Sérignan »). Sources gratuites : suggestions de Google en tapant le début, bloc « Autres questions posées », et ce que les clients disent au téléphone. Claude peut aider à trouver des idées, mais il ne connaît pas les volumes de recherche : les chiffres viennent de Google (Keyword Planner, gratuit avec un compte Google Ads sans pub) ou de la Search Console une fois le site en ligne. (n° 1, 2, 3)
- [ ] ✎ [1] **Une page = un sujet** : chaque page vise une recherche principale. Site une page : l'accueil vise « métier + ville ». Deux pages ne visent jamais la même recherche. (n° 5, 6, 23, 42)
- [ ] ✎ [1] **Nom, adresse, téléphone fixés une fois pour toutes** (et horaires) : une seule écriture, copiée à l'identique partout (site, fiche Google, réseaux, annuaires). (n° 72)
- [ ] ✎📍 [1] **Regarder 3 concurrents locaux** : taper la recherche principale dans Google Maps, noter pour les 3 premières fiches la catégorie, le nombre d'avis et leur note, les photos, les services listés, et ce que dit leur site. C'est ce que font les skills « Local SEO » et « Competitor Analysis » vendues sur Instagram, à la main et gratuitement en 20 minutes. (n° 71, 73)
- [ ] 📍 [1] **État de la fiche Google** : existe-t-elle ? Qui en est propriétaire ? Quelle catégorie principale ? Une fiche en double à fusionner ? (n° 70)
- [ ] ✎ [2] **Zone desservie** : la liste des communes réellement couvertes. Une page par commune seulement si le contenu est vraiment différent (réalisations, délais, prix sur place) ; sinon une seule section « Où j'interviens ». (n° 75, 98)
- [ ] ✎ [2] **Refonte** : lister les adresses de l'ancien site qui comptent (les plus visitées, celles qui ont des liens) pour les rediriger. (n° 24, 25)

## 2. Pendant la fabrication

**Les textes (le plus important)**
- [ ] ✎ [1] **Des textes que seul ce client peut écrire** : années de métier, photos réelles, réalisations, prix ou fourchettes, délais, zone, façon de travailler. C'est ce que Google appelle l'expérience et la confiance. Jamais de texte IA générique copié en série. (n° 7, 8, 9, 54, 56)
- [ ] ⚙✎ [1] **Titre et description de chaque page** : le gabarit fabrique le titre de l'accueil « Nom · activité à ville » et ajoute la description. À écrire : `description_seo` dans `site.json` et `description` de chaque page, 155 caractères maximum, avec la ville et une raison de cliquer. Titres de 60 caractères maximum, tous différents. (n° 10, 11)
- [ ] ⚙ [1] **Un seul grand titre (H1) par page** : porté par l'en-tête de l'accueil ou le bandeau des pages. Ne pas ajouter une 2e section d'en-tête sur la même page ; les sous-titres suivent l'ordre. (n° 12)
- [ ] ⚙✎ [2] **Une vraie FAQ** : 4 à 8 questions que les clients posent vraiment (prix, délais, zone, déroulé). La section `faq` crée seule le balisage FAQPage. (n° 92, 79)
- [ ] ⚙✎ [2] **Liens entre les pages** : le menu relie déjà tout. En plus, chaque page renvoie vers 2 autres pages utiles avec un texte de lien parlant (« voir les tarifs des séances », pas « cliquez ici »). Aucune page sans lien vers elle. (n° 13, 14, 15)

**Les images**
- [ ] ⚙ [1] Dimensions déclarées et chargement différé : déjà dans les sections du gabarit. (n° 34)
- [ ] ✎ [1] **Photos compressées** (WebP ou JPG, moins de 300 Ko, 1 600 px de large maximum), **nom de fichier parlant** (`pain-levain-fournil-beziers.webp`) et **texte alternatif** qui décrit l'image (vide si l'image est décorative). (n° 34, 35)

**La technique (presque tout est déjà fait)**
- [ ] ⚙ [1] Site statique rapide et lisible sans JavaScript, adresses de pages lisibles (`/offres/`), balise canonique, `sitemap.xml`, `robots.txt`, page 404, pages « merci » et 404 exclues de Google. Seul geste : remplir `url` dans `site.json`. (n° 17-22, 26, 28, 29, 41)
- [ ] ✎ [1] **Mobile et vitesse** : PageSpeed Insights en mobile, 90 ou plus (cela couvre les Core Web Vitals : affichage, réactivité, stabilité). Polices hébergées dans le site (voir LISEZMOI). (n° 30-33)
- [ ] ⚙✎ [2] **Données structurées** : le gabarit produit une fiche LocalBusiness. À faire : `type_schema` précis (Bakery, Plumber, Winery…), téléphone, adresse, image de partage remplis. À compléter dans le gabarit lors des 2 sites d'entraînement : adresse détaillée, horaires, zone desservie, liens réseaux (sameAs). (n° 36, 37, 69)

## 3. Le jour de la mise en ligne

- [ ] ✎ [1] **Search Console** : ajouter le domaine (validation DNS dans Cloudflare), envoyer `sitemap.xml`, demander l'indexation de l'accueil. Ajouter le client comme propriétaire. (n° 45)
- [ ] ✎ [1] **Adresses** : HTTPS actif, une seule version du domaine (avec ou sans www, l'autre redirigée). Refonte : remplir `src/_redirects` avec les anciennes adresses listées au brief (301). (n° 24)
- [ ] ✎ [2] **Test des données structurées** : https://search.google.com/test/rich-results sur l'accueil, aucune erreur. (n° 38)
- [ ] ✎ [2] **Robots IA dans Cloudflare** : les robots de recherche (Googlebot, Bingbot, OAI-SearchBot, Claude-SearchBot, PerplexityBot) ne sont pas bloqués ; le blocage des robots d'entraînement reste au choix du client (détail dans DESIGN.md). (n° 84, 85)
- [ ] ✎ [3] **Bing Webmaster Tools** : import depuis la Search Console en deux clics. Bing sert aussi de source à certains assistants IA. (n° 46)
- [ ] ✎ [2] **Mesure sans cookie** : pas de Google Analytics par défaut (il impose un bandeau de cookies). La Search Console suffit ; si le client veut compter les visites, Cloudflare Web Analytics (gratuit, sans cookie). (n° 47)

## 4. La fiche Google Business (le plus gros levier local)

- [ ] 📍 [1] **Fiche au nom du client** (il est propriétaire, vous êtes gestionnaire), validée. (n° 70)
- [ ] 📍 [1] **Catégorie principale exacte** + 2 ou 3 secondaires, description, horaires (avec les jours fériés), services ou produits, lien vers le site. Si le client reçoit chez lui ou se déplace : zone desservie, adresse masquée. (n° 70, 71)
- [ ] 📍 [1] **Même nom, adresse, téléphone que sur le site**, au caractère près. (n° 72)
- [ ] 📍 [1] **Photos réelles** : au moins 10 (devanture, intérieur, équipe, réalisations), puis 1 ou 2 par mois.
- [ ] 📍 [1] **Avis** : lien direct de demande d'avis (mis dans `avis_google` de `site.json`), demandé à chaque client content, réponse à chaque avis, même négatif. Jamais d'avis achetés, inventés, échangés contre un cadeau ou triés : interdit par Google et puni par la loi en France (pratique commerciale trompeuse). (n° 73)
- [ ] 📍 [3] **Une publication Google par mois** (nouveauté, offre, événement) : signe que l'activité vit. (n° 96)

**Autour de la fiche : les annuaires (citations) et les liens locaux**
- [ ] ✎ [2] Même nom, adresse, téléphone sur : Pages Jaunes, Apple Plans (Apple Business Connect), Bing Places, Facebook, et l'annuaire du secteur (Planity, Houzz, TheFork, Doctolib…). (n° 74)
- [ ] ✎ [3] Quelques liens d'acteurs locaux réels : mairie, office de tourisme, chambre des métiers ou CCI, fournisseurs, partenaires, associations, presse locale. Jamais d'achat de liens. (n° 57, 60)

## 5. Après la mise en ligne

- [ ] ✎ [1] **À 1 mois** (point de suivi) : Search Console, pages bien indexées, pas d'erreur ; fiche Google à jour ; premiers avis demandés. (n° 18)
- [ ] ✎ [2] **À 3 mois** : regarder les recherches qui affichent le site. Une page vue souvent mais peu cliquée : retravailler son titre et sa description. (n° 48, 49, 50)
- [ ] ✎ [2] **Tous les 6 mois** (ou dans le rapport mensuel) : prix, horaires, photos et réalisations à jour ; une page ancienne relue. (n° 51, 52, 96)
- [ ] ✎ [1] **Patience** : un nouveau site met souvent 3 à 6 mois à trouver sa place. On ne change pas tout au bout de 3 semaines. (n° 100)

---

## Ce qu'on laisse de côté pour un petit site (et pourquoi)

| Notions | Pourquoi on ne s'en occupe pas |
|---|---|
| Crawl budget, navigation à facettes, pagination, analyse des logs, hreflang, SEO programmatique, élagage de contenu (n° 16, 27, 39, 40, 44, 53, 55) | Problèmes de sites de milliers de pages ou en plusieurs langues. |
| Rendu JavaScript, rendu côté serveur, soft 404, canoniques, contenu dupliqué (n° 21, 22, 26, 28, 29) | Réglés d'office : le gabarit produit des pages HTML statiques. |
| Désaveu de liens, scores d'autorité, part de voix, relations presse numériques, mentions non liées, récupération de liens (n° 58-64, 88) | Outils et indicateurs d'agences SEO, sans effet visible à cette échelle. |
| Knowledge Graph, panneaux de connaissance, entités (n° 66-68) | Ils viennent avec le temps d'une fiche Google complète et cohérente, pas d'une action à part. |
| AI Overviews, AI Mode, fan-out, passages, découpage, grounding, citations par les IA, mentions de marque dans les IA (n° 76-82, 87) | Rien de spécial à faire : un site clair, une vraie FAQ, une fiche Google complète et des avis, c'est ce que lisent aussi les assistants IA. Aucun résultat n'est garanti. |
| llms.txt, Markdown pour les agents (n° 83, 86) | Aucun grand moteur n'a confirmé s'en servir pour classer les sites. À revoir si cela change. |
| Vidéo, YouTube, Reddit et forums, extraits optimisés (n° 91, 93-95) | Seulement si le client produit déjà des vidéos ou si son secteur vit sur un forum. Offre à part. |
| Skills Claude « SEO » toutes faites (Local SEO, Keyword Gap, AI Visibility Audit… vues le 04/11/2026 chez keeran.ai) | Elles automatisent des tâches déjà dans cette liste. Avant d'en installer une : lire son contenu (une skill donne des instructions et parfois du code à Claude), vérifier d'où viennent ses chiffres (sans outil de données branché, elle devine), et ne jamais lui confier les accès d'un client. Pas besoin pour un site de 5 pages. |
| Mises à jour de Google, actions manuelles (n° 97, 99) | À connaître, pas à travailler : si on suit les règles anti-spam, il n'y a rien à corriger. |

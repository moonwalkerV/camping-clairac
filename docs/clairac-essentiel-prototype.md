# Clairac — L'essentiel : prototype

## Périmètre et audit

Le dossier actif est Eleventy 3, et non Astro : `eleventy.config.js` construit `src/` vers `_site/`. Les deux branches distantes examinées (`glimra/ux-audit-directions-2026-11` et `glimra/clairac-signature-2026-11`) contiennent elles aussi une structure Eleventy. Les répertoires locaux `.astro/` et `public/` existent mais ne définissent pas le build actif. La proposition part de l'état local et conserve les modifications préexistantes. Les cinq images de `public/images/` mentionnées dans le brief sont présentes et non suivies.

L'accueil actuel juxtapose notamment des tirages, annotations manuscrites, pictogrammes et blocs de tonalités différentes. Cette accumulation crée l'impression de carnet. Le prototype substitue à ces signes une photographie dominante, un rythme de vides et une typographie plus calme. Il conserve l'accroche descriptive du camping plutôt que « La nature. Rien de plus. », formule évocatrice mais moins informative et potentiellement excessive pour un lieu équipé.

## Direction

Fond minéral #f7f6f2, vert #25372d ; Fraunces et Source Sans 3 déjà hébergées localement. La signature est le paysage des pins qui remplit l'écran, prolongé par une composition ouverte et asymétrique. La sobriété photographique demandée pour Moke Valley et l'immersion recherchée pour Kaleo servent de principes, sans reprise de structure. Les pages de référence ont été consultées sous forme textuelle ; leurs animations et leur rendu réel n'ont pas été vérifiés visuellement.

Photographies examinées : prairie-pins-ombragee (hero, 900 × 1200, 277 Ko), tente-cloche-pins (emplacements, 765 × 1020), gite-exterieur-terrasse (gîte, 900 × 1200), vignes-domaine-batisse (ambiance, 1061 × 1020), gite-jardin-transats, emplacement-tente-ombrage, sous-bois-tentes, coucher-soleil-domaine et chemin-arbres-tunnel. Toutes proviennent du projet. La photo verticale du hero convient au mobile, mais sa résolution et son cadrage en grand écran méritent validation visuelle ; une photo paysage plus définie du domaine serait préférable si disponible. Aucun recadrage destructif n'a été réalisé.

## Architecture proposée après validation

1. Hero immersif.
2. L'expérience Clairac et la bâtisse.
3. Les emplacements et le gîte.
4. Une photographie panoramique du domaine.
5. Les informations essentielles sur la vie au camping.
6. Trois coups de cœur régionaux, avec lien vers les recommandations complètes.
7. Un dernier accès à la demande de réservation.

Seuls les trois premiers points sont réalisés. Les contenus existants restent en place sur l'accueil actuel et les pages intérieures. La suite dépend de la validation du prototype.


## Corrections visuelles et vérifications — 19 novembre 2026

- Les attributs HTML `width` et `height` définissaient les dimensions intrinsèques mais, en l'absence d'une hauteur CSS explicite sur les images des séjours, l'attribut `height` continuait à déterminer la hauteur rendue. La règle `aspect-ratio` seule ne pouvait pas imposer la proportion souhaitée. Le lien photographique possède désormais un cadre 4:5 et son image remplit ce cadre avec `width: 100%`, `height: 100%` et `object-fit: cover`. Les positions sont réglées séparément ; les originaux restent intacts.
- La prairie panoramique `prairie-emplacements.webp` (1 200 × 675) est utilisée sur grand écran ; la prairie sous les pins verticale est conservée pour mobile. Navigation sur l'image, bandeau démo conservé, voile adapté à la lisibilité. La photo de la bâtisse est agrandie et associée au texte ; la phrase décorative a été retirée.
- Vérification Chromium aux largeurs 360, 390, 768, 1024 et 1440 px : aucun débordement horizontal mesuré. Images des séjours respectivement 310 × 387 et 335 × 419 px aux deux largeurs mobiles ; les titres sont alignés à partir de 768 px. Toutes les images chargées sont disponibles.
- Menu mobile : ouverture avec Entrée, navigation par Tab, fermeture par Échap et retour du focus sur le bouton vérifiés. Avec `prefers-reduced-motion: reduce`, transitions à 0 s et défilement automatique. Console sans erreur après ajout du favicon.
- `npm run build` : réussi. Lighthouse mobile local : accessibilité 100, bonnes pratiques 100 ; SEO 66 car `noindex` est volontaire sur cette page de comparaison. L'outil Lighthouse disponible n'évalue pas la performance. Une trace locale sans limitation CPU ni réseau relève LCP 88 ms et CLS 0 ; ces chiffres locaux ne préjugent pas des performances des visiteurs. INP non mesuré. La trace signale un potentiel d'optimisation des images.
- Captures complètes : `docs/captures/clairac-essentiel-desktop.png` et `docs/captures/clairac-essentiel-mobile.png`.

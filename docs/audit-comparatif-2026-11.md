# Audit et prototypes Clairac — 19 novembre 2026

## Périmètre et origine

Le dépôt commence par un commit Astro (`ccf4d7a`). La refonte Eleventy a été intégrée par `c8a2324` ; `main` au départ de cet audit est `3338f69`, sous Eleventy 3. L'onglet IDE `astro.config.mjs` ne correspond pas à un fichier présent dans cet état du dossier. La branche distante `glimra/ux-audit-directions-2026-11` descend de cette version Eleventy : elle propose des liens de séjour dans le héros, une protection du formulaire et un audit, sans nécessiter de fusion. Les cinq images non suivies de `public/images/` ont été conservées.

## Constat et priorités

| Priorité | Constat | Proposition |
| --- | --- | --- |
| Haute | Le formulaire de démonstration présentait un bouton d'envoi avec une clé de remplacement. | Champs et envoi désactivés tant que la démo est active ou la configuration absente ; téléphone et e-mail restent disponibles. |
| Haute | Les deux cartes de séjour et les tarifs existent, mais arrivent après plusieurs sections sur l'accueil actuel. | Accès aux deux séjours après le premier écran dans les prototypes, avec prix existant et tarif du gîte sur demande. |
| Haute | Identité juridique, gîte et formulaire définitif restent à valider. | Ne pas inventer de données ; vérifier les textes légaux et effectuer un véritable test d'envoi avant publication. |
| Moyenne | L'identité carnet et les photos authentiques sont fortes ; le héros actuel privilégie réservation et téléphone avant le choix du séjour. | Comparer une composition scindée et une couverture photographique, tout en gardant le contenu et les sections existants. |
| Moyenne | Les recommandations complémentaires utilisent déjà des `details`, la navigation mobile possède un bouton et la météo une solution de repli. | Conserver ces composants ; vérifier les parcours sur appareils et au clavier. |
| Moyenne | La démo est volontairement `noindex`. | Conserver ce réglage jusqu'à validation du site final ; vérifier canonical, sitemap, redirections et données structurées avant publication. |

## Vérifications réalisées

- Compilation `npm run build` réussie ; `npm ci` ne signale aucune vulnérabilité connue.
- À 360, 390, 768 et 1440 px, les deux prototypes ont été mesurés sans débordement horizontal ; un H1 et deux liens de séjour par page.
- Clics vérifiés vers les ancres emplacements et gîte, ouverture du menu mobile et d'une liste d'adresses ; premier focus clavier sur le lien d'évitement, avec contour visible. Ce n'est pas un parcours clavier exhaustif.
- Formulaire de démo vérifié : champs et bouton désactivés, aucune action Web3Forms ; aucun envoi réel réalisé.
- Météo courante et prévisions reçues dans le navigateur lors du test ; la disponibilité future du service externe n'est pas garantie.
- Lighthouse mobile : accessibilité 100 et bonnes pratiques 100 pour chaque prototype ; SEO 69 car `noindex` volontaire. Ces scores ne prouvent pas la conformité WCAG 2.2 AA.
- Trace locale non bridée de la proposition A : LCP 132 ms, CLS 0 ; ces chiffres sur localhost ne représentent pas les Core Web Vitals de visiteurs réels. INP et Lighthouse performance représentatifs restent à mesurer.

## Limites et suite

Les variantes sont des prototypes d'accueil, pas deux refontes complètes des pages internes. Vérifier l'ensemble du site avec technologies d'assistance, clavier, contrastes et appareils réels ; tester les liens externes, l'échec réseau météo et la validation des dates. Valider juridiquement les mentions et la politique de données, les caractéristiques et prix du gîte, les coordonnées et le paramétrage Web3Forms ; tester l'envoi réel avant toute mise en ligne. Les cinq images locales non suivies ne sont pas intégrées aux prototypes.

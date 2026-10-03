
## Images réelles intégrées

Cette version inclut désormais de vrais visuels de créations dans les 7 catégories du site :

- Colliers
- Poignets & manchettes
- Chaînes de taille
- Parures de buste
- Boucles d’oreilles
- Ensembles couple
- Bijoux de corps

Les 70 fichiers attendus par la boutique sont toujours présents au même endroit.
Vous pouvez continuer à les remplacer simplement en conservant le même nom de fichier.

# BYSSUS TENEBRARUM — V3 EXPERIENCE

Cette version ajoute une vraie couche d'expérience visuelle et interactive au site.

## Nouveautés V3
- hero avec diaporama automatique de catégories
- catégories visibles immédiatement dès la page d'accueil
- rail horizontal interactif des 7 univers
- mosaïque visuelle asymétrique des catégories
- onglets de styles (Mystique, Gothique, Romantique sombre, Égyptien, Minimal)
- cartes produits animées
- transitions et zooms doux sur les images
- bouton “Voir le bijou” au survol
- mise en avant claire de la rubrique sur-mesure
- design beaucoup plus vivant tout en restant responsive
- navigation mobile conservée
- 70 PNG facilement remplaçables comme avant

# BYSSUS TENEBRARUM — Site V2

Version pensée pour GitHub Pages, responsive et très simple à maintenir.

## Correctif V2.1 — Header / logo
- logo recadré pour supprimer les marges noires inutiles
- logo beaucoup plus grand et centré
- navigation déplacée sur une ligne dédiée sous la marque
- header plus premium et mieux intégré au thème
- menu mobile simplifié avec accès panier permanent

## Ce qui change
- logo agrandi dans le header
- navigation desktop + menu mobile
- boutique complète
- 7 catégories × 10 images PNG = 70 emplacements photo
- aucun changement HTML nécessaire pour remplacer les photos
- configurateur sur-mesure en 10 étapes
- panier localStorage
- pages produit automatiques
- responsive mobile / tablette / desktop

## Gestion ultra-simple des photos

Remplacez simplement les fichiers PNG dans :

- `assets/images/products/colliers/`
- `assets/images/products/manchettes/`
- `assets/images/products/chaines-taille/`
- `assets/images/products/parures-buste/`
- `assets/images/products/boucles-oreilles/`
- `assets/images/products/ensembles-couple/`
- `assets/images/products/bijoux-corps/`

Chaque dossier contient exactement 10 PNG numérotés `01` à `10`.

Exemple :
`assets/images/products/colliers/colliers-01.png`

Pour changer la photo du modèle 01, remplacez ce fichier par votre vraie photo PNG en conservant exactement le même nom.

## Modifier un produit

Éditez uniquement `data/products.json` pour :
- nom
- prix
- pierre
- description
- image
- catégorie

## Ajouter ou modifier une catégorie

Le fichier `data/catalog.json` contient les catégories principales.

## Format recommandé des images

PNG vertical, ratio 4:5.
Idéal : `1200 × 1500 px`.

## Configurateur sur-mesure

`creation.html` + `js/builder.js`

10 étapes :
1. Type de bijou
2. Univers esthétique
3. Pierre
4. Fil / couleurs
5. Métal
6. Intention
7. Taille
8. Fermeture
9. Niveau de finition
10. Mesures, message, budget et image PNG de référence

La photo de référence est prévisualisée localement. Pour transmettre réellement le fichier à l’artisane, connecter ensuite un service de formulaire / stockage.

## Paiement

Le panier est fonctionnel côté navigateur.
Le bouton final doit être connecté à Stripe Checkout, PayPal, Shopify, WooCommerce ou autre solution de paiement.

## GitHub Pages

Déposer tout le contenu du dossier à la racine du dépôt.
Puis `Settings > Pages > Deploy from a branch > main / root`.


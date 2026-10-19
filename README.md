# Codexium — Plateforme & Services Numériques Professionnels

Codexium est une entreprise spécialisée dans le développement web, l’ingénierie logicielle,
l’audit cybersécurité, l’automatisation, et la création de solutions numériques sur mesure.
Ce dépôt contient le code source du site officiel Codexium, développé et maintenu par
Matt Cornic.

Ce site présente l’identité de Codexium, ses services, ses compétences, ses projets, ainsi
que les solutions professionnelles proposées aux entreprises, collectivités et organisations.

---

## 🧭 Vision & Mission

Codexium a pour objectif d’offrir des solutions numériques modernes, performantes et
hautement sécurisées.  
Notre mission : accompagner les entreprises dans la conception, l’optimisation et la
protection de leurs systèmes numériques.

---

## 🚀 Fonctionnalités du site

- Interface professionnelle et responsive  
- Pages dédiées : Accueil, Profil, Portfolio, Tarifications, Audit Cybersécurité  
- Génération automatique de CV PDF  
- Animations fluides et transitions modernes  
- Architecture React optimisée  
- Contenu centralisé et facilement administrable  
- Intégration de composants réutilisables  
- Structure pensée pour un usage professionnel et évolutif  

---

## 🗂️ Structure du projet

- `src/app` : initialisation et routes React
- `src/pages` : pages publiques du site
- `src/components` : composants partagés, dont les métadonnées SEO
- `public` : ressources statiques, sitemap, robots.txt et page 404

## Build et référencement

`yarn build` compile le site puis pré-rend les pages publiques dans `build/` afin que leur contenu et leurs métadonnées soient présents dans le HTML livré aux moteurs de recherche. Le pré-rendu nécessite Puppeteer et son navigateur Chromium.

Lorsqu’une route publique est ajoutée ou supprimée, mettez à jour la liste `routes` dans `scripts/prerender.cjs` ainsi que `public/sitemap.xml`. La page `public/404.html` est conservée au déploiement pour éviter de présenter l’accueil comme une page introuvable.

---

## 🔒 Licence & Propriété

Ce projet est soumis à une **licence propriétaire Codexium**.  
Aucune partie du code, du design, des ressources ou de la structure du projet ne peut être :

- copiée  
- modifiée  
- redistribuée  
- publiée  
- intégrée dans un autre logiciel  
- exploitée commercialement  

sans l’autorisation écrite de **Matt Cornic — Codexium**.

Toute violation pourra entraîner des poursuites conformément aux lois en vigueur.

---

## 📬 Contact Professionnel

Pour toute demande commerciale, technique ou partenariat :

**Matt Cornic — Codexium**  
📧 contact@codexium.fr  
🌐 https://codexium.fr

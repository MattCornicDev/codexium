// src/pages/profile/Profile.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyPdfDocument from '../../components/pdfDocument/MyPdfDocument';


const Profile = () => {
  return (

    <Container className="mt-5">
      {/* Ajouter ici le bouton de téléchargement du PDF 
      <Row className="text-center mb-4">
        <Col>
          <PDFDownloadLink
            document={<MyPdfDocument />}
            fileName="Profile.pdf"
          >
            {({ loading }) =>
              loading ? 'Génération du PDF...' : 'Télécharger le CV en PDF'
            }
          </PDFDownloadLink>
        </Col>
      </Row>
*/}
      <Row className="text-center mb-4">
        <Col>
          <h1>Rarib LAAMIMAT</h1>
          <h2 className="text-muted">Développeur Full Stack</h2>
          <p>Paris (75) | glgharib@gmail.com | +33 6 79 57 04 98</p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h3>Présentation</h3>
          <p>
            Développeur spécialisé dans le déploiement d’applications <strong>React JS</strong> orientées SaaS, je souhaite rejoindre une entreprise investie dans ce domaine afin de contribuer à des projets ambitieux et valoriser pleinement mes compétences.
          </p>
          <p>
            Je maîtrise <strong>React JS, NextJS, NestJS et Rust</strong>, et je recherche une structure qui utilise ou explore ces technologies. Mon intérêt se porte également sur les innovations liées à la blockchain, notamment Ethereum et les plateformes de contrats intelligents.
          </p>
          <p>
            Je suis motivé par une culture d’entreprise fondée sur <strong>la coopération, l’innovation et la créativité</strong>. J’aspire à évoluer dans un environnement offrant des perspectives de progression et de formation continue, tout en préservant un équilibre entre vie professionnelle et personnelle. Les modalités telles que le télétravail ou la flexibilité des horaires constituent pour moi des atouts essentiels.
          </p>
          <p>
            Mon objectif global est de perfectionner mes compétences en explorant de nouvelles technologies et de m’intégrer dans un cadre professionnel stimulant, garantissant à la fois un développement de carrière solide et une harmonie durable entre mes engagements personnels et professionnels.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h3>Informations personnelles</h3>
          <ul className="list-unstyled">
            <li><strong>Date de naissance:</strong> 1980-07-03</li>
            <li><strong>Niveau d'expérience global:</strong> Expérimenté(e)</li>
            <li><strong>Secteur:</strong> Numérique et développement informatique, SI et TIC, Support informatique et technique</li>
            <li><strong>Total years of experience:</strong> 10</li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h4>Consultant Cybersécurité Freelance</h4>
          <p><strong>Entreprises & Collectivités – Hauts-de-France (59)</strong> | 2024 - aujourd'hui</p>
          <ul>
            <li>
              Réalisation d’audits de sécurité techniques et organisationnels : analyse des risques,
              identification des vulnérabilités, évaluation des pratiques internes et recommandations
              adaptées aux contraintes métiers.
            </li>
            <li>
              Mise en place de politiques de sécurité conformes aux bonnes pratiques (ANSSI, NIS2),
              incluant la gestion des accès, la protection des données, la sécurisation des environnements
              cloud et la sensibilisation des équipes.
            </li>
            <li>
              Conduite de tests d’intrusion internes et externes, avec rédaction de rapports détaillés,
              exploitation contrôlée des failles et accompagnement dans la remédiation.
            </li>
            <li>
              Déploiement de solutions de surveillance et de détection (SIEM, EDR), configuration
              d’alertes, création de tableaux de bord et amélioration continue des capacités de réponse
              aux incidents.
            </li>
            <li>
              Accompagnement des DSI et responsables sécurité : préparation aux certifications,
              mise en conformité, gestion de crise, plan de reprise d’activité et pilotage de la
              sécurité au quotidien.
            </li>
          </ul>
        </Col>
      </Row>


      <Row className="mb-5">
        <Col>
          <h4>Développeur Full Stack</h4>
          <p><strong>Cabinet Dentaire de l’Ostrevent – Hauts-de-France (59)</strong> | 2024 - aujourd'hui</p>
          <ul>
            <li>
              Développement complet d’une application de gestion pour le Cabinet Dentaire de l’Ostrevent,
              incluant la définition des fonctionnalités, la conception du produit et la réalisation des modules principaux.
            </li>
            <li>
              Organisation du projet en méthode agile, avec itérations courtes, priorisation des besoins
              et intégration continue des retours du client.
            </li>
            <li>
              Mise en place de tests unitaires pour garantir la fiabilité du code et la stabilité de l’application.
            </li>
            <li>
              Déploiement de l’application sur Vercel, avec gestion du domaine et configuration DNS via OVH.
            </li>
            <li>
              Maintenance corrective et évolutive assurée tout au long du cycle de vie du projet.
            </li>
          </ul>
        </Col>
      </Row>


      <Row className="mb-5">
        <Col>
          <h4>Développeur Full Stack</h4>
          <p><strong>AOM Technologie - Haut de France (59)</strong> | Aout 2020 - aujourd'hui</p>
          <ul>
            <li>Conception et développement d'une application : Élaboration et mise en œuvre complète d'une
              application, incluant la définition des fonctionnalités, la conception
              de l'architecture, et le développement des modules principaux.</li>
            <li>Migration vers une application Next.js : Transition de l'application existante vers une infrastructure
              moderne basée sur Next.js, optimisant ainsi les performances, la scalabilité et l'expérience utilisateur.</li>
            <li>Utilisation des outils Git et GitHub : Gestion efficace du code source et des versions de l'application à
              l'aide de Git pour le contrôle des versions, et GitHub pour la collaboration et l'intégration continue.</li>
          </ul>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h4>Développeur Full Stack Next.js</h4>
          <p><strong>Raja Athletic Club - Casablanca (59)</strong> | Janvier 2025 - aujourd'hui</p>
          <ul>
            <li>Application visant à renforcer l'engagement des supporters du Raja Club Athletic en leur fournissant une source d'informations centralisée et interactive sur leur club préféré. Elle permet également de promouvoir les activités et les produits associés au club, tout en offrant une expérience utilisateur agréable. </li>
            <li>Technologies Utilisées :
              Développée avec React et Next.js, l'application bénéficie d'une architecture moderne permettant un rendu côté serveur
              pour des performances optimales.</li>
            <li> Les composants sont organisés de manière modulaire, facilitant la maintenance et
              l'extension des fonctionnalités. L'application est conçue pour être accessible sur divers appareils, offrant une expérience
              utilisateur fluide tant sur mobile que sur desktop.</li>
          </ul>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h4>Formateur</h4>
          <p><strong>Greta grand Hainaut - Cambrai (59)</strong> | septembre 2022 - 2023</p>
          <ul>
            <li>Création de sites web front-end : Enseignement de la création de sites web en utilisant HTML, CSS et JavaScript, avec des projets pratiques pour renforcer les compétences en développement de l'interface utilisateur.</li>
            <li>Développement back-end avec Node.js et MongoDB : Formation sur la création de back-ends robustes en utilisant Node.js, et gestion des bases de données NoSQL avec MongoDB, incluant la manipulation des données et la création d'API.</li>
            <li>Développement de sites web avec React.js : Instruction sur l'utilisation de React.js pour la construction de sites web dynamiques et réactifs, en mettant l'accent sur les composants, l'état, et le cycle de vie des applications React.</li>
            <li>Apprentissage du SQL et de MySQL Workbench : Introduction aux bases de données relationnelles, apprentissage du langage SQL et utilisation de MySQL Workbench pour la conception et la gestion des bases de données.</li>
          </ul>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h4>Formateur Web Front-End</h4>
          <p><strong>M2i - Lille (59)</strong> | Juin 2023 - Aout 2023</p>
          <ul>
            <li>Formation en HTML, CSS, Bootstrap et Vue.js : Animation de sessions de formation approfondies sur
              les technologies front-end, incluant HTML pour la structure des pages web, CSS pour le style et la
              présentation, Bootstrap pour le développement réactif et rapide, ainsi que Vue.js pour la création
              d'applications web interactives et dynamiques.</li>
            A            <li>Développement de supports pédagogiques : Création de supports de cours, tutoriels, et exercices
              pratiques pour faciliter l'apprentissage et assurer une compréhension solide des concepts enseignés.</li>
            <li>Accompagnement personnalisé : Suivi individuel des apprenants pour répondre à leurs questions,
              corriger leurs travaux, et les guider dans la réalisation de projets concrets, garantissant ainsi leur
              progression et leur réussite.</li>
          </ul>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h4>Développeur PHP Symfony</h4>
          <p><strong>Suez - Le Pecq (59)</strong> | Juillet 2021 - Novembre 2021</p>
          <ul>
            <li>Développement avec le framework PHP Symfony : Conception et développement d'une application SaaS
              robuste et évolutive en utilisant le framework PHP Symfony, garantissant une architecture solide et des
              performances optimisées.</li>
            <li>Gestion du code avec Git et GitHub : Utilisation de Git pour le contrôle de version et de GitHub pour la
              collaboration en équipe, facilitant l'intégration continue et le suivi des modifications de code.
              Travail en équipe : Collaboration étroite avec d'autres développeurs, designers et chefs de projet pour
              assurer la réussite du projet et la satisfaction des utilisateurs finaux.</li>
            <li>Utilisation de Jenkins et Docker : Mise en place et gestion de l'intégration et du déploiement continus
              (CI/CD) avec Jenkins, et utilisation de Docker pour la containerisation et la gestion des environnements
              de développement et de production.</li>
            <li>Gestion du personnel informatique : Développement d'une application permettant de gérer les
              présences, les absences, l'occupation des locaux durant la pandémie de COVID-19 et le télétravail, ainsi
              que les compétences et disponibilités de chacun.</li>
            <li>Suivi des projets : Fonctionnalités intégrées pour suivre l'évolution des projets en cours et terminés,
              offrant une vue d'ensemble sur l'avancement des travaux et la gestion des ressources.</li>
          </ul>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h4>Développeur Full Stack</h4>
          <p><strong>Greta - Lille (59)</strong> | Avril 2021 - Juillet 2021</p>
          <ul>
            <li>Conception et développement avec Vue.js : Création d'une application web dynamique et réactive en
              utilisant Vue.js pour fournir des informations à jour sur les récentes sorties cinématographiques, avec
              des fonctionnalités de recherche, de filtrage, et d'affichage des films.</li>
            <li>Utilisation de Tailwind CSS : Application de Tailwind CSS pour un design moderne et réactif, garantissant
              une expérience utilisateur fluide et attrayante sur tous les types d'appareils.</li>
            <li>Intégration des bibliothèques Vue.js pour les API : Utilisation des bibliothèques Vue.js pour interagir avec
              des API tierces, permettant la mise à jour automatique des images, descriptions, et données des films
              afin d'offrir des informations précises et à jour.</li>
            <li>Gestion du code avec Git et GitHub : Utilisation de Git pour le contrôle de version et GitHub pour la
              collaboration et le suivi des modifications de code, facilitant ainsi un développement structuré et efficace.</li>
            <li>Déploiement avec Netlify : Déploiement de l'application sur Netlify, assurant un hébergement performant
              et une mise en ligne rapide des mises à jour.</li>
            <li>Automatisation des tâches : Mise en place de processus automatisés pour la gestion des données et les
              mises à jour régulières, réduisant les interventions manuelles et améliorant l'efficacité opérationnelle
              de l'application.</li>
          </ul>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h4>Développeur Full Stack</h4>
          <p><strong>Euratech'Kids - Lille Euratechnologie (59)</strong> | Aout 2020 - Janvier 2021</p>
          <ul>
            <li>Conception et développement avec Symfony : Création d'une application SaaS robuste et évolutive en
              utilisant le framework Symfony, garantissant une architecture solide et une maintenance facilitée.</li>
            <li>Utilisation de SQL et MySQL : Intégration de bases de données relationnelles MySQL avec SQL pour
              le stockage et la gestion des données de l'application, assurant une gestion efficace des informations
              relatives aux programmes d'événements, aux ateliers et aux activités de l'organisation.</li>
            <li>Intégration des bibliothèques Vue.js pour les API : Utilisation des bibliothèques Vue.js pour interagir avec
              des API tierces, permettant la mise à jour automatique des images, descriptions, et données des films
              afin d'offrir des informations précises et à jour.</li>
            <li>Intégration de Twig et Bootstrap : Utilisation de Twig pour la gestion des vues et de Bootstrap pour
              le développement d'une interface utilisateur moderne et réactive, offrant une expérience utilisateur
              optimale sur tous les appareils.</li>
            <li>Gestion du code avec Git et GitHub : Utilisation de Git pour le contrôle de version du code source et de
              GitHub pour la collaboration en équipe, facilitant ainsi la gestion des modifications de code et le suivi
              des contributions individuelles.</li>
            <li>Travail en équipe : Collaboration étroite avec d'autres développeurs, concepteurs et membres de l'équipe
              pour concevoir, développer et tester l'application, en suivant les meilleures pratiques de développement
              logiciel et en assurant la cohérence du projet.</li>
            <li>Gestion des programmes d'événements et des inscriptions : Intégration de fonctionnalités pour gérer les
              programmes d'événements, les inscriptions aux ateliers et les activités de l'organisation, en offrant aux
              utilisateurs une plateforme centralisée pour accéder aux informations et s'inscrire aux événements.</li>
            <li>Communication et information du public : Mise en place de fonctionnalités pour informer le public des
              activités de l'organisation, en fournissant des actualités, des annonces et des mises à jour régulières sur
              les événements à venir et les opportunités de participation.</li>
          </ul>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h4>Développeur NodeJS</h4>
          <p><strong>OneFoncy - Kenitra, Maroc</strong> | Juin 2020 - Octobre 2020</p>
          <ul>
            <li>Conception et développement avec Node.js : Création d'une application SaaS robuste et évolutive
              en utilisant Node.js, permettant de gérer efficacement le processus d'immatriculation des véhicules
              motorisés.</li>
            <li>Architecture modulaire et extensible : Mise en place d'une architecture modulaire pour faciliter
              l'extension de fonctionnalités et l'adaptation aux besoins changeants de l'entreprise et des utilisateurs.</li>
            <li>Gestion complète du processus d'immatriculation : Intégration de fonctionnalités pour gérer l'ensemble
              du processus d'immatriculation des véhicules, y compris la saisie des données, la validation, la génération
              des documents requis, et la communication avec les autorités compétentes.</li>
            <li>Utilisation des meilleures pratiques de sécurité : Implémentation de mesures de sécurité robustes pour
              protéger les données sensibles des utilisateurs et assurer la conformité aux normes de sécurité en
              vigueur.</li>
            <li>Intégration de services tiers : Intégration de services tiers tels que des bases de données géographiques
              pour la validation des adresses et des API de paiement pour le traitement des frais d'immatriculation.</li>
            <li>Déploiement et scalabilité : Déploiement de l'application dans un environnement cloud scalable,
              permettant de gérer efficacement les pics de trafic et d'assurer une disponibilité maximale du service.</li>
            <li>Utilisation de Git pour la gestion du code : Utilisation de Git pour le contrôle de version du code source,
              facilitant la collaboration en équipe et assurant la traçabilité des modifications.</li>
            <li>Développement centré sur l'utilisateur : Conception d'une interface utilisateur intuitive et conviviale,
              garantissant une expérience utilisateur optimale tout au long du processus d'immatriculation des
              véhicules.</li>
          </ul>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h4>Développeur Swift</h4>
          <p><strong>Apple Foundation - Paris (75)</strong> | Juin 2020 - Aout 2020</p>
          <ul>
            <li>Développement d'une application en Swift : Conception et développement d'une application mobile en
              utilisant le langage de programmation Swift, visant à enseigner aux enfants en bas âge le tri sélectif des
              déchets ménagers de manière ludique et interactive.</li>
            <li>Création d'un jeu éducatif : Conception et implémentation d'un jeu interactif pour engager les enfants
              dans l'apprentissage du tri sélectif, en utilisant des mécanismes de jeu attrayants et des éléments visuels
              stimulants.</li>
            <li>Travail en équipe : Collaboration étroite avec d'autres membres de l'équipe pour concevoir, développer
              et tester l'application, en suivant les meilleures pratiques de développement logiciel et en assurant la
              cohérence du projet.</li>
            <li>Utilisation de l'UX/UI : Intégration de principes de conception UX/UI pour créer une expérience utilisateur
              fluide et intuitive, garantissant que l'application soit facile à comprendre et agréable à utiliser pour les
              jeunes utilisateurs.</li>
            <li>Reconnaissance par un jury : L'application a retenu l'intérêt d'un jury et a été sélectionnée pour être
              présentée à l'App Store des Champs-Élysées lors d'un événement organisé par Apple, démontrant ainsi
              la qualité et l'innovation du projet.</li>
            <li>Présentation du projet lors d'un événement Apple : Opportunité unique de présenter le projet devant un
              public prestigieux lors de l'événement organisé par Apple, mettant en lumière le talent et l'engagement
              de l'équipe dans le développement d'applications éducatives novatrices.</li>
          </ul>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h4>Agent Commercial</h4>
          <p><strong>Refrisol - Lille (59)</strong> | Décembre 2015 - Mai 2019</p>
          <ul>
            <li>Mission de médiation entre sociétés de production et cimenteries : Responsabilité principale de servir
              d'intermédiaire entre les sociétés de production de briques réfractaires en Belgique et en Pologne et les
              cimenteries au Maroc, en facilitant les échanges commerciaux et en favorisant les partenariats fructueux.</li>
            <li>Développement et gestion des relations commerciales : Établissement de relations solides et durables
              avec les sociétés de production de briques réfractaires ainsi qu'avec les cimenteries, en entretenant une
              communication régulière et en identifiant les opportunités de collaboration et de croissance mutuelle.</li>
            <li>Négociation et conclusion des contrats : Conduite de négociations commerciales avec les parties
              concernées pour définir les termes et conditions des contrats, en veillant à ce que les intérêts des deux
              parties soient pris en compte et en garantissant la conformité aux réglementations commerciales et aux
              normes de qualité.</li>
            <li>Suivi et gestion des projets : Suivi attentif des projets en cours, en assurant un suivi rigoureux des étapes
              de production, de livraison et d'installation des briques réfractaires, tout en veillant au respect des délais
              et des exigences spécifiques des cimenteries.</li>
            <li>Analyse du marché et veille concurrentielle : Analyse continue du marché des briques réfractaires et de
              l'industrie cimentière, en identifiant les tendances du marché, en évaluant la concurrence et en proposant
              des stratégies d'adaptation et de différenciation pour maintenir la compétitivité de Refrisol.</li>
            <li>Reporting et gestion administrative : Préparation de rapports réguliers sur l'activité commerciale, les
              performances des ventes et les prévisions, en fournissant des informations précises à la direction pour
              prendre des décisions éclairées et élaborer des stratégies de croissance.</li>
          </ul>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h4>Conseiller Municipal</h4>
          <p><strong>Ville d'Escaudain - Escaudain (59)</strong> | Juin 2007 - Juin 2018</p>
          <ul>
            <li>Gestion de projets municipaux : Responsabilité principale dans la gestion et la coordination de projets
              municipaux, en veillant à leur bonne exécution dans le respect des délais, des budgets et des objectifs
              fixés.</li>
            <li>Participation active aux commissions municipales : Participation régulière aux commissions municipales,
              notamment celles dédiées à l'urbanisme, au sport, aux finances, aux appels d'offres et à la politique de
              la ville, en apportant des contributions constructives et en influençant les décisions stratégiques.</li>
            <li>Représentation de la ville dans le syndicat intercommunal d'assainissement des eaux : Rôle de
              représentant de la ville au sein du syndicat intercommunal d'assainissement des eaux, en défendant
              les intérêts de la municipalité et en participant activement aux discussions et aux prises de décisions
              relatives à la gestion des infrastructures d'assainissement.</li>
            <li>Collaboration avec les différents acteurs locaux : Collaboration étroite avec les différents acteurs locaux,
              y compris les autres membres du conseil municipal, les services municipaux, les associations locales et
              les citoyens, en favorisant le dialogue et la concertation pour répondre aux besoins et aux aspirations
              de la communauté.</li>
            <li>Élaboration et suivi des politiques municipales : Contribution à l'élaboration et au suivi des politiques
              municipales, en proposant des initiatives et des mesures visant à améliorer la qualité de vie des habitants,
              à favoriser le développement économique et social de la ville, et à promouvoir une gestion durable des
              ressources.</li>
            <li>Communication et transparence : Communication régulière avec les citoyens pour informer sur les
              décisions prises par le conseil municipal, les projets en cours et les initiatives à venir, en promouvant la
              transparence et en encourageant la participation citoyenne à la vie démocratique locale.</li>
          </ul>
        </Col>
      </Row>
      {/* Ajoutez des sections similaires pour les autres expériences professionnelles */}

      <Row className="mb-5">
        <Col>
          <h3>Formation</h3>
          <h4>Bac +4 (Master) en Informatique</h4>
          <p><strong>le Greta - Douai (59)</strong></p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h3>Compétences</h3>
          <ul>
            <li>Connaissance du backend</li>
            <li>Connaissance de C/C++ (6 ans)</li>
            <li>Symfony (5 ans)</li>
            <li>Node.js (6 ans)</li>
            <li>React (5 ans)</li>
            <li>Agile (3 ans)</li>
            <li>methode Scrum (3 ans)</li>
            <li>Docker (3 ans)</li>
            <li>Jenkins (2 ans)</li>
            <li>Administration</li>
            <li>Communication</li>
            <li>Élaboration de programmes (8 ans)</li>
            <li>Conception pédagogique</li>
            <li>Planification de leçons</li>
            <li>Mentorat</li>
            <li>Enseignement (3 ans)</li>
            <li>Formation (3 ans)</li>
            <li>Conception</li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h3>Langues</h3>
          <ul>
            <li>Français - Avancé</li>
            <li>Anglais - Intermédiaire</li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h3>Liens</h3>
          <ul>
            <li><a href="https://github.com/MattCornicDev">https://github.com/MattCornicDev</a></li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;

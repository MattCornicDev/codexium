const tarifications = {
    title: "Tarification",
    description: "Tarification détaillée pour la création d’une application web professionnelle",

    items: [
        {
            category: "Conception & Analyse",
            details: [
                {
                    name: "Analyse du besoin + cahier des charges",
                    description: "Étude complète du projet, définition des fonctionnalités, architecture, maquettes.",
                    price: "300€ – 800€"
                },
                {
                    name: "Conception UX/UI",
                    description: "Wireframes, design system, prototypes interactifs.",
                    price: "400€ – 1 200€"
                }
            ]
        },

        {
            category: "Développement Front-End",
            details: [
                {
                    name: "Interface utilisateur (React / Next.js)",
                    description: "Composants réutilisables, pages dynamiques, App Router, Tailwind CSS.",
                    price: "800€ – 3 000€"
                },
                {
                    name: "Responsive design",
                    description: "Optimisation mobile/tablette/desktop.",
                    price: "200€ – 600€"
                },
                {
                    name: "Animations & interactions",
                    description: "Framer Motion, transitions, micro‑interactions.",
                    price: "150€ – 500€"
                }
            ]
        },

        {
            category: "Développement Back-End",
            details: [
                {
                    name: "API REST / API Routes Next.js",
                    description: "Création d’API sécurisées, gestion des données, endpoints CRUD.",
                    price: "600€ – 2 000€"
                },
                {
                    name: "Base de données",
                    description: "Supabase, PostgreSQL, MongoDB, Prisma.",
                    price: "300€ – 1 200€"
                },
                {
                    name: "Authentification sécurisée",
                    description: "JWT, OAuth, gestion des rôles, sessions.",
                    price: "300€ – 900€"
                }
            ]
        },

        {
            category: "Fonctionnalités Avancées",
            details: [
                {
                    name: "Dashboard administrateur",
                    description: "Statistiques, gestion des utilisateurs, gestion des contenus.",
                    price: "800€ – 2 500€"
                },
                {
                    name: "Système de paiement",
                    description: "Stripe, PayPal, paiements récurrents, facturation.",
                    price: "400€ – 1 500€"
                },
                {
                    name: "Notifications",
                    description: "Emails automatiques, SMS, push.",
                    price: "200€ – 800€"
                }
            ]
        },

        {
            category: "SEO & Performance",
            details: [
                {
                    name: "SEO technique",
                    description: "Sitemap, robots.txt, balises meta, optimisation App Router.",
                    price: "200€ – 700€"
                },
                {
                    name: "Optimisation des performances",
                    description: "Images, cache, CDN, Lighthouse.",
                    price: "200€ – 600€"
                }
            ]
        },

        {
            category: "Déploiement & Hébergement",
            details: [
                {
                    name: "Déploiement Vercel",
                    description: "Build, configuration, logs, monitoring.",
                    price: "100€ – 300€"
                },
                {
                    name: "Configuration DNS OVH",
                    description: "Domaines, sous‑domaines, redirections.",
                    price: "80€ – 200€"
                },
                {
                    name: "CI/CD automatisée",
                    description: "GitHub Actions, tests, pipelines.",
                    price: "150€ – 500€"
                }
            ]
        },

        {
            category: "Maintenance",
            details: [
                {
                    name: "Maintenance corrective",
                    description: "Correction de bugs, mises à jour.",
                    price: "50€ – 150€ / mois"
                },
                {
                    name: "Maintenance évolutive",
                    description: "Ajout de fonctionnalités, optimisation continue.",
                    price: "100€ – 300€ / mois"
                }
            ]
        },

        {
            category: "Pack complet",
            details: [
                {
                    name: "Application web professionnelle complète",
                    description: "Front + Back + API + Base de données + SEO + Déploiement + Maintenance 1 mois.",
                    price: "2500€ – 12000€ selon complexité"
                }
            ]
        }
    ]
};

export default tarifications;

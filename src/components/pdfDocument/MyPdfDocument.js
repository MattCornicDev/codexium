// src/components/pdfDocument/MyPdfDocument.js
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        fontFamily: "Helvetica",
        fontSize: 11,
        padding: 40,
    },

    headerName: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 4,
    },
    headerRole: {
        fontSize: 14,
        color: "#555",
        marginBottom: 20,
    },

    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        textTransform: "uppercase",
        color: "#333",
    },

    text: {
        fontSize: 11,
        lineHeight: 1.5,
        marginBottom: 6,
    },

    expBlock: {
        marginBottom: 14,
    },
    expTitle: {
        fontSize: 13,
        fontWeight: "bold",
        marginBottom: 2,
    },
    expCompany: {
        fontSize: 11,
        color: "#444",
        marginBottom: 2,
    },
    expDate: {
        fontSize: 10,
        color: "#666",
        marginBottom: 4,
    },

    listItem: {
        fontSize: 11,
        marginBottom: 4,
    },

    divider: {
        marginVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
});

const MyPdfDocument = () => {
    const experiences = [
        {
            title: "Développeur Full Stack",
            company: "AOM Technologies",
            location: "Hauts-de-France (59)",
            startDate: "Août 2020",
            endDate: "Présent",
            description:
                "Développement d'applications SaaS avec React JS, Next.js et Node.js.\n" +
                "Migration vers une architecture moderne Next.js.\n" +
                "Gestion du code via Git & GitHub.",
        },
        {
            title: "Stagiaire Développeur Web",
            company: "Entreprise B",
            location: "Lyon",
            startDate: "Mars 2020",
            endDate: "Août 2020",
            description:
                "Développement d'un site web interactif en React JS.\n" +
                "Optimisation des composants et de l'expérience utilisateur.",
        },
        {
            title: "Assistant Ingénieur",
            company: "Entreprise C",
            location: "Toulouse",
            startDate: "Septembre 2018",
            endDate: "Février 2019",
            description:
                "Support technique pour le développement de nouveaux produits.\n" +
                "Participation aux phases de test et validation.",
        },
        {
            title: "Stagiaire Développement Mobile",
            company: "Entreprise D",
            location: "Marseille",
            startDate: "Juin 2017",
            endDate: "Août 2017",
            description:
                "Développement d'une application mobile multiplateforme avec React Native.",
        },
        {
            title: "Projet Personnel",
            company: "Autodidacte",
            location: "En ligne",
            startDate: "2016",
            endDate: "2018",
            description:
                "Création d'un jeu vidéo en C++ avec Unreal Engine.\n" +
                "Apprentissage des bases de la programmation orientée objet et du développement de jeux.",
        },
        {
            title: "Formation Développeur Web",
            company: "Greta",
            location: "Lille",
            startDate: "2019",
            endDate: "2020",
            description:
                "Formation intensive en développement web et full stack.\n" +
                "Acquisition de compétences en JavaScript, Node.js, React et bases de données.",
        }
    ];

    const skills = [
        "React JS / Next.js",
        "Node.js",
        "Rust (bases)",
        "Git / GitHub",
        "Architecture SaaS",
        "API REST",
        "JSON / Web Services",
        "UI/UX Front-End",
    ];

    const educations = [
        {
            title: "Développeur Web / Full Stack",
            school: "Greta",
            date: "2019 - 2020",
        },
        {
            title: "Apple Foundation Program",
            school: "Apple",
            date: "2018",
        },
        {
            title: "Autodidacte",
            school: "Projets personnels",
            date: "Continu",
        },
    ];

    const services = [
        "Développement d'applications SaaS",
        "Création de sites web modernes",
        "Développement d'API",
        "Optimisation de performances",
        "Refonte d'applications",
    ];

    const projects = [
        {
            name: "Application SaaS AOM",
            tech: "React, Next.js, Node.js",
            description: "Application complète avec gestion des utilisateurs.",
        },
        {
            name: "Site React interactif",
            tech: "React JS",
            description: "Site dynamique avec animations et composants réutilisables.",
        },
        {
            name: "Application mobile",
            tech: "React Native",
            description: "Application multiplateforme.",
        },
    ];

    return (
        <Document>

            {/* PAGE 1 — Présentation + Expériences */}
            <Page size="A4" style={styles.page}>
                <Text style={styles.headerName}>Rarib LAAMIMAT</Text>
                <Text style={styles.headerRole}>Développeur Full Stack</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Présentation</Text>
                    <Text style={styles.text}>
                        Développeur spécialisé dans le déploiement d'applications React JS
                        orientées SaaS. Je souhaite rejoindre une entreprise investie dans
                        ce domaine afin de contribuer à des projets ambitieux.
                    </Text>
                    <Text style={styles.text}>
                        Passionné par les technologies modernes, j'ai travaillé sur des
                        architectures performantes basées sur React, Next.js et Node.js.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Expérience Professionnelle</Text>

                    {experiences.map((exp, index) => (
                        <View key={index} style={styles.expBlock}>
                            <Text style={styles.expTitle}>{exp.title}</Text>
                            <Text style={styles.expCompany}>
                                {exp.company} — {exp.location}
                            </Text>
                            <Text style={styles.expDate}>
                                {exp.startDate} — {exp.endDate}
                            </Text>
                            <Text style={styles.text}>{exp.description}</Text>
                        </View>
                    ))}
                </View>
            </Page>

            {/* PAGE 2 — Compétences + Formations + Services */}
            <Page size="A4" style={styles.page}>
                <Text style={styles.sectionTitle}>Compétences</Text>
                {skills.map((skill, index) => (
                    <Text key={index} style={styles.listItem}>• {skill}</Text>
                ))}

                <View style={styles.divider} />

                <Text style={styles.sectionTitle}>Formations</Text>
                {educations.map((edu, index) => (
                    <View key={index} style={{ marginBottom: 10 }}>
                        <Text style={styles.expTitle}>{edu.title}</Text>
                        <Text style={styles.expCompany}>{edu.school}</Text>
                        <Text style={styles.expDate}>{edu.date}</Text>
                    </View>
                ))}

                <View style={styles.divider} />

                <Text style={styles.sectionTitle}>Services</Text>
                {services.map((srv, index) => (
                    <Text key={index} style={styles.listItem}>• {srv}</Text>
                ))}
            </Page>

            {/* PAGE 3 — Portfolio */}
            <Page size="A4" style={styles.page}>
                <Text style={styles.sectionTitle}>Portfolio</Text>

                {projects.map((p, index) => (
                    <View key={index} style={{ marginBottom: 15 }}>
                        <Text style={styles.expTitle}>{p.name}</Text>
                        <Text style={styles.expCompany}>{p.tech}</Text>
                        <Text style={styles.text}>{p.description}</Text>
                    </View>
                ))}

                <View style={styles.divider} />

                <Text style={styles.sectionTitle}>Liens</Text>
                <Text style={styles.listItem}>• GitHub : github.com/tonprofil</Text>
                <Text style={styles.listItem}>• LinkedIn : linkedin.com/in/tonprofil</Text>
                <Text style={styles.listItem}>• Portfolio : ton-site.fr</Text>
            </Page>

        </Document>
    );
};

export default MyPdfDocument;

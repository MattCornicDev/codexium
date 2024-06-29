// src/components/pdfDocument/MyPdfDocument.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Création du style pour le document PDF
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        padding: 40,
        fontFamily: 'Helvetica',
    },
    section: {
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text: {
        fontSize: 10,
        marginBottom: 5,
        lineHeight: 1.5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    contactInfo: {
        fontSize: 12,
        marginBottom: 5,
    },
    description: {
      fontSize: 10,
    }
});

// Composant MyPdfDocument
const MyPdfDocument = () => {
    // Données factices pour les expériences professionnelles
    const experiences = [
        {
            title: "Développeur Full Stack",
            company: "Entreprise AOM Technologie",
            location: "Haut de France (59), France",
            startDate: "Aout 2020",
            endDate: "Présent",
            description: "Conception et développement d'une application SaaS : Élaboration et mise en œuvre complète d'uneapplication logicielle en tant que service (SaaS), incluant la définition des fonctionnalités, la conception de l'architecture, et le développement des modules principaux.\n Migration vers une application Next.js : Transition de l'application existante vers une infrastructure moderne basée sur Next.js, optimisant ainsi les performances, la scalabilité et l'expérience utilisateur.\n Utilisation des outils Git et GitHub : Gestion efficace du code source et des versions de l'application à l'aide de Git pour le contrôle des versions, et GitHub pour la collaboration et l'intégration continue.",
        },
        {
            title: "Stagiaire Développeur Web",
            company: "Entreprise B",
            location: "Lyon, France",
            startDate: "Mars 2020",
            endDate: "Août 2020",
            description: "Conception et développement d'un site web interactif utilisant React JS.",
        },
        {
            title: "Assistant Ingénieur",
            company: "Entreprise C",
            location: "Toulouse, France",
            startDate: "Septembre 2018",
            endDate: "Février 2019",
            description: "Support technique pour le développement de nouveaux produits.",
        },
        {
            title: "Stagiaire en Développement Mobile",
            company: "Entreprise D",
            location: "Marseille, France",
            startDate: "Juin 2017",
            endDate: "Août 2017",
            description: "Développement d'une application mobile multiplateforme avec React Native.",
        },
    ];

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>Rarib LAAMIMAT</Text>
                    <View>
                        <Text style={styles.contactInfo}>Paris (75) / Lille (59)</Text>
                        <Text style={styles.contactInfo}>glgharib@gmail.com</Text>
                        <Text style={styles.contactInfo}>+33 6 79 57 04 98</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.title}>Présentation</Text>
                    <Text style={styles.text}>
                        En qualité de développeur Full Stack, je suis spécialisé dans le déploiement d'applications React JS orientées SaaS. Actuellement à la recherche de nouvelles opportunités professionnelles, je souhaite m'engager dans des projets stimulants et innovants où je pourrai mettre à profit mes compétences techniques et ma créativité.
                    </Text>
                    <Text style={styles.text}>
                        Ma formation solide et mon expérience pratique m'ont permis de maîtriser les technologies modernes telles que React JS, NextJS et Rust. Passionné par les technologies émergentes, je suis également intéressé par les applications de la blockchain et des contrats intelligents.
                    </Text>
                    <Text style={styles.text}>
                        Je suis convaincu que mon engagement, ma capacité à travailler en équipe et ma volonté constante d'apprendre peuvent contribuer de manière significative à tout projet ambitieux.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.title}>Expérience Professionnelle</Text>
                    {experiences.map((exp, index) => (
                        <View key={index} style={{ marginBottom: 10 }}>
                            <Text style={styles.subtitle}>{exp.title}</Text>
                            <Text style={styles.text}>{exp.company}, {exp.location}</Text>
                            <Text style={styles.text}>{exp.startDate} - {exp.endDate}</Text>
                            <Text style={styles.description}>{exp.description}</Text>
                        </View>
                    ))}
                </View>

            </Page>
        </Document>
    );
};

export default MyPdfDocument;

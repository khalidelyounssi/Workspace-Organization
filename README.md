# Workspace-Organization
# 🏢 Employee Management Floor Plan — README

## 📌 Description du projet

Ce projet est une application web interactive permettant de gérer les employés d'une entreprise en les plaçant directement sur un plan des locaux. L'utilisateur peut ajouter, déplacer, supprimer et consulter les informations des employés tout en respectant des règles logiques basées sur leurs rôles.

---

## 🎯 Objectifs principaux

* Ajouter, déplacer et retirer des employés depuis une interface visuelle.
* Assurer le respect des règles d'accès selon le rôle de chaque employé.
* Afficher un plan d'étage composé de 6 zones interactives.
* Offrir une interface responsive (Desktop, Tablet, Mobile).
* Gérer les données du personnel au sein d'une seule plateforme.

---

## 🗂️ Zones du bâtiment

1. Salle de conférence
2. Réception
3. Salle des serveurs
4. Salle de sécurité
5. Salle du personnel
6. Salle d’archives

---

## 👤 Règles d'accès par rôle

* **Réceptionniste** → Réception uniquement
* **Technicien IT** → Salle des serveurs uniquement
* **Agent de sécurité** → Salle de sécurité uniquement
* **Manager** → Accès à toutes les zones
* **Nettoyage** → Toutes les zones sauf Salle d’archives
* **Autres rôles** → Accès libre sauf zones restreintes

---

## 🧩 Fonctionnalités principales

### 👥 Gestion des employés

* Ajout via un formulaire complet (modale)
* Prévisualisation de la photo
* Ajout d'expériences professionnelles dynamiques
* Affichage dans la liste *Unassigned Staff*
* Placement dans les zones via bouton « + » ou drag & drop (optionnel)
* Suppression via bouton « X »
* Consultation du profil détaillé d’un employé

### 🏗️ Interaction avec les zones

* Restrictions logiques selon les rôles
* Limitation du nombre d’employés par zone
* Zones obligatoires affichées en rouge pâle lorsqu'elles sont vides

### 📱 Responsive design

Compatible :

* Desktop large
* Desktop petit
* Tablette
* Mobile portrait et paysage

---

## 🚀 Bonus (optionnels)

* Drag & Drop pour déplacer les employés
* Recherche et filtre par rôle ou nom
* Édition des informations d’un employé
* Sauvegarde automatique via localStorage
* Mode "Réorganisation automatique"

---

## 🛠️ Technologies utilisées

* **HTML5**
* **CSS3** (Flexbox, Grid, Media Queries)
* **JavaScript (ES6+)**
* **LocalStorage** (facultatif)
* **Git & GitHub**
* **Déploiement :** GitHub Pages ou Vercel

---


## 📄 Validation

Avant livraison, vérifier :

* HTML validé via **W3C Validator**
* CSS validé via **W3C CSS Validator**
* Code JavaScript structuré et commenté
* Responsivité testée sur plusieurs tailles d’écran

---

## 📊 Gestion du projet

Un board de gestion a été utilisé (Trello / Jira / GitHub Projects) pour :

* Organiser les User Stories
* Diviser les tâches
* Suivre l'avancement

---

## 🎤 Présentation finale

Le projet doit être présenté de manière :

* Claire et structurée
* Professionnelle
* Illustrant chaque fonctionnalité demandée

---


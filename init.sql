CREATE TABLE Employe
(
    numemp VARCHAR(3) PRIMARY KEY,
    nom VARCHAR(20),
    prenom VARCHAR(20)
);

CREATE TABLE Projet
(
    numprojet VARCHAR(3) PRIMARY KEY,
    description VARCHAR(30),
    budget DECIMAL(10, 2)
);

CREATE TABLE Affectation
(
    numemp VARCHAR(3),
    numprojet VARCHAR(3),
    heures INT,
    PRIMARY KEY (numemp, numprojet),
    FOREIGN KEY (numemp) REFERENCES Employe(numemp),
    FOREIGN KEY (numprojet) REFERENCES Projet(numprojet)
);

INSERT INTO Employe VALUES ('E01', 'Dupont', 'Marie');
INSERT INTO Employe VALUES ('E02', 'Durand', 'Paul');
INSERT INTO Employe VALUES ('E03', 'Martin', 'Julie');

INSERT INTO Projet VALUES ('P01', 'Intranet', 10000.00);
INSERT INTO Projet VALUES ('P02', 'Extranet', 15000.00);
INSERT INTO Projet VALUES ('P03', 'Site Web', 20000.00);

INSERT INTO Affectation VALUES ('E01', 'P01', 30);
INSERT INTO Affectation VALUES ('E02', 'P01', 40);
INSERT INTO Affectation VALUES ('E01', 'P02', 20);
INSERT INTO Affectation VALUES ('E03', 'P02', 25);
INSERT INTO Affectation VALUES ('E01', 'P03', 10);
INSERT INTO Affectation VALUES ('E02', 'P03', 15);
INSERT INTO Affectation VALUES ('E03', 'P03', 35);
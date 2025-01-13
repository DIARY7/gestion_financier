import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/composants/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/composants/ui/table"
import { Briefcase, Building2 } from 'lucide-react'
import SearchBilan from '../composants/ui/form/SearchBilan'

const categories = [
  {
    nomCategorie: "Actif",
    montant: 450000,
    listeSousCategorie: [
      {
        nomSousCategorie: "Actifs Non Courants",
        montant: 225000,
        listeTypeRubrique: [
          {
            nomTypeRubrique: "Immobilisations incorporelles",
            somme: 50000,
            listeRubrique: [
              { id: 116, libelle: "Autres impots et taxes", montant: 0.0 },
              { id: 87, libelle: "Achats de materiels, equipements et travaux", montant: 0.0 },
              { id: 71, libelle: "Ventes de produits intermediaires", montant: 0.0 },
              { id: 68, libelle: "Associes, dividendes … payer", montant: 0.0 },
            ],
          },
          {
            nomTypeRubrique: "Immobilisations corporelles",
            somme: 150000,
            listeRubrique: [
              { id: 116, libelle: "Autres impots et taxes", montant: 0.0 },
              { id: 87, libelle: "Achats de materiels, equipements et travaux", montant: 0.0 },
              { id: 71, libelle: "Ventes de produits intermediaires", montant: 0.0 },
              { id: 68, libelle: "Associes, dividendes … payer", montant: 0.0 },
            ],
          },
          {
            nomTypeRubrique: "Immobilisations financières",
            somme: 25000,
            listeRubrique: [
              { id: 116, libelle: "Autres impots et taxes", montant: 0.0 },
              { id: 87, libelle: "Achats de materiels, equipements et travaux", montant: 0.0 },
              { id: 71, libelle: "Ventes de produits intermediaires", montant: 0.0 },
              { id: 68, libelle: "Associes, dividendes … payer", montant: 0.0 },
            ],
          },
        ],
      },
      {
        nomSousCategorie: "Actifs Courants",
        montant: 225000,
        listeTypeRubrique: [
          {
            nomTypeRubrique: "Stocks",
            somme: 75000,
            listeRubrique: [
              { id: 116, libelle: "Autres impots et taxes", montant: 0.0 },
              { id: 87, libelle: "Achats de materiels, equipements et travaux", montant: 0.0 },
              { id: 71, libelle: "Ventes de produits intermediaires", montant: 0.0 },
              { id: 68, libelle: "Associes, dividendes … payer", montant: 0.0 },
            ],
          },
          {
            nomTypeRubrique: "Créances clients",
            somme: 100000,
            listeRubrique: [
              { id: 116, libelle: "Autres impots et taxes", montant: 0.0 },
              { id: 87, libelle: "Achats de materiels, equipements et travaux", montant: 0.0 },
              { id: 71, libelle: "Ventes de produits intermediaires", montant: 0.0 },
              { id: 68, libelle: "Associes, dividendes … payer", montant: 0.0 },
            ],
          },
          {
            nomTypeRubrique: "Disponibilités",
            somme: 50000,
            listeRubrique: [
              { id: 116, libelle: "Autres impots et taxes", montant: 0.0 },
              { id: 87, libelle: "Achats de materiels, equipements et travaux", montant: 0.0 },
              { id: 71, libelle: "Ventes de produits intermediaires", montant: 0.0 },
              { id: 68, libelle: "Associes, dividendes … payer", montant: 0.0 },
            ],
          },
        ],
      },
    ],
  },
  {
    nomCategorie: "Passif",
    montant: 450000,
    listeSousCategorie: [
      {
        nomSousCategorie: "Capitaux propres",
        montant: 450000,
        listeTypeRubrique: [
          {
            nomTypeRubrique: "Capital",
            somme: 450000,
            listeRubrique: [
              { id: 201, libelle: "Terrains", montant: 0.0 },
              { id: 202, libelle: "Bâtiments", montant: 0.0 },
              { id: 203, libelle: "Mobilier", montant: 0.0 },
              { id: 204, libelle: "Matériel de bureau", montant: 0.0 },
            ],
          },
        ],
      },
    ],
  },
];

// Composant pour afficher une colonne du bilan (Actif ou Passif)
const BilanColumn = ({ categorie }) => {
  const totalMontant = categorie.montant;

  return (
    <div className="flex flex-col h-full">
      <Card className="flex-grow">
        <CardHeader>
          <CardTitle className="flex items-center justify-center text-2xl font-semibold">
            {categorie.nomCategorie}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rubrique</TableHead>
                <TableHead>Libellé</TableHead>
                <TableHead className="text-right bg-blue-100">Montant</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categorie.listeSousCategorie.map((sousCategorie, sousCategorieIndex) => (
                <React.Fragment key={sousCategorieIndex}>
                  {sousCategorie.listeTypeRubrique.map((typeRubrique, typeRubriqueIndex) => (
                    <TableRow key={`${sousCategorieIndex}-${typeRubriqueIndex}`}>
                      {typeRubriqueIndex === 0 && (
                        <TableCell rowSpan={sousCategorie.listeTypeRubrique.length + 1} className="font-medium">
                          {sousCategorie.nomSousCategorie}
                        </TableCell>
                      )}
                      <TableCell>{typeRubrique.nomTypeRubrique}</TableCell>
                      <TableCell className="text-right">
                        {typeRubrique.somme.toLocaleString()} €
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell className="font-semibold">Sous-total {sousCategorie.nomSousCategorie}</TableCell>
                    <TableCell className="text-right font-semibold">
                      {sousCategorie.montant.toLocaleString()} €
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <p className="text-xl font-bold text-right">
          Total {categorie.nomCategorie}: {totalMontant.toLocaleString()} €
        </p>
      </div>
    </div>
  );
};

const Bilan = () => {
  return (
    <>
      <SearchBilan value="Rechercher" />

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Bilan de l'entreprise</h1>
        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          {categories.map((categorie, categorieIndex) => (
            <div key={categorieIndex} className="flex-1">
              <BilanColumn categorie={categorie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bilan;


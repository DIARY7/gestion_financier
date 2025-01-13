import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/composants/ui/card"
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/composants/ui/table"
import { Briefcase, Building2 } from 'lucide-react'
import SearchBilan from '../composants/ui/form/SearchBilan'

// const categories = [
//   {
//     nomCategorie: "Actif",
//     montant: 450000,
//     listeSousCategorie: [
//       {
//         nomSousCategorie: "Actifs Non Courants",
//         montant: 225000,
//         listeTypeRubrique: [
//           {
//             nomTypeRubrique: "Immobilisations incorporelles",
//             somme: 50000,
//             listeRubrique: [
//               { id: 116, libelle: "Autres impots et taxes", montant: 0.0 },
//               { id: 87, libelle: "Achats de materiels, equipements et travaux", montant: 0.0 },
//               { id: 71, libelle: "Ventes de produits intermediaires", montant: 0.0 },
//               { id: 68, libelle: "Associes, dividendes … payer", montant: 0.0 },
//             ],
//           },
//           {
//             nomTypeRubrique: "Immobilisations corporelles",
//             somme: 150000,
//             listeRubrique: [
//               { id: 116, libelle: "Autres impots et taxes", montant: 0.0 },
//               { id: 87, libelle: "Achats de materiels, equipements et travaux", montant: 0.0 },
//               { id: 71, libelle: "Ventes de produits intermediaires", montant: 0.0 },
//               { id: 68, libelle: "Associes, dividendes … payer", montant: 0.0 },
//             ],
//           },
//           {
//             nomTypeRubrique: "Immobilisations financières",
//             somme: 25000,
//             listeRubrique: [
//               { id: 116, libelle: "Autres impots et taxes", montant: 0.0 },
//               { id: 87, libelle: "Achats de materiels, equipements et travaux", montant: 0.0 },
//               { id: 71, libelle: "Ventes de produits intermediaires", montant: 0.0 },
//               { id: 68, libelle: "Associes, dividendes … payer", montant: 0.0 },
//             ],
//           },
//         ],
//       },
//       {
//         nomSousCategorie: "Actifs Courants",
//         montant: 225000,
//         listeTypeRubrique: [
//           {
//             nomTypeRubrique: "Stocks",
//             somme: 75000,
//             listeRubrique: [
//               { id: 116, libelle: "Autres impots et taxes", montant: 0.0 },
//               { id: 87, libelle: "Achats de materiels, equipements et travaux", montant: 0.0 },
//               { id: 71, libelle: "Ventes de produits intermediaires", montant: 0.0 },
//               { id: 68, libelle: "Associes, dividendes … payer", montant: 0.0 },
//             ],
//           },
//           {
//             nomTypeRubrique: "Créances clients",
//             somme: 100000,
//             listeRubrique: [
//               { id: 116, libelle: "Autres impots et taxes", montant: 0.0 },
//               { id: 87, libelle: "Achats de materiels, equipements et travaux", montant: 0.0 },
//               { id: 71, libelle: "Ventes de produits intermediaires", montant: 0.0 },
//               { id: 68, libelle: "Associes, dividendes … payer", montant: 0.0 },
//             ],
//           },
//           {
//             nomTypeRubrique: "Disponibilités",
//             somme: 50000,
//             listeRubrique: [
//               { id: 116, libelle: "Autres impots et taxes", montant: 0.0 },
//               { id: 87, libelle: "Achats de materiels, equipements et travaux", montant: 0.0 },
//               { id: 71, libelle: "Ventes de produits intermediaires", montant: 0.0 },
//               { id: 68, libelle: "Associes, dividendes … payer", montant: 0.0 },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     nomCategorie: "Passif",
//     montant: 450000,
//     listeSousCategorie: [
//       {
//         nomSousCategorie: "Capitaux propres",
//         montant: 450000,
//         listeTypeRubrique: [
//           {
//             nomTypeRubrique: "Capital",
//             somme: 450000,
//             listeRubrique: [
//               { id: 201, libelle: "Terrains", montant: 0.0 },
//               { id: 202, libelle: "Bâtiments", montant: 0.0 },
//               { id: 203, libelle: "Mobilier", montant: 0.0 },
//               { id: 204, libelle: "Matériel de bureau", montant: 0.0 },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];

// Composant pour afficher une colonne du bilan (Actif ou Passif)

const BilanColumn = ({ categorie }) => {
  
  return (
    <div className="flex flex-col h-full">
      <Card className="flex-grow">
        <CardHeader>
          <CardTitle className="flex items-center justify-center text-2xl font-semibold">
            {categorie.name}
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
              {categorie.sousCategories.map((sousCategorie, sousCategorieIndex) => (
                <React.Fragment key={sousCategorieIndex}>
                  {sousCategorie.typeRubriques.map((typeRubrique, typeRubriqueIndex) => (
                    <TableRow key={`${sousCategorieIndex}-${typeRubriqueIndex}`}>
                      {typeRubriqueIndex === 0 && (
                        <TableCell rowSpan={sousCategorie.typeRubriques.length + 1} className="font-medium">
                          {sousCategorie.name}
                        </TableCell>
                      )}
                      <TableCell>{typeRubrique.name}</TableCell>
                      <TableCell className="text-right">
                        {typeRubrique.value.toLocaleString()} €
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell className="font-semibold">Sous-total {sousCategorie.name}</TableCell>
                    <TableCell className="text-right font-semibold">
                      {sousCategorie.value.toLocaleString()} €
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
          Total {categorie.name}: {categorie.value.toLocaleString()} €
        </p>
      </div>
    </div>
  );
};

const Bilan = () => {
  const [categories, setCategories] = useState([]); // Initialiser avec un tableau vide
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [catTsyResultat, setCatTsyResultat] = useState([]);
  const [year,setYear] = useState(2024);
  const [idSociety,setIdSociety] = useState(1);

  const fetchBilan = async () => {
    try {
      const year = 2024; // Exemple d'année
      const idSociety = 1; // Exemple d'identifiant de société

      const response = await axios.get("http://localhost:8080/bilan", {
        params: { year, idSociety },
      });

      setCategories(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBilan();
  }, []); // Se déclenche seulement au montage du composant

  useEffect(() => {
    if (categories.length > 0) {
      // Mettre à jour les variables dérivées une fois les catégories récupérées
      setCatTsyResultat(categories.slice(0 , -1)); // Dernier élément sous forme de tableau
    }
  }, [categories]); // Déclenche uniquement si categories est mis à jour
  
  const rechercher = async (year, idSociety) => {
    setLoading(true); // Indiquer que les données sont en cours de chargement
    setError(null); // Réinitialiser les erreurs
  
    try {
      const response = await axios.get("http://localhost:8080/bilan", {
        params: { year, idSociety },
      });
  
      setCategories(response.data); // Mettre à jour les catégories avec les données reçues
    } catch (err) {
      setError(err.message); // Mettre à jour l'erreur en cas de problème
    } finally {
      setLoading(false); // Indiquer que le chargement est terminé
    }
  };

  return (
    <>
    <SearchBilan value ="Rechercher" onSubmit = {rechercher} />
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Bilan de l'entreprise</h1>
      {loading ? (
        <div className="text-center">Chargement des données...</div>
      ) : error ? (
        <div className="text-center text-red-500">Erreur : {error}</div>
      ) : categories.length > 0 ? (
        <>
          {/* Afficher le dernier élément sous forme de tableau */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            {catTsyResultat.map((categorie, categorieIndex) => (
              <div key={categorieIndex} className="flex-1">
                <BilanColumn categorie={categorie} />
              </div>
            ))}
          </div>
 
          <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              <div className="flex-1">
                <BilanColumn categorie={categories[categories.length-1]} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center">Aucune donnée disponible</div>
      )}
    </div>
    </>
  );
};
export default Bilan;


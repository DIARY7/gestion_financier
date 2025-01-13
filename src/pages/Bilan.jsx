import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/composants/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/composants/ui/table"
import { Briefcase, Building2 } from 'lucide-react'
import SearchBilan from '../composants/ui/form/SearchBilan'

// Données fictives pour le bilan
const bilanData = {
  actif: [
    {
      titre: "Actifs Non Courants ",
      items: [
        { libelle: "Immobilisations incorporelles", montant: 50000 },
        { libelle: "Immobilisations corporelles", montant: 150000 },
        { libelle: "Immobilisations financières", montant: 25000 },
      ]
    },
    {
      titre: "Actif Courants ",
      items: [
        
        { libelle: "Stocks", montant: 75000 },
        { libelle: "Créances clients", montant: 100000 },
        { libelle: "Disponibilités", montant: 50000 },
      ]
    },
  ],
  passif: [
    {
      titre: "Capitaux propres",
      items: [
        { libelle: "Capital", montant: 200000 },
        { libelle: "Réserves", montant: 50000 },
        { libelle: "Résultat de l'exercice", montant: 30000 },
      ]
    },
    {
      titre: "Emprunts",
      items: [
        { libelle: "Emprunts bancaires", montant: 100000 },
      ]
    },
    {
      titre: "Dettes",
      items: [
        { libelle: "Dettes fournisseurs", montant: 50000 },
        { libelle: "Dettes fiscales et sociales", montant: 20000 },
      ]
    },
  ]
}

// Composant pour afficher une colonne du bilan (Actif ou Passif)
const BilanColumn = ({ data, title, icon }) => {
  const total = data.reduce((sum, rubrique) => 
    sum + rubrique.items.reduce((subSum, item) => subSum + item.montant, 0), 0)

  return (
    <div className="flex flex-col h-full">
      <Card className="flex-grow">
        <CardHeader>
          <CardTitle className="flex items-center justify-center text-2xl font-semibold">
            {icon}
            <span className="ml-2">{title}</span>
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
              {data.map((rubrique, rubriquIndex) => (
                <React.Fragment key={rubriquIndex}>
                  {rubrique.items.map((item, itemIndex) => (
                    <TableRow key={`${rubriquIndex}-${itemIndex}`}>
                      {itemIndex === 0 && (
                        <TableCell rowSpan={rubrique.items.length + 1} className="font-medium">
                          {rubrique.titre}
                        </TableCell>
                      )}
                      <TableCell>{item.libelle}</TableCell>
                      <TableCell className="text-right">{item.montant.toLocaleString()} €</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell className="font-semibold">Sous-total {rubrique.titre}</TableCell>
                    <TableCell className="text-right font-semibold">
                      {rubrique.items.reduce((sum, item) => sum + item.montant, 0).toLocaleString()} €
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <p className="text-xl font-bold text-right">Total {title}: {total.toLocaleString()} €</p>
      </div>
    </div>
  )
}

// Composant principal du bilan
const Bilan = () => {
  return (
    <>
    <SearchBilan value="Rechercher" />
    
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Bilan de l'entreprise</h1>
      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        <div className="flex-1">
          <BilanColumn data={bilanData.actif} title="Actif" icon={<Briefcase className="w-6 h-6" />} />
        </div>
        <div className="hidden md:block w-px bg-gray-300 self-stretch mx-2"></div>
        <div className="flex-1">
          <BilanColumn data={bilanData.passif} title="Passif" icon={<Building2 className="w-6 h-6" />} />
        </div>
      </div>
    </div>
    <div className = "container mx-auto p-4" >
      <BilanColumn data={bilanData.passif} title="Passif" icon={<Building2 className="w-6 h-6" />} />
    </div>
    </>
  )
}

export default Bilan


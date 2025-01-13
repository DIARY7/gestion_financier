import React, { useState } from 'react'
import SectionPostBilan from '../composants/insertion/SectionPostBilan'
import SearchBilan from '../composants/ui/form/SearchBilan'

// Composant principal
export default function InsertionBilan() {
  const [actifs, setActifs] = useState([])
  const [passifs, setPassifs] = useState([])

  const ajouterRubrique = (section) => {
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      type: '',
      montant: 0
    }
    if (section === 'actifs') {
      setActifs([...actifs, newItem])
    } else {
      setPassifs([...passifs, newItem])
    }
  }

  const handleChange = (section, id, field, value) => {
    const updateItems = (items) =>
      items.map((item) =>
        item.id === id ? { ...item, [field]: field === 'montant' ? parseFloat(value) || 0 : value } : item
      )

    if (section === 'actifs') {
      setActifs(updateItems(actifs))
    } else {
      setPassifs(updateItems(passifs))
    }
  }

  const totalActifs = actifs.reduce((sum, item) => sum + item.montant, 0)
  const totalPassifs = passifs.reduce((sum, item) => sum + item.montant, 0)

  return (
    <>
    <SearchBilan value="Valider" />
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Comptes de Bilan
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Colonne Actif */}
            <SectionPostBilan />                   
          {/* Colonne Passif */}
          <SectionPostBilan />
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8 mt-16">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Comptes de Resultat
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Colonne Charge */}
          <SectionPostBilan />
          {/* Colonne Produit */}
          <SectionPostBilan />
        </div>
      </div>

    </div>
    </>
    
  )
}

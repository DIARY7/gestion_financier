import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { Button,CardHeader,CardTitle,CardContent,Card } from '../molecule/atom'

export default function SectionPostBilan() {

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
    <div className="space-y-6">
        <Card>
            <CardHeader>
            <CardTitle>Actifs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
            <div className="space-y-4 mb-8">
                <h6 className="font-medium italic">Charges d'exploitation</h6>
                {actifs.map((item) => (
                <div key={item.id} className="flex gap-2">
                    <select
                    className="p-2 border rounded flex-grow"
                    value={item.type}
                    onChange={(e) => handleChange('actifs', item.id, 'type', e.target.value)}
                    >
                    <option value="">Sélectionner...</option>
                    <option value="achats">Achats</option>
                    <option value="services">Services externes</option>
                    <option value="personnel">Charges de personnel</option>
                    </select>
                    <input 
                    type="number" 
                    placeholder="Montant"
                    className="p-2 border rounded w-32"
                    value={item.montant}
                    onChange={(e) => handleChange('actifs', item.id, 'montant', e.target.value)}
                    />
                </div>
                ))}
                <Button
                className="text-sm"
                onClick={() => ajouterRubrique('actifs')}
                >
                <Plus className="w-4 h-4 mr-2 inline" />
                Ajouter rubrique
                </Button>
            </div>

            <div className="space-y-4">
                <h6 className="font-medium italic">Charges financières</h6>
                <Button
                className="text-sm"
                onClick={() => ajouterRubrique('actifs')}
                >
                <Plus className="w-4 h-4 mr-2 inline" />
                Ajouter rubrique
                </Button>
            </div>

            <div className="pt-4 border-t">
                <div className="flex justify-between font-medium">
                <span>Total Actifs</span>
                <span className='text-green-500' >{totalActifs.toLocaleString('fr-FR')} €</span>
                </div>
            </div>
            </CardContent>
        </Card>
    </div>
  )
}

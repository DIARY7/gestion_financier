import { TrendingUp, Wallet, PiggyBank, ArrowRight } from 'lucide-react'
import SearchBilan from '../composants/ui/form/SearchBilan'

export default function EtatFinancier() {
  return (
    <>
    <SearchBilan value="Interpreter" />
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Grid pour les 3 métriques principales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Carte Rentabilité */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-6 transition-all hover:shadow-lg">
            <div className="absolute right-0 top-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-indigo-100 opacity-50 transition-all group-hover:scale-110" />
            <div className="relative space-y-4">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-indigo-100 p-2.5">
                  <TrendingUp className="h-5 w-5 text-indigo-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Rentabilité</h2>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-indigo-600">25%</span>
                  <span className="text-sm text-gray-600">marge nette</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-indigo-600">23.5%</span>
                  <span className="text-sm text-gray-600">ROA</span>
                </div>
              </div>
              <p className="text-gray-600">
                TechSol Inc. montre une bonne rentabilité. Cependant, elle doit surveiller ses charges d'exploitation pour
                conserver cette rentabilité élevée.
              </p>
            </div>
          </div>

          {/* Carte Liquidité */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 transition-all hover:shadow-lg">
            <div className="absolute right-0 top-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-green-100 opacity-50 transition-all group-hover:scale-110" />
            <div className="relative space-y-4">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-green-100 p-2.5">
                  <Wallet className="h-5 w-5 text-green-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Liquidité</h2>
              </div>
              <p className="text-gray-600">
                La liquidité générale et réduite sont confortables, mais l'entreprise devrait garder un œil sur ses dettes à court
                terme pour éviter les problèmes de trésorerie.
              </p>
            </div>
          </div>

          {/* Carte Endettement */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 p-6 transition-all hover:shadow-lg md:col-span-2 lg:col-span-1">
            <div className="absolute right-0 top-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-rose-100 opacity-50 transition-all group-hover:scale-110" />
            <div className="relative space-y-4">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-rose-100 p-2.5">
                  <PiggyBank className="h-5 w-5 text-rose-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Endettement</h2>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium text-rose-600">49.4%</span>
                <span className="text-sm text-gray-600">taux d'endettement</span>
              </div>
              <p className="text-gray-600">
                L'endettement est acceptable, mais une dépendance accrue aux dettes pourrait poser des risques financiers.
              </p>
            </div>
          </div>
        </div>

        {/* Section Conclusion */}
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <h2 className="text-xl font-semibold text-gray-800">Prevision futur</h2>
              <ArrowRight className="h-5 w-5 text-gray-400" />
            </div>
            <p className="text-gray-600">
              TechSol Inc. pourrait surveiller l'évolution de ses charges d'exploitation et éviter une augmentation
              excessive de ses passifs pour maintenir sa rentabilité et sa stabilité financière.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
    
  )
}


import React, { useRef, useState } from 'react';
import { Calendar, Search, ChevronDown, Building2 } from 'lucide-react';

const SearchBilan  = ({value}) => {
  
  
  const btnStyle = {
    width: '180px',
    justifyContent: 'center', 
  };

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  // const dateRef = useRef(null);
  // const companyRef = useRef(null);

  // Liste exemple d'entreprises
  const companies = [
    { id: '1', name: 'Apple Inc.' },
    { id: '2', name: 'Google' },
    { id: '3', name: 'Microsoft' },
    { id: '4', name: 'Amazon' },
    { id: '5', name: 'Meta' },
    { id: '6', name: 'Tesla' },
    { id: '7', name: 'Netflix' },
  ];

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      dates.push({
        value: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('fr-FR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
      });
    }
    return dates;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //
    // const selectedDate = dateRef.current.value;
    // const selectedCompany = companyRef.current.value;
    //
    console.log('Date sélectionnée:', selectedDate);
    console.log('Entreprise sélectionnée:', selectedCompany);
  };

  return (
    <div className="w-[800px] p-6" >
      <form onSubmit={handleSubmit}>
        <div className="flex items-end gap-4">
          <div className="w-[300px]">
            <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Sélectionner une date
            </label>
            <select 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full h-10 px-3 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition-colors"
                >
                <option value="">Choisir une date</option>
                {generateDates().map((date) => (
                    <option 
                    key={date.value} 
                    value={date.value}
                    >
                    {date.label}
                    </option>
                ))}
                </select>
          </div>

          <div className="w-[300px]">
            <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Sélectionner une entreprise
            </label>
            <select
              value={selectedCompany}
              onChange={(e)=> setSelectedCompany(e.target.value)}
              className="w-full h-10 px-3 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition-colors"
            >
                <option value="" > Choisir une entreprise </option>
                <ChevronDown className="h-4 w-4 opacity-50" />
                {companies.map((company) => (
                  <option 
                    key={company.id} 
                    value={company.id}
                    className="cursor-pointer hover:bg-gray-100"
                  >
                    {company.name}
                    </option>
                ))}

            </select>
            </div>
          <button
            type="submit"
            style={btnStyle}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium w-210 h-10 rounded-lg transition-colors flex items-center gap-2"
            disabled={!selectedDate || !selectedCompany}
          >
            <Search className="h-4 w-4" />
            {value}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBilan;
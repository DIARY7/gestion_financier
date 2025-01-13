import React, { useState } from 'react';
import { Building2, Briefcase, CreditCard, DollarSign, FileText, Calendar, Building } from 'lucide-react';

// Composant FloatingInput réutilisable
const FloatingInput = ({ 
  type, 
  name, 
  value, 
  onChange, 
  label,
  required = false,
  icon: Icon
}) => (
  <div className="relative">
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder=" "
      required={required}
      className="block px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-10"
    />
    <label
      htmlFor={name}
      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-9"
    >
      {label}
    </label>
    {Icon && <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />}
  </div>
)

// Composant FloatingSelect réutilisable
const FloatingSelect = ({ 
  name, 
  value, 
  onChange, 
  label, 
  options,
  required = false,
  icon: Icon
}) => (
  <div className="relative">
    <select
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      required={required}
      className="block px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-10"
    >
      <option value="" disabled>Sélectionner</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <label
      htmlFor={name}
      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-9"
    >
      {label}
    </label>
    {Icon && <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />}
  </div>
)

function InsertionEcriture() {
  const [formData, setFormData] = useState({
    category: '',
    subCategory: '',
    post: '',
    account: '',
    amount: '',
    description: '',
    date: '',
    society: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const mockOptions = [
    { value: '1', label: '101 - Capital' },
    { value: '2', label: '102 - Autre option' },
    { value: '3', label: '103 - Encore une option' }
  ]

  return (
    <div className="min-h-screen p-6 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-8">
            Nouveau ecriture
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <FloatingSelect
                name="category"
                value={formData.category}
                onChange={handleChange}
                label="Catégorie"
                options={mockOptions}
                required
                icon={Building2}
              />

              <FloatingSelect
                name="subCategory"
                value={formData.subCategory}
                onChange={handleChange}
                label="Sous-catégorie"
                options={mockOptions}
                required
                icon={Briefcase}
              />

              <FloatingSelect
                name="post"
                value={formData.post}
                onChange={handleChange}
                label="Poste"
                options={mockOptions}
                required
                icon={CreditCard}
              />

              <FloatingSelect
                name="account"
                value={formData.account}
                onChange={handleChange}
                label="Compte"
                options={mockOptions}
                required
                icon={Building}
              />

              <FloatingInput
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                label="Montant"
                required
                icon={DollarSign}
              />

              <FloatingInput
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                label="Description"
                required
                icon={FileText}
              />

              <FloatingInput
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                label="Date"
                required
                icon={Calendar}
              />

              <FloatingSelect
                name="society"
                value={formData.society}
                onChange={handleChange}
                label="Société"
                options={[{ value: '1', label: 'Bubble IT' }]}
                required
                icon={Building}
              />
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Insérer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default InsertionEcriture;


const Button = ({ children, onClick, className = '' }) => (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
  
  const Card = ({ children, className = '' }) => (
    <div className={`bg-white shadow-md rounded-lg ${className}`}>{children}</div>
  )
  
  const CardHeader = ({ children }) => (
    <div className="px-6 py-4 border-b">{children}</div>
  )
  
  const CardTitle = ({ children }) => (
    <h3 className="font-semibold">{children}</h3>
  )
  
  const CardContent = ({ children, className = '' }) => (
    <div className={`p-6 ${className}`}>{children}</div>
  )
  export { Card, CardHeader, Button , CardTitle, CardContent }
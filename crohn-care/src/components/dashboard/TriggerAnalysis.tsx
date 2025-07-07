const mockTriggers = [
  { food: 'Spicy food', correlation: 'High' },
  { food: 'Dairy', correlation: 'Moderate' },
  { food: 'Tomatoes', correlation: 'Low' },
]

const TriggerAnalysis = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Trigger Analysis (Beta)
      </h3>

      {mockTriggers.length === 0 ? (
        <p className="text-gray-500 text-sm">We need more data to detect patterns.</p>
      ) : (
        <ul className="space-y-3 text-sm">
          {mockTriggers.map((item, i) => (
            <li key={i} className="flex justify-between items-center border-b pb-2 last:border-none">
              <span className="text-gray-700 dark:text-gray-200">{item.food}</span>
              <span
                className={`font-medium ${
                  item.correlation === 'High'
                    ? 'text-red-500'
                    : item.correlation === 'Moderate'
                    ? 'text-yellow-500'
                    : 'text-green-500'
                }`}
              >
                {item.correlation}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TriggerAnalysis

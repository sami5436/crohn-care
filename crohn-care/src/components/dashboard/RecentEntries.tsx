const recentData = [
  { type: 'Symptom', detail: 'Fatigue', date: 'Jul 6' },
  { type: 'Food', detail: 'Grilled Chicken + Rice', date: 'Jul 5' },
  { type: 'Note', detail: 'Mild stomach ache after lunch', date: 'Jul 5' },
]

const RecentEntries = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Entries</h3>

      {recentData.length === 0 ? (
        <p className="text-gray-500 text-sm">No entries found. Let’s start tracking!</p>
      ) : (
        <ul className="space-y-3">
          {recentData.map((entry, i) => (
            <li key={i} className="border-b pb-2 last:border-none">
              <div className="text-sm text-gray-700 dark:text-gray-200">
                <span className="font-medium">{entry.type}:</span> {entry.detail}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{entry.date}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default RecentEntries

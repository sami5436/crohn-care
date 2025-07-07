import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

const dummySymptomData = [
  { date: 'Jul 1', severity: 3 },
  { date: 'Jul 2', severity: 5 },
  { date: 'Jul 3', severity: 2 },
  { date: 'Jul 4', severity: 4 },
  { date: 'Jul 5', severity: 3 },
  { date: 'Jul 6', severity: 6 },
]

const SymptomTrends = () => {
  if (dummySymptomData.length === 0) {
    return <p className="text-gray-500 text-sm">Let’s start tracking!</p>
  }

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Symptom Severity Over Time</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={dummySymptomData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 10]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="severity"
            stroke="#0ea5e9"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SymptomTrends

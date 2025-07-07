const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-blue-900/20 px-4">
      {children}
    </div>
  )
}

export default AuthLayout

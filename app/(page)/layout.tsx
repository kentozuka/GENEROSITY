import Navigation from '@/components/organisms/Navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid md:grid-cols-5">
      <Navigation />
      <div className="px-3 pt-4 md:p-12 md:col-span-4">{children}</div>
    </main>
  )
}

import Navigation from '@/components/organisms/Navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid grid-cols-5">
      <Navigation />
      <div className="col-span-4 p-12">{children}</div>
    </main>
  )
}

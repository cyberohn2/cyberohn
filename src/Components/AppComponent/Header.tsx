import Navigation from "../ui/navbar"


const Header = () => {


  return (
    <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-[1200px] w-full px-4">
        <Navigation />
      </div>
    </header>
  )
}

export default Header

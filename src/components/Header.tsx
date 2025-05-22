import CodingFactoryLogo from "./CodingFactoryLogo"

const Header = () => {
  return (
    <>
      <header className="bg-[#782024]">
        <div className="container mx-auto flex items-center justify-between">
          <CodingFactoryLogo/>
        </div>
          <a className="text-white hover:underline-offset-4" href="/">Home</a>
      </header>
    </>
  )
}

export default Header;
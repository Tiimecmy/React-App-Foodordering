import Button from "./elements/Button"

export const Banner = () => {
  return (
    <div className="banner md:w-2/3 px-7 mx-auto relative flex items-center-justify-between">
      <div className="banner-deescription w-full md:w-1/2 p-3">
        <h2 className="mb-6 text-4xl font-bold text-white">
          Food Ordering Fast Satisfying
        </h2>
        <p className="font-semibold text-lg text-red-600 py-2">
          Begin in one Touch
        </p>
        <div className="btn-container">
          <Button>Press Now</Button>
          <a href="/menu" className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3">
            See Menu
          </a>
        </div>
      </div>
      <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
        <img src={require("../assets/images/pizza_banner.png")} alt="banner" className="max-h-95" />
      </div>
    </div>
  )
}

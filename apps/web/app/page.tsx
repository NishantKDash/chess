import Footer from "./components/Footer";
export default function Page(): JSX.Element {
  return (
    <main>
      <div className="flex p-5 sm:pl-72">
        <div className="flex w-2/3 h-screen justify-center items-center border-2 border-x-gray-300">
          <img
            src="https://cdn.pixabay.com/photo/2015/12/07/10/42/chess-1080533_960_720.jpg"
            className="w-full h-full"
          ></img>
        </div>
        <div className="flex w-1/3 h-screen justify-center items-center bg-slate-600">
          <h1 className="text-white text-amber-300 text-2xl mx-4 sm:m-4 md:m-4 animate-bounce">
            Play Chess Like Never Before
          </h1>
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}

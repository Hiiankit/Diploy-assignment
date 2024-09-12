import Header from "./Header";
import Page from "./Page";
function App() {
  return (
    <div className="w-screen">
      <div className="hello-Bar items-center flex justify-center bg-black  p-2">
        <p className="text-white">
          FREE SHIPPING for orders over $300. Order today <span></span>
        </p>
      </div>
      <div className="Header sticky top-0 flex items-center justify-center bg-white">
        <Header />
      </div>
      <div className="flex justify-center items-center">
        <Page />
      </div>
    </div>
  );
}

export default App;

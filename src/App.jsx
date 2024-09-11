import Header from "./Header";
import Page from "./Page";
function App() {
  return (
    <div className="container">
      <div className="hello-Bar items-center flex justify-center bg-black  p-2">
        <p className="text-white">
          FREE SHIPPING for orders over $300. Order today <span></span>
        </p>
      </div>
      <div className="Header sticky top-0 bg-white">
        <Header />
      </div>
      <div>
        <Page />
      </div>
    </div>
  );
}

export default App;

import Header from "./Header";
import Page from "./Page";

function App() {
  return (
    <div className=" flex flex-col items-center mx-auto">
      {/* Hello Bar */}
      <div className="hello-Bar w-screen flex items-center justify-center bg-black p-2 text-center">
        <p className="text-white text-sm sm:text-base md:text-lg">
          FREE SHIPPING for orders over $300. Order today
        </p>
      </div>

      {/* Header Section */}
      <div className="Header sticky w-screen top-0 flex items-center justify-center bg-white">
        <Header />
      </div>

      {/* Main Page Content */}
      <div className="flex justify-center items-center w-full px-4 sm:px-8 md:px-16 py-6">
        <Page />
      </div>
    </div>
  );
}

export default App;

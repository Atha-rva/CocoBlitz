import { RouterProvider, useRouter } from '@/components/Router';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Products } from '@/pages/Products';
import { Contact } from '@/pages/Contact';

function CurrentPage() {
  const { path } = useRouter();

  const renderPage = () => {
    switch (path) {
      case '/':
        return <Home />;
      case '/about':
        return <About />;
      case '/products':
        return <Products />;
      case '/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <ScrollToTop />
      <CurrentPage />
    </RouterProvider>
  );
}

export default App;

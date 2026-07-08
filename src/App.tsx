import { Helmet } from "react-helmet-async";
import { RouterProvider } from "react-router/dom";
import router from "./routes/routes";

function App() {
  return (
    <>
      <Helmet>
        <title>Argi - Web Developer</title>
        <meta
          name="description"
          content="Hallo saya Argi Ahmes Halepiyandra, fresh graduate SMK jurusan Rekayasa Perangkat Lunak."
        />
        <meta
          name="keywords"
          content="argiiahm, argi, fullstack developer, web developer , react developer, laravel developer, portfolio, jasa pembuatan website, elunive, elunivedev, jasa pembuatan website cilacap"
        />
        <meta name="author" content="Argiahm" />
        <meta name="robots" content="index, follow" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://elunivedev.my.id" />
        {/* Open Graph */}
        <meta property="og:title" content="Argi - Software Developer" />
        <meta
          property="og:description"
          content="Hallo saya Argi Ahmes Halepiyandra, fresh graduate SMK jurusan Rekayasa Perangkat Lunak."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://elunivedev.my.id" />
        <meta
          property="og:image"
          content="https://elunivedev.my.id/preview.png"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Argi - Software Developer" />
        <meta
          name="twitter:description"
          content="Hallo saya Argi Ahmes Halepiyandra, fresh graduate SMK jurusan Rekayasa Perangkat Lunak."
        />
        <meta
          name="twitter:image"
          content="https://elunivedev.my.id/preview.png"
        />
      </Helmet>

      <section className="container max-w-3xl mx-auto p-6">
        <RouterProvider router={router} />
      </section>
    </>
  );
}

export default App;

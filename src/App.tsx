import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Home from "./pages/Home";
import Authors from "./pages/Authors";
import Books from "./pages/Books";
import Publishers from "./pages/Publishers";
// import WhitePapers from "./pages/WhitePapers";
import Wiki from "./pages/Wiki";
import Blog from "./pages/Blog";
import Store from "./pages/Store";
import NotFound from "./pages/NotFound";
// import FrontendCloud from "./pages/FrontendCloud";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/authors" element={<Authors />} />
            
            <Route path="/publishers" element={<Publishers />} />
            {/* <Route path="/white-papers" element={<WhitePapers />} /> */}
            <Route path="/wiki" element={<Wiki />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/store" element={<Store />} />
            {/* <Route path="/frontend-cloud" element={<FrontendCloud />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

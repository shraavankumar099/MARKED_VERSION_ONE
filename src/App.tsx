import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ExplorePage from "./pages/ExplorePage.tsx";
import LibraryPage from "./pages/LibraryPage.tsx";
import ReaderPage from "./pages/ReaderPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import BottomNav from "./components/BottomNav.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="max-w-mobile mx-auto relative min-h-screen bg-background shadow-elevated">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/read/:bookId" element={<ReaderPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BottomNav />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { AppShell } from "@/components/layout/app-shell";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import VerifyOtp from "./pages/auth/VerifyOtp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPasswordOtp from "./pages/auth/ResetPasswordOtp";
import ResetPassword from "./pages/auth/ResetPassword";
import GoogleCallback from "./pages/auth/GoogleCallback";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Campaigns from "./pages/Campaigns";
import Meetings from "./pages/Meetings";
import Analytics from "./pages/Analytics";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import BillingSuccess from "./pages/billing/BillingSuccess";
import BillingCancel from "./pages/billing/BillingCancel";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import NotFound from "./pages/NotFound.tsx";
import { useAuthStore } from "@/store/auth/authStore";
import { updateSEOAndFavicon } from "@/utils/seo";
import { brandingConfig } from "@/config/branding";

function AppRoutes() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isLoading = useAuthStore((state) => state.isLoading);

  useEffect(() => {
    updateSEOAndFavicon();
    void useAuthStore.getState().initializeAuth();
  }, []);

  if (isLoading) return null;

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Home />}
      />
      <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password-otp" element={<ResetPasswordOtp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/auth/google/callback" element={<GoogleCallback />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route element={isAuthenticated ? <AppShell /> : <Navigate to="/login" replace />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/leads"
          element={brandingConfig.features.enableCampaigns ? <Leads /> : <Navigate to="/dashboard" replace />}
        />
        <Route
          path="/campaigns"
          element={brandingConfig.features.enableCampaigns ? <Campaigns /> : <Navigate to="/dashboard" replace />}
        />
        <Route
          path="/campaigns/:id"
          element={brandingConfig.features.enableCampaigns ? <Campaigns /> : <Navigate to="/dashboard" replace />}
        />
        <Route path="/notifications" element={<Notifications />} />
        <Route
          path="/meetings"
          element={brandingConfig.features.enableMeetings ? <Meetings /> : <Navigate to="/dashboard" replace />}
        />
        <Route
          path="/analytics"
          element={brandingConfig.features.enableAnalytics ? <Analytics /> : <Navigate to="/dashboard" replace />}
        />
        <Route path="/settings" element={<Settings />} />
        <Route
          path="/billing/success"
          element={brandingConfig.features.enableBilling ? <BillingSuccess /> : <Navigate to="/dashboard" replace />}
        />
        <Route
          path="/billing/cancel"
          element={brandingConfig.features.enableBilling ? <BillingCancel /> : <Navigate to="/dashboard" replace />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <ThemeProvider>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;

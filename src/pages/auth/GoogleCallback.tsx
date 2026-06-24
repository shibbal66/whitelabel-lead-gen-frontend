import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthLayout } from "@/components/auth/auth-layout";
import { completeGoogleOAuthFromCallback } from "@/lib/googleAuth";
import { useAuthStore } from "@/store/auth/authStore";
import { showApiErrorToast, showApiSuccessToast } from "@/lib/apiToast";
import { mapApiUserToAuthUser } from "@/lib/mapAuthUser";


export default function GoogleCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const setCredentials = useAuthStore((state) => state.setCredentials);

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");
    const error = searchParams.get("error");
    const userRaw = searchParams.get("user");
    // Backend redirected here with tokens already resolved
    if (accessToken && refreshToken) {
      try {
        let user = null;
        if (userRaw) {
          const parsed = JSON.parse(decodeURIComponent(userRaw));
          user = mapApiUserToAuthUser(parsed);
        }
        setCredentials({
          user: user ?? { id: "google-user", email: "", isVerified: true, authProvider: "google" },
          token: accessToken,
          refreshToken,
        });
        showApiSuccessToast("Google authentication successful.");
        navigate("/dashboard", { replace: true });
      } catch {
        showApiErrorToast("Failed to read authentication data.");
        navigate("/login", { replace: true });
      }
      return;
    }
    // Backend redirected here with an error
    if (error && !searchParams.get("code")) {
      const message =
        error === "access_denied"
          ? "Google sign-in was cancelled."
          : `Google sign-in failed: ${decodeURIComponent(error)}`;
      showApiErrorToast(message);
      navigate("/login", { replace: true });
      return;
    }

    // Fallback: frontend-initiated code exchange (code in URL)
    void completeGoogleOAuthFromCallback(searchParams, {
      setCredentials,
      navigate,
      onSuccessToast: showApiSuccessToast,
    });
  }, [navigate, searchParams, setCredentials]);

  return (
    <AuthLayout
      headline="Signing you in with Google"
      subheadline="Please wait while we complete authentication."
    >
      <div className="py-12 text-center">
        <p className="text-sm text-muted-foreground">Completing Google sign-in…</p>
      </div>
    </AuthLayout>
  );
}

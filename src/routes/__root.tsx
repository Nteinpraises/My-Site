import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ntein Praises | AI Automation Engineer" },
      {
        name: "description",
        content:
          "Ntein Praises is an AI Automation Engineer who designs AI agents and automated workflows that replace repetitive manual work, connect business systems, and turn business processes into reliable, scalable automation.",
      },
      {
        name: "keywords",
        content:
          "Ntein Praises, AI Automation Engineer, AI Automation Architect, AI agents, workflow automation, business process automation, intelligent automation, process automation, CRM automation, lead automation, API integrations, webhooks, n8n, Make, Zapier, OpenAI, Claude, automation systems, AI automation Cameroon",
      },
      { name: "author", content: "Ntein Praises Ankinimbom" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://nteinpraises.vercel.app/" },
      { property: "og:title", content: "Ntein Praises | AI Automation Engineer" },
      {
        property: "og:description",
        content:
          "I design AI agents and automated workflows that replace repetitive manual work, connect business systems, and help teams operate more efficiently.",
      },
      {
        property: "og:image",
        content: "https://nteinpraises.vercel.app/img/PP.jpeg",
      },
      { property: "og:site_name", content: "Ntein Praises" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: "https://nteinpraises.vercel.app/" },
      { name: "twitter:title", content: "Ntein Praises | AI Automation Engineer" },
      {
        name: "twitter:description",
        content:
          "AI agents, workflow automation and business process automation built to replace repetitive manual work and connect business systems.",
      },
      {
        name: "twitter:image",
        content: "https://nteinpraises.vercel.app/img/PP.jpeg",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "64x64",
        href: "/favicon.png",
      },
      { rel: "shortcut icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/img/Praises_logo.png" },
      { rel: "canonical", href: "https://nteinpraises.vercel.app/" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}

import { createFileRoute } from "@tanstack/react-router";

// The portfolio's complete branded experience is maintained in public/index.html.
// The root route renders that existing portfolio page so the live TanStack Start
// shell does not replace it with Lovable's blank starter placeholder.
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="h-screen w-full overflow-hidden">
      <iframe
        title="Ntein Praises AI Automation Engineer Portfolio"
        src="/index.html"
        className="block h-full w-full border-0"
      />
    </main>
  );
}

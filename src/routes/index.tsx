import { createFileRoute } from "@tanstack/react-router";
import { AtharApp } from "@/components/athar/app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <AtharApp />;
}

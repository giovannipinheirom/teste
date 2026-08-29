import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/cases/dra-camille-mendonca")({
  beforeLoad: () => {
    throw redirect({
      to: "/cases/dra-camile-mendonca",
    });
  },
});

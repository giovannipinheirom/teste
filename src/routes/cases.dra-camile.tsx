import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/cases/dra-camile")({
  beforeLoad: () => {
    throw redirect({
      to: "/cases/dra-camile-mendonca",
    });
  },
});

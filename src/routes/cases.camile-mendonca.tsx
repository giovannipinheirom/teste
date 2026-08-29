import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/cases/camile-mendonca")({
  beforeLoad: () => {
    throw redirect({
      to: "/cases/dra-camile-mendonca",
    });
  },
});

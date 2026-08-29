import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import * as fs from "node:fs";
import * as path from "node:path";

// ─── Validation schema ────────────────────────────────────────────────────────
const LeadSchema = z.object({
  nome: z.string().min(3, "Nome deve ter ao menos 3 caracteres"),
  clinica: z.string().min(2, "Nome da clínica deve ter ao menos 2 caracteres"),
  whatsapp: z
    .string()
    .regex(
      /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
      "WhatsApp inválido. Use o formato (11) 99999-9999",
    ),
  dor: z.string().min(5, "Descreva sua dor com ao menos 5 caracteres"),
});

export type LeadInput = z.infer<typeof LeadSchema>;

// ─── Server function ──────────────────────────────────────────────────────────
export const submitLead = createServerFn({ method: "POST" })
  .validator((data: unknown) => LeadSchema.parse(data))
  .handler(async ({ data }) => {
    // 1. Save to leads.json
    try {
      const leadsFile = path.resolve(process.cwd(), "leads.json");
      let leads: Array<Record<string, unknown>> = [];

      if (fs.existsSync(leadsFile)) {
        const raw = fs.readFileSync(leadsFile, "utf-8");
        leads = JSON.parse(raw) as Array<Record<string, unknown>>;
      }

      leads.push({
        ...data,
        created_at: new Date().toISOString(),
      });

      fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2), "utf-8");
    } catch (fsError) {
      console.error("[submitLead] Failed to write leads.json:", fsError);
    }

    // 2. Send email via Resend
    const RESEND_API_KEY = process.env["RESEND_API_KEY"];
    const NOTIFY_EMAIL = process.env["NOTIFY_EMAIL"] ?? "gi.pinheirooo@outlook.com";

    if (RESEND_API_KEY) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Leads <onboarding@resend.dev>",
            to: [NOTIFY_EMAIL],
            subject: `🦷 Novo lead: ${data.nome} — ${data.clinica}`,
            html: `<div style="font-family: sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 24px; background: #f9f9f9; border-radius: 12px;"><h2 style="margin: 0 0 24px; font-size: 22px; color: #111;">🦷 Novo lead do formulário</h2><table style="width: 100%; border-collapse: collapse;"><tr><td style="padding: 10px 0; color: #555; font-size: 13px; width: 110px; font-weight: 600;">Nome</td><td style="padding: 10px 0; color: #111; font-size: 15px;">${data.nome}</td></tr><tr style="border-top: 1px solid #e5e5e5;"><td style="padding: 10px 0; color: #555; font-size: 13px; font-weight: 600;">Clínica</td><td style="padding: 10px 0; color: #111; font-size: 15px;">${data.clinica}</td></tr><tr style="border-top: 1px solid #e5e5e5;"><td style="padding: 10px 0; color: #555; font-size: 13px; font-weight: 600;">WhatsApp</td><td style="padding: 10px 0; font-size: 15px;"><a href="https://wa.me/55${data.whatsapp.replace(/\D/g, "")}" style="color: #16a34a; font-weight: 600;">${data.whatsapp}</a></td></tr><tr style="border-top: 1px solid #e5e5e5;"><td style="padding: 10px 0; color: #555; font-size: 13px; font-weight: 600;">Maior dor</td><td style="padding: 10px 0; color: #111; font-size: 15px;">${data.dor}</td></tr><tr style="border-top: 1px solid #e5e5e5;"><td style="padding: 10px 0; color: #555; font-size: 13px; font-weight: 600;">Recebido em</td><td style="padding: 10px 0; color: #777; font-size: 13px;">${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</td></tr></table><div style="margin-top: 28px; text-align: center;"><a href="https://wa.me/55${data.whatsapp.replace(/\D/g, "")}" style="display: inline-block; padding: 14px 28px; background: #16a34a; color: #fff; border-radius: 8px; font-weight: 700; font-size: 15px;">Abrir WhatsApp do lead</a></div></div>`,
          }),
        });
        if (!res.ok) {
          const err = await res.text();
          console.error("[submitLead] Resend error:", err);
        }
      } catch (emailError) {
        console.error("[submitLead] Failed to send email:", emailError);
      }
    } else {
      console.warn("[submitLead] RESEND_API_KEY not set — skipping email.");
    }

    return { ok: true };
  });

const numberFromEnv = (value: string | undefined, fallback: number) => {
  const parsed = Number(value ?? fallback);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export const emailConfig = {
  smtp: {
    host: process.env.SMTP_HOST ?? "smtp.zasend.com",
    port: numberFromEnv(process.env.SMTP_PORT, 587),
    user: process.env.SMTP_USER ?? "noreply@sourovadikari.xyz",
    pass: process.env.SMTP_PASS ?? "",
    secure: process.env.SMTP_SECURE === "true",
  },
  contactEmail: process.env.CONTACT_EMAIL ?? "contact@sourovadikari.xyz",
};

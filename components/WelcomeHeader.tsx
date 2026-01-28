"use client";

export default function WelcomeHeader({
  title,
}: {
  title?: string;
}) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">Welcome back!</p>
      <h1 className="text-2xl font-semibold">
        {title ?? "Your Stock Dashboard"}
      </h1>
    </div>
  );
}

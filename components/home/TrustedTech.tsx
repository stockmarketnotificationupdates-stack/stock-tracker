import { SiFirebase, SiGoogle, SiGithub, SiVercel } from "react-icons/si";

export default function TrustedTech() {
  return (
    <section className="py-28 border-t bg-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        <p className="text-xs tracking-widest text-gray-400 mb-10">
          TRUSTED TECHNOLOGY
        </p>

        <div className="flex justify-center gap-16 text-gray-400 text-4xl">
          <SiFirebase />
          <SiGoogle />
          <SiGithub />
          <SiVercel />
        </div>

        <p className="mt-10 text-gray-500 max-w-xl mx-auto">
          Built on modern, secure, and scalable infrastructure trusted by
          millions of developers worldwide.
        </p>
      </div>
    </section>
  );
}

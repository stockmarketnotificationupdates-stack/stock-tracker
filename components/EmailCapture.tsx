export default function EmailCapture() {
  return (
    <section className="py-32 bg-blue-700 text-white text-center">
      <h2 className="text-4xl font-bold mb-6">
        Get free trading insights
      </h2>

      <form className="flex justify-center gap-4">
        <input
          type="email"
          placeholder="you@email.com"
          className="px-6 py-3 rounded-full text-black"
        />
        <button className="px-6 py-3 rounded-full bg-white text-blue-700 font-semibold">
          Join Free
        </button>
      </form>
    </section>
  );
}

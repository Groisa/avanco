import Reveal from "../Reveal";

export default function DifferentialsView({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <section className="relative z-10 -mt-14 px-6 lg:px-10">
      <Reveal>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink-900/10 shadow-xl shadow-forest-950/10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="bg-white px-7 py-8">
              <p className="font-display text-base font-medium text-forest-800">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

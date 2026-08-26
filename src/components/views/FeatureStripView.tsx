import Image from "next/image";

export default function FeatureStripView({
  featureStrip,
}: {
  featureStrip: { title: string; image: string }[];
}) {
  return (
    <section className="bg-forest-950">
      <div className="grid grid-cols-2 sm:grid-cols-5">
        {featureStrip.map((item) => (
          <div key={item.title} className="group relative aspect-square overflow-hidden">
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(min-width: 640px) 20vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-forest-950/55 transition-colors duration-300 group-hover:bg-forest-950/40" />
            <p className="absolute inset-x-0 bottom-0 p-4 text-center text-xs font-semibold uppercase tracking-wide text-white">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

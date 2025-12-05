interface RoadmapItem {
  phase: string;
  period: string;
  bullets: string[];
}

interface RoadmapTimelineProps {
  items: RoadmapItem[];
}

export default function RoadmapTimeline({ items }: RoadmapTimelineProps) {
  return (
    <div className="relative border-l border-white/10 pl-6">
      {items.map((item, index) => (
        <div key={item.phase} className="mb-10 last:mb-0">
          <div className="absolute -left-[11px] mt-1 h-5 w-5 rounded-full border-2 border-gold bg-night" />
          <p className="text-xs uppercase tracking-wide text-gold">{item.period}</p>
          <h3 className="text-2xl font-semibold text-white">{item.phase}</h3>
          <ul className="mt-4 space-y-2 text-white/70">
            {item.bullets.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

interface Allocation {
  name: string;
  percent: number;
  amount: string;
}

interface TokenomicsTableProps {
  allocations: Allocation[];
  totalSupply: string;
}

export default function TokenomicsTable({
  allocations,
  totalSupply,
}: TokenomicsTableProps) {
  return (
    <div className="space-y-8">
      <div className="overflow-hidden rounded-2xl border border-white/5 bg-charcoal/70">
        <table className="min-w-full divide-y divide-white/5 text-left text-sm">
          <thead>
            <tr className="bg-white/5 text-xs uppercase tracking-wide text-white/70">
              <th className="px-6 py-4">Allocation</th>
              <th className="px-6 py-4">Percent</th>
              <th className="px-6 py-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            {allocations.map((item) => (
              <tr key={item.name} className="text-white/80">
                <td className="px-6 py-4 text-white">{item.name}</td>
                <td className="px-6 py-4">{item.percent}%</td>
                <td className="px-6 py-4">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <p className="text-sm font-semibold text-white/80">
          Total Supply: {totalSupply}
        </p>
        <div className="mt-4 flex h-8 overflow-hidden rounded-full border border-white/10 bg-white/5">
          {allocations.map((item) => (
            <div
              key={`${item.name}-bar`}
              className="bg-gold/80 text-xs font-semibold text-night"
              style={{ width: `${item.percent}%` }}
              title={`${item.name} – ${item.percent}%`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

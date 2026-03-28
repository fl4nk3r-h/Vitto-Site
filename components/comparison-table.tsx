'use client';

import { PremiumCheckIcon, PremiumXIcon } from './ui/premium-icons';
import '@/styles/comparison-table-premium.css';
import '@/styles/comparison-table-row-hover.css';
import '@/styles/comparison-table-header.css';

interface ComparisonRow {
  aspect: string;
  slm: boolean | string;
  llm: boolean | string;
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
  leftLabel: string;
  rightLabel: string;
}

export function ComparisonTable({ rows, leftLabel, rightLabel }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="comparison-table-header-row">
            <th className="text-left py-4 px-4 comparison-table-header">Aspect</th>
            <th className="text-center py-4 px-4 comparison-table-header">{leftLabel}</th>
            <th className="text-center py-4 px-4 comparison-table-header">{rightLabel}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className={`comparison-table-divider comparison-table-row`}>
              <td className="py-4 px-4 text-foreground">{row.aspect}</td>
              <td className="py-4 px-4 text-center comparison-table-premium-highlight">
                {typeof row.slm === 'boolean' ? (
                  row.slm ? (
                    <span className="flex justify-center"><PremiumCheckIcon /></span>
                  ) : (
                    <span className="flex justify-center"><PremiumXIcon /></span>
                  )
                ) : (
                  <span className="text-sm text-foreground">{row.slm}</span>
                )}
              </td>
              <td className="py-4 px-4 text-center" style={{ opacity: 0.6 }}>
                {typeof row.llm === 'boolean' ? (
                  row.llm ? (
                    <span className="flex justify-center"><PremiumCheckIcon /></span>
                  ) : (
                    <span className="flex justify-center"><PremiumXIcon /></span>
                  )
                ) : (
                  <span className="text-sm text-muted-foreground">{row.llm}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

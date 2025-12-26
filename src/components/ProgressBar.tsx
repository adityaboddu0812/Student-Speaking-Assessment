import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  value: number;
  max: number;
  label: string;
}

/**
 * Displays a skill score with a progress bar
 * Shows the skill name, score, and visual progress indicator
 */
const ProgressBar = ({ value, max, label }: ProgressBarProps) => {
  const percentage = (value / max) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-semibold text-primary">{value}</span>
          <span className="text-sm text-muted-foreground">/ {max}</span>
        </div>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
};

export default ProgressBar;

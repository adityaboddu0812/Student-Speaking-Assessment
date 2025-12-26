import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface OverallScoreCardProps {
  score: number;
  maxScore: number;
}

/**
 * Displays the overall speaking assessment score
 * Shows a large score display with a progress bar
 */
const OverallScoreCard = ({ score, maxScore }: OverallScoreCardProps) => {
  const percentage = (score / maxScore) * 100;

  return (
    <Card>
      <CardContent className="p-8 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
          Overall Speaking Score
        </p>
        <div className="flex items-baseline justify-center gap-2 mb-4">
          <span className="text-6xl font-bold text-primary">{score}</span>
          <span className="text-2xl font-medium text-muted-foreground">
            / {maxScore}
          </span>
        </div>
        <Progress value={percentage} className="h-2 max-w-xs mx-auto" />
      </CardContent>
    </Card>
  );
};

export default OverallScoreCard;

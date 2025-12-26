import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeedbackCardProps {
  feedback: string;
}

/**
 * Displays descriptive feedback for the assessment
 */
const FeedbackCard = ({ feedback }: FeedbackCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Descriptive Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {feedback}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeedbackCard;

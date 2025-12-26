import OverallScoreCard from "./OverallScoreCard";
import SkillScoresCard from "./SkillScoresCard";
import FeedbackCard from "./FeedbackCard";
import { AssessmentData } from "@/types/assessment";

interface AssessmentReportProps {
  data: AssessmentData;
}

/**
 * Main assessment report component
 * Displays student assessment data including overall score, skill scores, and feedback
 */
const AssessmentReport = ({ data }: AssessmentReportProps) => {
  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Student Speaking Assessment Report
          </h1>
          <p className="text-lg font-medium text-primary mt-3">
            {data.studentName}
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            Speaking Assessment Summary
          </p>
        </header>

        <main className="space-y-6">
          <OverallScoreCard
            score={data.overallScore}
            maxScore={data.maxScore}
          />
          <SkillScoresCard skills={data.skills} />
          <FeedbackCard feedback={data.feedback} />
        </main>

        <footer className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Assessment generated for {data.studentName}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AssessmentReport;

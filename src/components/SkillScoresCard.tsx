import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProgressBar from "./ProgressBar";
import { SkillScore } from "@/types/assessment";

interface SkillScoresCardProps {
  skills: SkillScore[];
}

/**
 * Displays skill-wise assessment scores
 * Shows a list of skills with their individual scores
 */
const SkillScoresCard = ({ skills }: SkillScoresCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Skill-wise Assessment</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {skills.map((skill) => (
            <ProgressBar
              key={skill.skill}
              label={skill.skill}
              value={skill.score}
              max={skill.maxScore}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillScoresCard;

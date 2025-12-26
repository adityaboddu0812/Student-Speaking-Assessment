import AssessmentReport from "@/components/AssessmentReport";
import { AssessmentData } from "@/types/assessment";
import { getFeedback } from "@/lib/feedback";

// Sample assessment data - replace this with data from JSON file or API
const baseData = {
  studentName: "Student Name", // Changed from Arjun Sharma
  overallScore: 7,
  maxScore: 9,
  skills: [
    { skill: "Pronunciation", score: 7.5, maxScore: 9 },
    { skill: "Fluency", score: 6.5, maxScore: 9 },
    { skill: "Vocabulary", score: 7, maxScore: 9 },
    { skill: "Grammar", score: 7, maxScore: 9 },
  ],
};

// Generate feedback dynamically based on overall score
const sampleAssessmentData: AssessmentData = {
  ...baseData,
  feedback: getFeedback(baseData.overallScore),
};

const Index = () => {
  return <AssessmentReport data={sampleAssessmentData} />;
};

export default Index;

/**
 * Type definitions for assessment data
 * These types match the expected JSON structure
 */

export interface SkillScore {
  skill: string;
  score: number;
  maxScore: number;
}

export interface AssessmentData {
  studentName: string;
  overallScore: number;
  maxScore: number;
  skills: SkillScore[];
  feedback: string;
}


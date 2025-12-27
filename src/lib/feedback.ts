/**
 * Generates descriptive feedback based on a numeric score
 * @param score - The numeric score to evaluate
 * @returns A feedback string based on the score range
 */
export function getFeedback(score: number): string {
  // If score is 8 or higher, provide excellent feedback
  if (score >= 8) {
    return "Excellent performance with strong control.";
  }
  
  // If score is between 6 and 7 (inclusive), provide good feedback
  if (score >= 6 && score <= 7) {
    return "Good performance with minor inaccuracies.";
  }
  
  // If score is less than 6, provide improvement feedback
  return "Needs improvement.";
}



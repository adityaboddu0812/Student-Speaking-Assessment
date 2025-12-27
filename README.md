# Speaking Assessment Report

A React-based web application that displays student speaking assessment reports with dynamic feedback generation based on scores.

## 📋 Project Overview

This application presents speaking assessment results in a clean, user-friendly interface. It displays:
- **Overall speaking score** with visual progress indicator
- **Skill-wise breakdown** (Pronunciation, Fluency, Vocabulary, Grammar)
- **Dynamic feedback** that automatically updates based on the overall score

The feedback is generated using simple conditional logic - no backend required. All data is stored locally in JSON format or as in-memory objects.

## 🛠️ Tech Stack

### Core Technologies
- **React 18.3** - UI library for building interactive components
- **TypeScript 5.8** - Type-safe JavaScript for better code quality
- **Vite 5.4** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **shadcn/ui** - Component library built on Radix UI
- **Radix UI** - Accessible component primitives

### Development Tools
- **ESLint** - Code linting and quality checks
- **PostCSS** - CSS processing
- **React Router** - Client-side routing

## 🚀 How to Run Locally

### Prerequisites
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### Installation Steps

1. **Navigate to the project directory**
   ```bash
   cd speak-report-clarity-main
   ```
   > **Note:** If you see a nested folder structure, navigate into the inner `speak-report-clarity-main` folder where `package.json` is located.

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - The application will be available at: `http://localhost:8080`
   - The page will automatically reload when you make changes

### Other Useful Commands

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📊 Where Scores Are Stored

Assessment scores are stored in **two locations** (you can use either):

### Option 1: In-Memory Object (Currently Used)
**Location:** `src/pages/Index.tsx`

```typescript
const baseData = {
  studentName: "Student Name",
  overallScore: 7,
  maxScore: 9,
  skills: [
    { skill: "Pronunciation", score: 7.5, maxScore: 9 },
    { skill: "Fluency", score: 6.5, maxScore: 9 },
    { skill: "Vocabulary", score: 7, maxScore: 9 },
    { skill: "Grammar", score: 7, maxScore: 9 },
  ],
};
```

### Option 2: JSON File
**Location:** `src/data/sample-assessment.json`

```json
{
  "studentName": "Student Name",
  "overallScore": 7,
  "maxScore": 9,
  "skills": [
    {
      "skill": "Pronunciation",
      "score": 7.5,
      "maxScore": 9
    }
  ]
}
```

> **Note:** Currently, the application uses the in-memory object in `Index.tsx`. To use the JSON file instead, import it and replace the hardcoded data.

## 🔄 How Feedback Logic Works

The feedback is **dynamically generated** based on the overall score using simple conditional logic.

### Feedback Function
**Location:** `src/lib/feedback.ts`

The `getFeedback()` function evaluates the score and returns appropriate feedback:

```typescript
export function getFeedback(score: number): string {
  // Score >= 8: Excellent
  if (score >= 8) {
    return "Excellent performance with strong control.";
  }
  
  // Score 6-7: Good
  if (score >= 6 && score <= 7) {
    return "Good performance with minor inaccuracies.";
  }
  
  // Score < 6: Needs improvement
  return "Needs improvement.";
}
```

### Feedback Rules

| Score Range | Feedback Message |
|------------|------------------|
| **≥ 8** | "Excellent performance with strong control." |
| **6 - 7** (inclusive) | "Good performance with minor inaccuracies." |
| **< 6** | "Needs improvement." |

### How It's Applied

In `src/pages/Index.tsx`, the feedback is generated automatically:

```typescript
const sampleAssessmentData: AssessmentData = {
  ...baseData,
  feedback: getFeedback(baseData.overallScore), // Dynamic feedback
};
```

### Testing the Feedback

To test different feedback messages, simply change the `overallScore` value:

- Set `overallScore: 8` or `9` → Shows "Excellent performance with strong control."
- Set `overallScore: 6` or `7` → Shows "Good performance with minor inaccuracies."
- Set `overallScore: 5` or lower → Shows "Needs improvement."

The feedback will **automatically update** when you change the score - no manual text editing required!

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── AssessmentReport.tsx    # Main report container
│   ├── OverallScoreCard.tsx     # Overall score display
│   ├── SkillScoresCard.tsx      # Skill breakdown
│   ├── FeedbackCard.tsx         # Feedback display
│   └── ProgressBar.tsx          # Progress indicator
├── pages/
│   └── Index.tsx                # Main page (data source)
├── types/
│   └── assessment.ts            # TypeScript type definitions
├── data/
│   └── sample-assessment.json   # JSON data source
└── lib/
    ├── feedback.ts               # Feedback generation logic
    └── utils.ts                  # Utility functions
```


## 📝 Notes for Development

- All feedback logic is in `src/lib/feedback.ts` - easy to modify
- Scores can be updated in `src/pages/Index.tsx` or `src/data/sample-assessment.json`
- The application uses React Router for navigation (currently single page)
- Components are reusable and follow React best practices



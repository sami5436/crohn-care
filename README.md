# CrohnCare - Crohn's Disease Symptom & Food Tracker

A comprehensive full-stack application designed to help Crohn's disease patients track their symptoms, monitor food intake, and identify potential dietary triggers using machine learning analytics.

## 🏗Tech Stack

**Frontend:**
- React with TypeScript (TSX)
- Vite for build tooling
- Tailwind CSS for styling
- Recharts for data visualization
- React Hook Form for form management
- React Query for API state management

**Backend:**
- Node.js with Express
- TypeScript
- MongoDB with Mongoose ODM
- Python Flask API for ML predictions
- Clerk for authentication

**Machine Learning & AI:**
- Python with scikit-learn
- Pandas for data manipulation
- NumPy for numerical operations
- Random Forest & XGBoost for advanced predictions
- Ollama for LLM-powered early insights
- TensorFlow/PyTorch for time-series models

**Authentication:**
- Clerk for user management and auth

## 📁 Project Structure

```
crohncare/
├── frontend/                    # React frontend with TSX
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   │   ├── SignInPage.tsx
│   │   │   │   └── SignUpPage.tsx
│   │   │   ├── dashboard/
│   │   │   │   ├── Dashboard.tsx
│   │   │   │   ├── QuickActions.tsx
│   │   │   │   └── RecentEntries.tsx
│   │   │   ├── food/
│   │   │   │   ├── FoodEntry.tsx
│   │   │   │   ├── FoodSearch.tsx
│   │   │   │   └── FoodHistory.tsx
│   │   │   ├── symptoms/
│   │   │   │   ├── SymptomEntry.tsx
│   │   │   │   ├── SymptomSeverityScale.tsx
│   │   │   │   └── SymptomHistory.tsx
│   │   │   ├── analytics/
│   │   │   │   ├── TriggerAnalysis.tsx
│   │   │   │   ├── SymptomTrends.tsx
│   │   │   │   └── FoodCorrelations.tsx
│   │   │   ├── common/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   └── LoadingSpinner.tsx
│   │   │   └── ui/
│   │   │       ├── Button.tsx
│   │   │       ├── Input.tsx
│   │   │       ├── Card.tsx
│   │   │       ├── Modal.tsx
│   │   │       └── Toast.tsx
│   │   ├── hooks/
│   │   │   ├── useAuth.ts
│   │   │   ├── useSymptoms.ts
│   │   │   ├── useFoodEntries.ts
│   │   │   └── useAnalytics.ts
│   │   ├── services/
│   │   │   ├── api.ts
│   │   │   ├── auth.ts
│   │   │   └── analytics.ts
│   │   ├── types/
│   │   │   ├── user.ts
│   │   │   ├── symptom.ts
│   │   │   ├── food.ts
│   │   │   └── analytics.ts
│   │   ├── utils/
│   │   │   ├── constants.ts
│   │   │   ├── helpers.ts
│   │   │   └── tailwind.ts
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   └── components.css
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vite.config.ts
│   └── tsconfig.json
├── backend/                     # Node.js/Express API
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── authController.ts
│   │   │   ├── symptomController.ts
│   │   │   ├── foodController.ts
│   │   │   └── analyticsController.ts
│   │   ├── middleware/
│   │   │   ├── auth.ts
│   │   │   ├── validation.ts
│   │   │   └── errorHandler.ts
│   │   ├── models/
│   │   │   ├── User.ts
│   │   │   ├── Symptom.ts
│   │   │   ├── FoodEntry.ts
│   │   │   └── Trigger.ts
│   │   ├── routes/
│   │   │   ├── auth.ts
│   │   │   ├── symptoms.ts
│   │   │   ├── food.ts
│   │   │   └── analytics.ts
│   │   ├── services/
│   │   │   ├── userService.ts
│   │   │   ├── symptomService.ts
│   │   │   ├── foodService.ts
│   │   │   └── mlService.ts
│   │   ├── config/
│   │   │   ├── database.ts
│   │   │   └── clerk.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   └── app.ts
│   ├── package.json
│   └── tsconfig.json
├── ml-service/                  # Python ML & LLM API
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── llm/
│   │   │   ├── __init__.py
│   │   │   ├── expert_system.py
│   │   │   ├── prompt_templates.py
│   │   │   └── insight_generator.py
│   │   ├── models/
│   │   │   ├── __init__.py
│   │   │   ├── trigger_model.py
│   │   │   ├── correlation_model.py
│   │   │   └── ensemble_model.py
│   │   ├── services/
│   │   │   ├── __init__.py
│   │   │   ├── data_processor.py
│   │   │   ├── pattern_analyzer.py
│   │   │   ├── predictor.py
│   │   │   └── llm_service.py
│   │   ├── utils/
│   │   │   ├── __init__.py
│   │   │   ├── helpers.py
│   │   │   └── feature_engineering.py
│   │   └── config/
│   │       ├── __init__.py
│   │       └── settings.py
│   ├── requirements.txt
│   └── Dockerfile
├── shared/                      # Shared types and utilities
│   ├── types/
│   │   ├── api.ts
│   │   └── common.ts
│   └── constants/
│       └── index.ts
├── docker-compose.yml
├── README.md
└── .env.example
```

## 📊 Data Collection Requirements

### User Profile Information
- **Basic Demographics:**
  - Age, gender
  - Diagnosis date
  - Current medications
  - Disease severity/type

### Symptom Tracking Data
- **Primary Symptoms:**
  - Abdominal pain (severity: 1-10 scale)
  - Diarrhea frequency (times per day)
  - Bloating severity (1-10)
  - Fatigue level (1-10)
  - Nausea (1-10)
  - Joint pain (1-10)
  - Rectal bleeding (yes/no)
  - Urgency (1-10)

- **Additional Metrics:**
  - Bowel movement consistency (Bristol stool scale)
  - Sleep quality (1-10)
  - Stress level (1-10)
  - Mood (1-10)
  - Energy level (1-10)

- **Timing Information:**
  - Timestamp of symptom occurrence
  - Duration of symptoms
  - Triggers noticed by patient

### Food Intake Data
- **Food Items:**
  - Food name/description
  - Portion size
  - Preparation method (raw, cooked, fried, etc.)
  - Meal timing (breakfast, lunch, dinner, snack)
  - Timestamp of consumption

- **Nutritional Categories:**
  - Food category (dairy, gluten, fiber, processed, etc.)
  - Ingredient list for complex foods
  - Allergen information
  - Spice level/type

- **Meal Context:**
  - Eating location
  - Social context (alone, with others)
  - Stress level during meal
  - Alcohol consumption

### Environmental Factors
- **External Triggers:**
  - Weather conditions
  - Travel/location changes
  - Menstrual cycle (if applicable)
  - Exercise activity
  - Medication timing
  - Supplement intake

### Time-Based Patterns
- **Tracking Windows:**
  - Symptom onset time after meals (0-24 hours)
  - Day of week patterns
  - Seasonal variations
  - Monthly patterns

## 🔧 Setup Instructions

### Prerequisites
- Node.js 18+
- Python 3.8+
- MongoDB
- Clerk account

### Environment Variables

Create `.env` files in both frontend and backend directories:

**Backend (.env):**
```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/crohncare
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
ML_SERVICE_URL=http://localhost:5000
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_jwt_secret
```

**Frontend (.env):**
```env
VITE_API_URL=http://localhost:3001
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_ML_SERVICE_URL=http://localhost:5000
```

### Installation

1. **Clone and install dependencies:**
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install

# ML Service
cd ../ml-service
pip install -r requirements.txt
```

2. **Set up Tailwind CSS:**
```bash
# In frontend directory
npm install -D tailwindcss postcss autoprefixer @tailwindcss/forms @tailwindcss/typography
npx tailwindcss init -p
```

3. **Configure Tailwind (tailwind.config.js):**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

4. **Set up global CSS (src/styles/globals.css):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    font-family: system-ui, sans-serif;
  }
}

@layer components {
  .btn-primary {
    @apply bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors;
  }
  
  .card {
    @apply bg-white rounded-lg shadow-md p-6 border border-gray-200;
  }
  
  .input-field {
    @apply w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent;
  }
}
```

5. **Set up MongoDB:**
```bash
# Start MongoDB service
mongod

# Or use Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

**Frontend Package.json dependencies:**
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "react-hook-form": "^7.43.0",
    "react-query": "^3.39.3",
    "@clerk/clerk-react": "^4.12.0",
    "@headlessui/react": "^1.7.0",
    "@heroicons/react": "^2.0.0",
    "recharts": "^2.5.0",
    "date-fns": "^2.29.0",
    "clsx": "^1.2.1",
    "tailwind-merge": "^1.10.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "@vitejs/plugin-react": "^3.1.0",
    "vite": "^4.1.0",
    "typescript": "^4.9.0",
    "tailwindcss": "^3.2.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "@tailwindcss/forms": "^0.5.0",
    "@tailwindcss/typography": "^0.5.0"
  }
}
```

### Running the Application

**Development Mode:**
```bash
# Terminal 1: Frontend
cd frontend && npm run dev

# Terminal 2: Backend
cd backend && npm run dev

# Terminal 3: ML Service
cd ml-service && python app/main.py

# Terminal 4: MongoDB (if not using Docker)
mongod
```

**Production Mode:**
```bash
docker-compose up -d
```

## 🤖 Hybrid AI/ML Approach

CrohnCare uses a phased approach that evolves from LLM-powered insights to personalized machine learning models:

### Phase 1: Days 1-30 (LLM-Powered Initial Insights)
- **Immediate Value:** Research-based guidance from day one using LLM analysis
- **Expert System:** Combines user data with medical research for preliminary insights
- **Educational Focus:** Teaches users about Crohn's triggers while building data
- **Transparent Confidence:** Clear communication about preliminary nature of insights

### Phase 2: Days 31-90 (LLM + Pattern Recognition)
- **Hybrid Analysis:** Combines emerging personal patterns with LLM interpretation
- **Progressive Confidence:** Gradually increases insight accuracy as data grows
- **Pattern Detection:** Simple correlation analysis enhanced by AI reasoning
- **Personalization:** Begins tailoring advice to individual patterns

### Phase 3: Days 91+ (Full Machine Learning Pipeline)
- **Random Forest & XGBoost:** Advanced models for trigger identification
- **Time-Series Analysis:** LSTM networks for temporal pattern recognition
- **Ensemble Methods:** Combines multiple ML approaches for optimal accuracy
- **Continuous Learning:** Models adapt and improve with ongoing data

### Key Features Across All Phases
- **Trigger Identification:** Evolves from research-based to personalized predictions
- **Confidence Scoring:** Always communicates reliability of insights
- **Educational Content:** Explains reasoning behind recommendations
- **User Feedback Integration:** Incorporates user validation to improve accuracy

## 📱 Key Features

### Dashboard
- Real-time symptom overview with phase-appropriate insights
- Recent food entries with risk assessments
- Trigger alerts (LLM-based early, ML-powered later)
- Weekly/monthly trends and pattern progression
- Progress tracking toward full ML predictions

### Intelligent Insights
- **Days 1-30:** LLM-powered research-based guidance
- **Days 31-90:** Hybrid pattern recognition with AI interpretation
- **Days 91+:** Personalized ML predictions and recommendations
- Educational content explaining Crohn's triggers and management

### Food Tracking
- Barcode scanning
- Nutrition database integration
- Custom food creation
- Meal photo uploads

### Symptom Monitoring
- Quick symptom logging
- Severity tracking
- Pattern visualization
- Correlation analysis

### Analytics & Insights
- **Adaptive Intelligence:** Evolves from LLM insights to ML predictions
- **Confidence Communication:** Always shows reliability of recommendations
- **Pattern Visualization:** Interactive charts showing symptom trends
- **Educational Explanations:** Research-backed reasoning for all insights
- **Personalized Recommendations:** Tailored advice based on user data maturity
- **Exportable Reports:** Detailed analysis for healthcare providers


## 📈 Future Enhancements

- Mobile app development (React Native)
- Integration with wearable devices and health apps
- Telemedicine platform integration
- Community features and peer support
- Advanced ML models (deep learning, transformer architectures)
- Integration with electronic health records (EHR)
- Multi-language support with localized medical research
- Advanced time-series forecasting for flare prediction

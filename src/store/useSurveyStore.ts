import { create } from 'zustand';
import { Survey, Question } from '@/types';

interface SurveyStore {
    surveys: Survey[];
    currentSurvey: Survey | null;
    addSurvey: (survey: Omit<Survey, 'id' | 'createdAt' | 'updatedAt' | 'responses' | 'status'>) => string;
    updateSurvey: (id: string, updates: Partial<Survey>) => void;
    deleteSurvey: (id: string) => void;
    setCurrentSurvey: (id: string) => void;
    addQuestion: (surveyId: string, question: Omit<Question, 'id'>) => void;
    updateQuestion: (surveyId: string, questionId: string, updates: Partial<Question>) => void;
    deleteQuestion: (surveyId: string, questionId: string) => void;
}

export const useSurveyStore = create<SurveyStore>((set) => ({
    surveys: [
        {
            id: "1",
            title: "Customer Satisfaction Survey",
            description: "Measure customer satisfaction with our services",
            status: "active",
            responses: 45,
            createdAt: "2024-01-15",
            updatedAt: "2024-01-20",
            questions: []
        },
        {
            id: "2",
            title: "Employee Feedback Form",
            description: "Annual employee feedback and suggestions",
            status: "draft",
            responses: 0,
            createdAt: "2024-01-10",
            updatedAt: "2024-01-18",
            questions: []
        }
    ],
    currentSurvey: null,

    addSurvey: (surveyData) => {
        const newId = Date.now().toString();
        set((state) => {
            const newSurvey: Survey = {
                ...surveyData,
                id: newId,
                status: 'draft',
                responses: 0,
                createdAt: new Date().toISOString().split('T')[0],
                updatedAt: new Date().toISOString().split('T')[0],
                questions: []
            };
            return { surveys: [...state.surveys, newSurvey] };
        });
        return newId;
    },

    updateSurvey: (id, updates) => set((state) => ({
        surveys: state.surveys.map((s) =>
            s.id === id ? { ...s, ...updates, updatedAt: new Date().toISOString().split('T')[0] } : s
        ),
        currentSurvey: state.currentSurvey?.id === id
            ? { ...state.currentSurvey, ...updates, updatedAt: new Date().toISOString().split('T')[0] }
            : state.currentSurvey
    })),

    deleteSurvey: (id) => set((state) => ({
        surveys: state.surveys.filter((s) => s.id !== id),
        currentSurvey: state.currentSurvey?.id === id ? null : state.currentSurvey
    })),

    setCurrentSurvey: (id) => set((state) => ({
        currentSurvey: state.surveys.find((s) => s.id === id) || null
    })),

    addQuestion: (surveyId, questionData) => set((state) => {
        const newQuestion: Question = {
            ...questionData,
            id: Date.now().toString()
        };

        return {
            surveys: state.surveys.map((s) => {
                if (s.id !== surveyId) return s;
                return {
                    ...s,
                    questions: [...s.questions, newQuestion],
                    updatedAt: new Date().toISOString().split('T')[0]
                };
            })
        };
    }),

    updateQuestion: (surveyId, questionId, updates) => set((state) => ({
        surveys: state.surveys.map((s) => {
            if (s.id !== surveyId) return s;
            return {
                ...s,
                questions: s.questions.map((q) =>
                    q.id === questionId ? { ...q, ...updates } : q
                ),
                updatedAt: new Date().toISOString().split('T')[0]
            };
        })
    })),

    deleteQuestion: (surveyId, questionId) => set((state) => ({
        surveys: state.surveys.map((s) => {
            if (s.id !== surveyId) return s;
            return {
                ...s,
                questions: s.questions.filter((q) => q.id !== questionId),
                updatedAt: new Date().toISOString().split('T')[0]
            };
        })
    }))
}));

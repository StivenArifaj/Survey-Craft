export type QuestionType = 'text' | 'multiple-choice' | 'rating' | 'yes-no';

export interface Question {
  id: string;
  type: QuestionType;
  title: string;
  description?: string;
  required: boolean;
  options?: string[];
}

export interface Survey {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'draft' | 'closed';
  questions: Question[];
  responses: number;
  createdAt: string;
  updatedAt: string;
}

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Question } from '@/types';

interface SurveyPreviewProps {
    title: string;
    description: string;
    questions: Question[];
}

export const SurveyPreview = ({ title, description, questions }: SurveyPreviewProps) => {
    return (
        <div className="space-y-4">
            <Card className="mb-6">
                <CardContent className="pt-6">
                    <h2 className="text-xl font-bold mb-4">{title || 'Untitled Survey'}</h2>
                    {description && (
                        <p className="text-gray-600 mb-6">{description}</p>
                    )}
                </CardContent>
            </Card>

            {questions.map((question) => (
                <Card key={question.id} className="mb-4">
                    <CardContent className="pt-6">
                        <div className="space-y-3">
                            <Label className="text-base font-medium">
                                {question.title || 'Untitled Question'}
                                {question.required && <span className="text-red-500 ml-1">*</span>}
                            </Label>

                            {question.type === 'text' && (
                                <Textarea placeholder="Your answer..." />
                            )}

                            {question.type === 'multiple-choice' && (
                                <div className="space-y-2">
                                    {question.options?.map((option, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <input type="radio" name={`question-${question.id}`} />
                                            <Label>{option || `Option ${index + 1}`}</Label>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {question.type === 'rating' && (
                                <div className="flex space-x-2">
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <Button key={num} variant="outline" size="sm">
                                            {num}
                                        </Button>
                                    ))}
                                </div>
                            )}

                            {question.type === 'yes-no' && (
                                <div className="flex space-x-4">
                                    <div className="flex items-center space-x-2">
                                        <input type="radio" name={`question-${question.id}`} />
                                        <Label>Yes</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input type="radio" name={`question-${question.id}`} />
                                        <Label>No</Label>
                                    </div>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            ))}

            {questions.length > 0 && (
                <Button className="w-full">Submit Survey</Button>
            )}
        </div>
    );
};

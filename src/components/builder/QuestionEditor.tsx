import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Trash, Plus } from 'lucide-react';
import { Question, QuestionType } from '@/types';
import { useSurveyStore } from '@/store/useSurveyStore';

interface QuestionEditorProps {
    question: Question;
    surveyId: string;
}

export const QuestionEditor = ({ question, surveyId }: QuestionEditorProps) => {
    const { updateQuestion, deleteQuestion } = useSurveyStore();

    const handleUpdateOption = (index: number, value: string) => {
        const newOptions = [...(question.options || [])];
        newOptions[index] = value;
        updateQuestion(surveyId, question.id, { options: newOptions });
    };

    const handleAddOption = () => {
        const newOptions = [...(question.options || []), ''];
        updateQuestion(surveyId, question.id, { options: newOptions });
    };

    const handleDeleteOption = (index: number) => {
        const newOptions = (question.options || []).filter((_, i) => i !== index);
        updateQuestion(surveyId, question.id, { options: newOptions });
    };

    return (
        <Card className="mb-4">
            <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                    <div className="flex-1 space-y-3">
                        <div>
                            <Label htmlFor={`title-${question.id}`}>Question Title</Label>
                            <Input
                                id={`title-${question.id}`}
                                placeholder="Enter your question..."
                                value={question.title}
                                onChange={(e) => updateQuestion(surveyId, question.id, { title: e.target.value })}
                            />
                        </div>

                        <div>
                            <Label htmlFor={`type-${question.id}`}>Question Type</Label>
                            <Select
                                value={question.type}
                                onValueChange={(value) => updateQuestion(surveyId, question.id, { type: value as QuestionType })}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="text">Text Input</SelectItem>
                                    <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                                    <SelectItem value="rating">Rating Scale</SelectItem>
                                    <SelectItem value="yes-no">Yes/No</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteQuestion(surveyId, question.id)}
                        className="text-red-600 hover:text-red-700"
                    >
                        <Trash className="h-4 w-4" />
                    </Button>
                </div>
            </CardHeader>

            <CardContent>
                {question.type === 'multiple-choice' && (
                    <div className="space-y-2">
                        <Label>Options</Label>
                        {question.options?.map((option, index) => (
                            <div key={index} className="flex gap-2">
                                <Input
                                    placeholder={`Option ${index + 1}`}
                                    value={option}
                                    onChange={(e) => handleUpdateOption(index, e.target.value)}
                                />
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleDeleteOption(index)}
                                >
                                    <Trash className="h-4 w-4" />
                                </Button>
                            </div>
                        ))}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleAddOption}
                        >
                            <Plus className="h-4 w-4 mr-2" />
                            Add Option
                        </Button>
                    </div>
                )}

                <div className="flex items-center space-x-2 mt-4">
                    <input
                        type="checkbox"
                        id={`required-${question.id}`}
                        checked={question.required}
                        onChange={(e) => updateQuestion(surveyId, question.id, { required: e.target.checked })}
                    />
                    <Label htmlFor={`required-${question.id}`}>Required question</Label>
                </div>
            </CardContent>
        </Card>
    );
};

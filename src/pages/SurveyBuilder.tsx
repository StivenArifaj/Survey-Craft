import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Eye, Save, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useSurveyStore } from '@/store/useSurveyStore';
import { QuestionEditor } from '@/components/builder/QuestionEditor';
import { SurveyPreview } from '@/components/builder/SurveyPreview';

const SurveyBuilder = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { surveys, addQuestion, updateSurvey } = useSurveyStore();
  const { toast } = useToast();
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  // Find the survey by ID
  const survey = surveys.find(s => s.id === id);

  // Redirect if survey not found
  useEffect(() => {
    if (id && !survey) {
      toast({
        title: "Error",
        description: "Survey not found",
        variant: "destructive",
      });
      navigate('/dashboard');
    }
  }, [id, survey, navigate, toast]);

  if (!survey) return null;

  const handleAddQuestion = () => {
    addQuestion(survey.id, {
      type: 'text',
      title: '',
      required: false,
    });
  };

  const handlePublish = () => {
    if (!survey.title.trim() || survey.questions.length === 0) {
      toast({
        title: "Cannot Publish",
        description: "Please add a title and at least one question",
        variant: "destructive",
      });
      return;
    }

    updateSurvey(survey.id, { status: 'active' });
    toast({
      title: "Survey Published",
      description: "Your survey is now live and accepting responses!",
    });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => navigate('/dashboard')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-xl font-bold text-gray-900 truncate max-w-xs sm:max-w-md">
                {survey.title}
              </h1>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPreviewMode(!isPreviewMode)}
              >
                <Eye className="h-4 w-4 mr-2" />
                {isPreviewMode ? 'Edit' : 'Preview'}
              </Button>
              <Button size="sm" onClick={handlePublish}>
                <Save className="h-4 w-4 mr-2" />
                Publish
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isPreviewMode ? (
          <SurveyPreview
            title={survey.title}
            description={survey.description}
            questions={survey.questions}
          />
        ) : (
          <div className="space-y-6">
            {/* Survey Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Survey Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="survey-title">Survey Title</Label>
                  <Input
                    id="survey-title"
                    placeholder="Enter survey title..."
                    value={survey.title}
                    onChange={(e) => updateSurvey(survey.id, { title: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="survey-description">Description (Optional)</Label>
                  <Textarea
                    id="survey-description"
                    placeholder="Enter survey description..."
                    value={survey.description}
                    onChange={(e) => updateSurvey(survey.id, { description: e.target.value })}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Questions List */}
            <div className="space-y-4">
              {survey.questions.map((question) => (
                <QuestionEditor
                  key={question.id}
                  question={question}
                  surveyId={survey.id}
                />
              ))}

              <Button
                variant="outline"
                onClick={handleAddQuestion}
                className="w-full border-dashed py-8"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Question
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SurveyBuilder;

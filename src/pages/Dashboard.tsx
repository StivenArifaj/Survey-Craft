
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, BarChart3, Users, Settings, Search, Trash } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useSurveyStore } from '@/store/useSurveyStore';

const Dashboard = () => {
  const { surveys, addSurvey, deleteSurvey } = useSurveyStore();
  const navigate = useNavigate();

  const handleCreateSurvey = () => {
    const newId = addSurvey({
      title: "Untitled Survey",
      description: "New survey description",
      questions: []
    });
    navigate(`/builder/${newId}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleEdit = (id: string) => {
    navigate(`/builder/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Survey Builder</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="ghost" size="sm">
                Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Surveys</p>
                  <p className="text-2xl font-bold text-gray-900">{surveys.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Responses</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {surveys.reduce((acc, curr) => acc + curr.responses, 0)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active Surveys</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {surveys.filter(s => s.status === 'active').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search surveys..."
                className="pl-10"
              />
            </div>
          </div>
          <Button onClick={handleCreateSurvey}>
            <Plus className="h-4 w-4 mr-2" />
            Create Survey
          </Button>
        </div>

        {/* Surveys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {surveys.map((survey) => (
            <Card key={survey.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleEdit(survey.id)}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg truncate pr-2">{survey.title}</CardTitle>
                  <Badge className={getStatusColor(survey.status)}>
                    {survey.status}
                  </Badge>
                </div>
                <CardDescription className="text-sm h-10 overflow-hidden text-ellipsis">
                  {survey.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Responses:</span>
                    <span className="font-medium">{survey.responses}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Created:</span>
                    <span>{survey.createdAt}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Modified:</span>
                    <span>{survey.updatedAt}</span>
                  </div>
                </div>

                <div className="flex gap-2 mt-4" onClick={(e) => e.stopPropagation()}>
                  <Button size="sm" variant="outline" className="flex-1" onClick={() => handleEdit(survey.id)}>
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <BarChart3 className="h-4 w-4 mr-1" />
                    Results
                  </Button>
                  <Button size="sm" variant="destructive" className="px-2" onClick={() => deleteSurvey(survey.id)}>
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {surveys.length === 0 && (
            <div className="col-span-full text-center py-12 bg-white rounded-lg border border-dashed border-gray-300">
              <div className="mx-auto h-12 w-12 text-gray-400">
                <Plus className="h-12 w-12" />
              </div>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">No surveys</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by creating a new survey.</p>
              <div className="mt-6">
                <Button onClick={handleCreateSurvey}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Survey
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

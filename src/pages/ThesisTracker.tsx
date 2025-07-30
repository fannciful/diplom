import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { MessageSquare, Calendar, Download, CheckCircle, Clock, FileText, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const chapters = [
  { id: 1, key: 'intro', progress: 100, status: 'completed' },
  { id: 2, key: 'theory', progress: 85, status: 'review' },
  { id: 3, key: 'design', progress: 50, status: 'inProgress' },
  { id: 4, key: 'implementation', progress: 30, status: 'inProgress' },
  { id: 5, key: 'conclusion', progress: 20, status: 'inProgress' },
  { id: 6, key: 'appendix', progress: 0, status: 'pending' },
  { id: 7, key: 'sources', progress: 75, status: 'review' },
  { id: 8, key: 'abstract', progress: 10, status: 'inProgress' },
  { id: 9, key: 'cover', progress: 100, status: 'completed' },
  { id: 10, key: 'content', progress: 100, status: 'completed' }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="w-4 h-4 text-green-500" />;
    case 'review':
      return <Clock className="w-4 h-4 text-yellow-500" />;
    case 'inProgress':
      return <FileText className="w-4 h-4 text-blue-500" />;
    default:
      return <AlertCircle className="w-4 h-4 text-gray-400" />;
  }
};

const ThesisPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background flex">
      <div className="hidden md:block sticky top-0 h-screen">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col h-screen">
        <div className="sticky top-0 z-10">
          <Header />
        </div>

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-6xl mx-auto py-6 px-4 space-y-6 pb-20">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">
                  {t('thesis.cardTitle')}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground mt-1">
                  {t('thesis.supervisor')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">{t('thesis.startDate')}:</span> 01.09.2024
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">{t('thesis.deadline')}:</span> 15.01.2025
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">65%</div>
                    <p className="text-sm text-gray-500">{t('thesis.progress')}</p>
                  </div>
                </div>
                <Progress value={65} className="h-2" />
                <div className="flex gap-3 flex-wrap">
                  <Button>
                    <MessageSquare className="w-4 h-4 mr-2" />
                    {t('index.chatWithSupervisor')}
                  </Button>
                  <Button variant="outline">
                    <Calendar className="w-4 h-4 mr-2" />
                    {t('index.planner')}
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    {t('thesis.export')}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('index.projectProgress')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {chapters.map((chapter) => (
                  <div key={chapter.id} className="border-b pb-4 last:border-none last:pb-0">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(chapter.status)}
                        <div>
                          <p className="font-medium text-gray-900">
                            {t(`thesis.chapters.${chapter.key}`)}
                          </p>
                          <p className="text-sm text-gray-600">
                            {t(`thesis.chapterDescriptions.${chapter.key}`)}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{chapter.progress}%</span>
                    </div>
                    <Progress value={chapter.progress} className="h-2 mt-2" />
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline">
                        <FileText className="w-4 h-4 mr-1" />
                        {t('thesis.actions.file')}
                      </Button>
                      {chapter.status === 'inProgress' && (
                        <Button size="sm">
                          {t('thesis.actions.sendForReview')}
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ThesisPage;

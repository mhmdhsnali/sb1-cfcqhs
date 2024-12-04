import React from 'react';
import { Trophy, Target, Users } from 'lucide-react';

const participants = [
  { name: 'أحمد م.', progress: 85, weight: '- ١٢ كجم' },
  { name: 'سارة ك.', progress: 72, weight: '- ٨ كجم' },
  { name: 'محمد ر.', progress: 65, weight: '- ٧ كجم' },
];

export default function Challenge() {
  return (
    <div className="bg-gradient-to-bl from-emerald-500 to-emerald-700 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">تحدي المجتمع</h2>
          <p className="mt-4 text-lg text-emerald-100">
            انضم إلى تحدي خسارة الوزن واربح جوائز رائعة
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-lg">
            <Trophy className="mb-4 h-8 w-8" />
            <h3 className="mb-2 text-xl font-bold">جوائز شهرية</h3>
            <p className="text-emerald-100">
              اربح حتى ٣ أشهر من الوجبات المجانية وجلسات تدريب حصرية
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-lg">
            <Target className="mb-4 h-8 w-8" />
            <h3 className="mb-2 text-xl font-bold">تتبع تقدمك</h3>
            <p className="text-emerald-100">
              حدد أهدافك، سجل رحلتك، واحتفل بإنجازاتك مع المجتمع
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-lg">
            <Users className="mb-4 h-8 w-8" />
            <h3 className="mb-2 text-xl font-bold">دعم المجتمع</h3>
            <p className="text-emerald-100">
              تواصل مع الآخرين، شارك النصائح، وحافظ على حماسك
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-bold">المتصدرون حالياً</h3>
          <div className="space-y-6">
            {participants.map((participant, index) => (
              <div
                key={participant.name}
                className="rounded-lg bg-white/10 p-4 backdrop-blur-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full ${
                        index === 0
                          ? 'bg-yellow-400'
                          : index === 1
                          ? 'bg-gray-300'
                          : 'bg-orange-400'
                      } text-emerald-800`}
                    >
                      {index + 1}
                    </div>
                    <span className="font-semibold">{participant.name}</span>
                  </div>
                  <div className="text-left">
                    <span className="font-bold">{participant.weight}</span>
                  </div>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full bg-white transition-all"
                    style={{ width: `${participant.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Utensils, Beef, ChefHat, Cookie } from 'lucide-react';

const packages = [
  {
    title: 'الباقة الكاملة',
    description: 'تشكيلة متكاملة من وجبات الدجاج واللحم والمأكولات البحرية',
    icon: Utensils,
    price: '299',
    calories: '600-800',
    features: [
      'جميع أنواع اللحوم',
      'مأكولات بحرية فاخرة',
      'حصص مخصصة',
      'دعم من أخصائي تغذية'
    ]
  },
  {
    title: 'باقة الدجاج واللحم',
    description: 'مزيج مثالي من وجبات الدجاج واللحم',
    icon: Beef,
    price: '249',
    calories: '500-700',
    features: [
      'لحوم مختارة',
      'حصص مخصصة',
      'قائمة متجددة أسبوعياً',
      'دعم من أخصائي تغذية'
    ]
  },
  {
    title: 'باقة الدجاج',
    description: 'خطة وجبات متخصصة بالدجاج',
    icon: ChefHat,
    price: '199',
    calories: '400-600',
    features: [
      'قطع دجاج فاخرة',
      'وصفات متنوعة',
      'حصص مخصصة',
      'دعم أساسي'
    ]
  },
  {
    title: 'إضافة الوجبات الخفيفة',
    description: 'وجبات خفيفة وحلويات صحية',
    icon: Cookie,
    price: '99',
    calories: '150-300',
    features: [
      'حلويات صحية',
      'سلطات طازجة',
      'وجبات خفيفة بالبروتين',
      'تجديد أسبوعي'
    ]
  }
];

export default function Packages() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            اختر باقتك المثالية
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            خطط وجبات مرنة مصممة لتناسب نمط حياتك وأهدافك
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="group rounded-2xl bg-white p-8 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="mb-6 inline-block rounded-full bg-emerald-100 p-4 text-emerald-600">
                <pkg.icon size={24} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">{pkg.title}</h3>
              <p className="mb-4 text-gray-600">{pkg.description}</p>
              <div className="mb-4 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                  <span className="text-gray-600"> ر.س/شهرياً</span>
                </p>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-800">
                  {pkg.calories} سعرة
                </span>
              </div>
              <ul className="mb-8 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <svg
                      className="ml-2 h-5 w-5 text-emerald-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full rounded-full bg-emerald-500 py-3 font-semibold text-white transition hover:bg-emerald-600">
                اشترك الآن
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
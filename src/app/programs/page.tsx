import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Baby, Users, Shield, Stethoscope, Pill, Activity, Eye } from 'lucide-react';

const programs = [
  {
    icon: Heart,
    title: 'Cardiac Care Program',
    description: 'Comprehensive heart health services including preventive care, diagnostics, and treatment for cardiovascular conditions.',
    features: ['ECG & Echocardiography', 'Cardiac Rehabilitation', 'Heart Disease Prevention', '24/7 Emergency Cardiac Care'],
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    icon: Baby,
    title: 'Maternal & Child Health',
    description: 'Complete care for mothers and children from pregnancy through childhood, ensuring healthy development at every stage.',
    features: ['Prenatal Care', 'Delivery Services', 'Pediatric Care', 'Vaccination Programs'],
    image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    icon: Users,
    title: 'Community Health Outreach',
    description: 'Bringing healthcare services directly to communities through mobile clinics and health education programs.',
    features: ['Mobile Clinics', 'Health Education', 'Preventive Screenings', 'Community Partnerships'],
    image: 'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    icon: Shield,
    title: 'Preventive Care Program',
    description: 'Proactive healthcare approach focusing on disease prevention and early detection through regular screenings.',
    features: ['Annual Health Checkups', 'Cancer Screenings', 'Chronic Disease Management', 'Health Risk Assessments'],
    image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    icon: Stethoscope,
    title: 'Emergency Medicine',
    description: '24/7 emergency medical services with rapid response teams and state-of-the-art emergency facilities.',
    features: ['24/7 Emergency Room', 'Trauma Care', 'Ambulance Services', 'Critical Care Unit'],
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    icon: Pill,
    title: 'Pharmacy Services',
    description: 'Full-service pharmacy with medication management, counseling, and specialized pharmaceutical care.',
    features: ['Prescription Services', 'Medication Counseling', 'Drug Interaction Checks', 'Specialty Medications'],
    image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    icon: Activity,
    title: 'Wellness & Rehabilitation',
    description: 'Comprehensive rehabilitation services and wellness programs to help patients recover and maintain optimal health.',
    features: ['Physical Therapy', 'Occupational Therapy', 'Wellness Coaching', 'Fitness Programs'],
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    icon: Eye,
    title: 'Specialized Clinics',
    description: 'Expert care in various medical specialties with dedicated clinics for focused treatment approaches.',
    features: ['Ophthalmology', 'Dermatology', 'Orthopedics', 'Mental Health Services'],
    image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen">
      <div className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Healthcare <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Programs</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive medical programs designed to meet the diverse healthcare needs of our community 
            with excellence, compassion, and innovation.
          </p>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-slate-900" />
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900">{program.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-slate-900 transition-colors"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need More Information About Our Programs?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our healthcare specialists are ready to help you choose the right program for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-slate-900 font-semibold px-8 py-4 text-lg rounded-lg"
            >
              Schedule Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg rounded-lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Heart, Award, Globe, TrendingUp, Shield, Baby, Stethoscope } from 'lucide-react';

const impactStats = [
  {
    icon: Users,
    number: '150,000+',
    label: 'Lives Touched',
    description: 'Patients served across all our programs',
  },
  {
    icon: Heart,
    number: '25,000+',
    label: 'Successful Surgeries',
    description: 'Life-saving procedures performed',
  },
  {
    icon: Baby,
    number: '8,500+',
    label: 'Babies Delivered',
    description: 'Safe deliveries in our maternity ward',
  },
  {
    icon: Shield,
    number: '95%',
    label: 'Patient Satisfaction',
    description: 'Consistently high satisfaction ratings',
  },
  {
    icon: Globe,
    number: '12',
    label: 'Community Programs',
    description: 'Active outreach initiatives',
  },
  {
    icon: Award,
    number: '50+',
    label: 'Healthcare Awards',
    description: 'Recognition for excellence',
  },
];

const stories = [
  {
    title: 'Transforming Maternal Health in Rural Communities',
    description: 'Our mobile maternal health program has reduced infant mortality rates by 40% in remote areas of Rwanda through regular prenatal care and safe delivery services.',
    image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    impact: '2,500 mothers served',
  },
  {
    title: 'Emergency Response During COVID-19',
    description: 'CarePoint Clinic played a crucial role during the pandemic, establishing testing centers, providing vaccinations, and treating over 5,000 COVID-19 patients.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    impact: '15,000 vaccines administered',
  },
  {
    title: 'Cardiac Care Excellence Program',
    description: 'Our specialized cardiac unit has successfully performed complex heart surgeries, saving lives and improving quality of life for patients with heart conditions.',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    impact: '1,200 cardiac procedures',
  },
];

const partnerships = [
  {
    name: 'Ministry of Health Rwanda',
    description: 'Collaborating on national health initiatives and policy development',
    logo: '🏛️',
  },
  {
    name: 'World Health Organization',
    description: 'Supporting global health programs and best practices',
    logo: '🌍',
  },
  {
    name: 'Partners in Health',
    description: 'Joint efforts in community health and capacity building',
    logo: '🤝',
  },
  {
    name: 'UNICEF Rwanda',
    description: 'Child health and nutrition programs',
    logo: '👶',
  },
];

export default function Impact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Impact</span> on Healthcare
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            For over 25 years, CarePoint Clinic has been transforming lives and strengthening 
            communities through exceptional healthcare delivery and innovative programs.
          </p>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Measuring Our Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These numbers represent real lives touched, communities strengthened, and health outcomes improved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-slate-900" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-slate-900 mb-2">
                      {stat.number}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-yellow-600 mb-2">
                      {stat.label}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{stat.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories of how CarePoint Clinic has made a difference in the lives of individuals and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {story.impact}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">{story.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Partnerships */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Strategic Partnerships</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Collaborating with leading organizations to amplify our impact and reach more communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((partner, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{partner.logo}</div>
                  <CardTitle className="text-lg text-slate-900">{partner.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Future Goals */}
      <div className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Looking Forward</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our commitment to improving healthcare continues to drive us toward ambitious goals 
              for the next decade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expand Access</h3>
              <p className="text-gray-300">Reach 300,000+ patients by 2030 through expanded facilities and mobile clinics</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-8 w-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Advanced Technology</h3>
              <p className="text-gray-300">Integrate AI and telemedicine to enhance diagnostic capabilities and remote care</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Regional Leadership</h3>
              <p className="text-gray-300">Become the leading healthcare provider in East Africa through excellence and innovation</p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-slate-900 font-semibold px-8 py-4 text-lg rounded-lg"
            >
              Join Our Mission
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Heart, Users, Award, Shield, Clock, Stethoscope } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'We treat every patient with empathy, respect, and genuine concern for their wellbeing.',
  },
  {
    icon: Shield,
    title: 'Excellence in Medicine',
    description: 'Our commitment to the highest standards of medical practice and continuous improvement.',
  },
  {
    icon: Users,
    title: 'Patient-Centered',
    description: 'Every decision we make is guided by what is best for our patients and their families.',
  },
  {
    icon: Award,
    title: 'Professional Integrity',
    description: 'We maintain the highest ethical standards in all our medical and business practices.',
  },
];

const team = [
  {
    name: 'Dr. Sarah Mukamana',
    role: 'Chief Medical Officer',
    specialty: 'Internal Medicine',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    name: 'Dr. Jean Baptiste Nzeyimana',
    role: 'Head of Emergency',
    specialty: 'Emergency Medicine',
    image: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    name: 'Dr. Grace Uwimana',
    role: 'Pediatric Specialist',
    specialty: 'Pediatrics',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    name: 'Dr. Patrick Habimana',
    role: 'Senior Surgeon',
    specialty: 'General Surgery',
    image: 'https://images.pexels.com/photos/6129020/pexels-photo-6129020.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">CarePoint Clinic</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            For over 25 years, we have been Rwanda's trusted healthcare partner, 
            providing exceptional medical services with compassion and excellence.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To provide accessible, high-quality healthcare services that improve the health and 
                wellbeing of our communities throughout Rwanda. We are committed to delivering 
                compassionate care while advancing medical excellence through innovation and 
                continuous learning.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <Stethoscope className="h-6 w-6 text-slate-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Excellence in Healthcare</h3>
                  <p className="text-gray-600">Committed to the highest standards of medical care</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Medical team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape our commitment to exceptional healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-4 group-hover:shadow-lg transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated healthcare professionals bring years of experience and unwavering commitment to patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-yellow-600 font-medium mb-1">{member.role}</p>
                <p className="text-gray-600">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Excellence in Healthcare?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who trust CarePoint Clinic for their healthcare needs.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-slate-900 font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book Your Appointment Today
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea'
import Link from "next/link";
import { Phone, Mail,AlertTriangle, MapPin, Clock, Stethoscope, Pill } from 'lucide-react';

const locations = [
  {
    name: 'CarePoint Clinic - Kigali City Center',
    type: 'Main Hospital',
    address: 'KN 4 Ave, Kigali City Center, Nyarugenge District',
    phone: '+250 788 123 456',
    email: 'kigali@carepoint.rw',
    hours: '24/7 Emergency Services',
    services: ['Emergency Care', 'Surgery', 'Maternity', 'ICU', 'Laboratory', 'Pharmacy'],
    icon: Stethoscope,
  },
  {
    name: 'CarePoint Clinic - Kimisagara',
    type: 'Community Clinic',
    address: 'KG 15 St, Kimisagara, Nyarugenge District',
    phone: '+250 788 123 457',
    email: 'kimisagara@carepoint.rw',
    hours: 'Mon-Fri: 7AM-8PM, Sat-Sun: 8AM-6PM',
    services: ['General Medicine', 'Pediatrics', 'Pharmacy', 'Laboratory', 'Vaccination'],
    icon: Stethoscope,
  },
  {
    name: 'CarePoint Clinic - Remera',
    type: 'Specialized Center',
    address: 'KG 7 Ave, Remera, Gasabo District',
    phone: '+250 788 123 458',
    email: 'remera@carepoint.rw',
    hours: 'Mon-Fri: 8AM-6PM, Sat: 8AM-2PM',
    services: ['Cardiology', 'Orthopedics', 'Dermatology', 'Ophthalmology', 'Pharmacy'],
    icon: Stethoscope,
  },
  {
    name: 'CarePoint Clinic - Kicukiro',
    type: 'Family Health Center',
    address: 'KK 19 Ave, Kicukiro District',
    phone: '+250 788 123 459',
    email: 'kicukiro@carepoint.rw',
    hours: 'Mon-Fri: 7AM-7PM, Sat-Sun: 8AM-5PM',
    services: ['Family Medicine', 'Women\'s Health', 'Child Care', 'Pharmacy', 'Dental'],
    icon: Stethoscope,
  },
  {
    name: 'CarePoint Clinic - Nyamirambo',
    type: 'Community Clinic',
    address: 'Nyamirambo, Nyarugenge District',
    phone: '+250 788 123 460',
    email: 'nyamirambo@carepoint.rw',
    hours: 'Mon-Fri: 7AM-8PM, Sat-Sun: 8AM-6PM',
    services: ['General Medicine', 'Maternal Health', 'Pharmacy', 'Laboratory'],
    icon: Stethoscope,
  },
  {
    name: 'CarePoint Clinic - Gisozi',
    type: 'Outpatient Center',
    address: 'Gisozi, Gasabo District',
    phone: '+250 788 123 461',
    email: 'gisozi@carepoint.rw',
    hours: 'Mon-Fri: 8AM-6PM, Sat: 8AM-2PM',
    services: ['Outpatient Care', 'Chronic Disease Management', 'Pharmacy', 'Health Screenings'],
    icon: Stethoscope,
  },
];

const pharmacies = [
  {
    name: 'CarePoint Pharmacy - City Plaza',
    address: 'City Plaza, KN 78 St, Kigali',
    phone: '+250 788 123 470',
    hours: 'Mon-Sun: 7AM-10PM',
    services: ['Prescription Medications', 'Over-the-counter drugs', 'Health consultations', 'Medical supplies'],
    icon: Pill,
  },
  {
    name: 'CarePoint Pharmacy - Kimironko',
    address: 'Kimironko Market, Gasabo District',
    phone: '+250 788 123 471',
    hours: 'Mon-Sun: 8AM-9PM',
    services: ['Prescription Medications', 'Vitamins & Supplements', 'First Aid supplies', 'Baby care products'],
    icon: Pill,
  },
  {
    name: 'CarePoint Pharmacy - Nyabugogo',
    address: 'Nyabugogo Commercial Center',
    phone: '+250 788 123 472',
    hours: 'Mon-Sun: 7AM-9PM',
    services: ['Prescription Medications', 'Medical devices', 'Health screenings', 'Vaccination services'],
    icon: Pill,
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      <div className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're here to help you with all your healthcare needs. Find our locations throughout Kigali 
            or contact us directly for appointments and inquiries.
          </p>
        </div>
      </div>

      {/* Contact Form & Quick Info */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <Input placeholder="+250 788 123 456" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input placeholder="How can we help you?" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea 
                    placeholder="Please describe your inquiry or how we can assist you..."
                    rows={5}
                  />
                </div>
                
                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-slate-900 font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Quick Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Quick Contact</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Emergency Hotline</h3>
                    <p className="text-gray-600">+250 788 123 456</p>
                    <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">General Inquiries</h3>
                    <p className="text-gray-600">info@carepoint.rw</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Main Hospital</h3>
                    <p className="text-gray-600">KN 4 Ave, Kigali City Center</p>
                    <p className="text-sm text-gray-500">Nyarugenge District, Kigali</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Operating Hours</h3>
                    <p className="text-gray-600">24/7 Emergency Services</p>
                    <p className="text-sm text-gray-500">Regular clinics: Mon-Fri 7AM-8PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clinic Locations */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Clinic Locations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              CarePoint Clinic operates multiple facilities across Kigali to serve you better. 
              Find the location most convenient for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => {
              const IconComponent = location.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-slate-900" />
                      </div>
                      <span className="text-sm font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">
                        {location.type}
                      </span>
                    </div>
                    <CardTitle className="text-lg text-slate-900">{location.name}</CardTitle>
                    <CardDescription className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span>{location.address}</span>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{location.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{location.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{location.hours}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">Services Available:</h4>
                      <div className="flex flex-wrap gap-1">
                        {location.services.map((service, serviceIndex) => (
                          <span 
                            key={serviceIndex}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-slate-900"
                    >
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pharmacy Locations */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">CarePoint Pharmacies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our pharmacies are strategically located throughout Kigali for easy access to medications and health products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pharmacies.map((pharmacy, index) => {
              const IconComponent = pharmacy.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-slate-900" />
                      </div>
                      <span className="text-sm font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">
                        Pharmacy
                      </span>
                    </div>
                    <CardTitle className="text-lg text-slate-900">{pharmacy.name}</CardTitle>
                    <CardDescription className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span>{pharmacy.address}</span>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{pharmacy.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{pharmacy.hours}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">Services Available:</h4>
                      <div className="space-y-1">
                        {pharmacy.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-slate-900"
                    >
                      Visit Pharmacy
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
{/* Emergency Contact */}
<section aria-labelledby="emergency-title" className="bg-slate-900 py-16">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
      <AlertTriangle className="h-4 w-4" aria-hidden="true" />
      24/7 Emergency Support
    </div>

    <h2 id="emergency-title" className="text-2xl md:text-3xl font-bold text-white">
      Medical Emergency?
    </h2>
    <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-gray-300">
      For life-threatening situations, call our emergency hotline immediately or go to our main hospital.
    </p>

    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
      {/* Click-to-call */}
      <Button
        asChild
        size="lg"
        className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold"
        aria-label="Call emergency hotline"
      >
        <a href="tel:+250788123456">
          <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
          Emergency: +250 788 123 456
        </a>
      </Button>

      {/* White button with black text */}
      <Button
        asChild
        size="lg"
        className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 hover:text-black border border-white"
        aria-label="Find nearest location"
      >
        <Link href="/contact">
          <MapPin className="mr-2 h-5 w-5 text-black" aria-hidden="true" />
          Find Nearest Location
        </Link>
      </Button>
    </div>

    <p className="mt-4 text-xs text-white/60">
      If you’re in immediate danger, contact local emergency services first.
    </p>
  </div>
</section>


      <Footer />
    </div>
  );
}
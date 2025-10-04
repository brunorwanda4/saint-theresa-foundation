export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-primary mb-6 text-4xl font-bold">Privacy Policy</h1>
        <p className="mb-6 text-gray-700">
          Sainte Thérèse Foundation values your privacy. This policy outlines
          how we collect, use, and protect your information.
        </p>

        <h2 className="mt-8 mb-2 text-2xl font-semibold text-gray-800">
          Information We Collect
        </h2>
        <ul className="list-inside list-disc text-gray-600">
          <li>Personal information you provide (name, email, donation data)</li>
          <li>Non-personal data such as browser type and usage statistics</li>
        </ul>

        <h2 className="mt-8 mb-2 text-2xl font-semibold text-gray-800">
          How We Use Information
        </h2>
        <p className="text-gray-600">
          We use your information to communicate updates, process donations, and
          improve our website. Your data will not be shared with third parties
          without your consent.
        </p>

        <h2 className="mt-8 mb-2 text-2xl font-semibold text-gray-800">
          Security
        </h2>
        <p className="text-gray-600">
          We employ appropriate technical and organizational measures to protect
          personal data against unauthorized access or misuse.
        </p>

        <h2 className="mt-8 mb-2 text-2xl font-semibold text-gray-800">
          Your Rights
        </h2>
        <p className="text-gray-600">
          You may request to access, correct, or delete your data at any time by
          contacting us at info@sainte-therese.org.
        </p>

        <p className="mt-10 text-gray-600">Last updated: October 2025</p>
      </div>
    </div>
  );
}

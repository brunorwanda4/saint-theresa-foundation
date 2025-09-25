 const locations = [
    {
      id: "hq",
      name: "Kigali Operations Hub (HQ)",
      lat: -1.9440,
      lng: 30.0610,
      type: "base" as const,
      description: "Central coordination point for mobile clinics and programs.",
    },
    {
      id: "pharmacy-kimironko",
      name: "Community Pharmacy — Kimironko (Planned)",
      lat: -1.9350,
      lng: 30.1030,
      type: "pharmacy" as const,
      description: "Affordable, essential medicines for nearby communities.",
    },
    {
      id: "pharmacy-nyamirambo",
      name: "Community Pharmacy — Nyamirambo (Planned)",
      lat: -1.9810,
      lng: 30.0440,
      type: "pharmacy" as const,
    },
    {
      id: "mobile-nyarutarama",
      name: "Mobile Clinic Unit — Nyarutarama",
      lat: -1.9300,
      lng: 30.0970,
      type: "mobile" as const,
      description: "Rotational outreach to hard-to-reach households.",
    },
    {
      id: "mobile-remera",
      name: "Mobile Clinic Unit — Remera",
      lat: -1.9620,
      lng: 30.1160,
      type: "mobile" as const,
    },
    {
      id: "office-kicukiro",
      name: "Program Office — Kicukiro",
      lat: -1.9890,
      lng: 30.1000,
      type: "office" as const,
    },
  ];

  export default locations;
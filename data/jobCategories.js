const catOptions = [
    { value: "Construction Management", label: "Construction Management" },
    { value: "Architecture", label: "Architecture" },
    { value: "Civil Engineering", label: "Civil Engineering" },
    { value: "Project Planning", label: "Project Planning" },
    { value: "Surveying", label: "Surveying" },
    { value: "Mechanical Engineering", label: "Mechanical Engineering" },
    { value: "Structural Engineering", label: "Structural Engineering" },
    { value: "Construction Technology", label: "Construction Technology" },
    { value: "Carpentry", label: "Carpentry" },
    { value: "Electrician", label: "Electrician" },
    { value: "Plumbing", label: "Plumbing" },
    { value: "Welding", label: "Welding" },
    { value: "Masonry", label: "Masonry" },
    { value: "Landscaping", label: "Landscaping" },
    { value: "Heavy Equipment Operator", label: "Heavy Equipment Operator" },
    { value: "Concrete Work", label: "Concrete Work" },
    { value: "HVAC Technician", label: "HVAC Technician" },
    { value: "Painter", label: "Painter" },
    { value: "Roofing", label: "Roofing" },
    { value: "Demolition", label: "Demolition" },
    { value: "Safety Management", label: "Safety Management" },
    { value: "Construction Laborer", label: "Construction Laborer" },
    { value: "Scaffolding", label: "Scaffolding" },
    { value: "Building Inspection", label: "Building Inspection" },
    { value: "Estimation", label: "Estimation" },
    { value: "Flooring", label: "Flooring" },
    { value: "Tiling", label: "Tiling" },
    { value: "Drywall Installation", label: "Drywall Installation" },
    { value: "Cabinet Making", label: "Cabinet Making" },
    { value: "Glazing", label: "Glazing" },
    { value: "Framing", label: "Framing" },
    { value: "Concrete Finishing", label: "Concrete Finishing" },
    { value: "Insulation", label: "Insulation" },
    { value: "Sheet Metal Work", label: "Sheet Metal Work" },
    { value: "Fire Protection", label: "Fire Protection" },
    { value: "Asphalt Paving", label: "Asphalt Paving" },
    { value: "Elevator Installation", label: "Elevator Installation" },
    { value: "Building Maintenance", label: "Building Maintenance" },
    { value: "Project Management", label: "Project Management" },
    { value: "Contract Administration", label: "Contract Administration" },
    { value: "Procurement", label: "Procurement" },
    { value: "Finance", label: "Finance" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Office Administration", label: "Office Administration" },
    { value: "Quality Assurance", label: "Quality Assurance" },
    { value: "Health and Safety", label: "Health and Safety" },
    { value: "Environmental Compliance", label: "Environmental Compliance" },
    { value: "Site Preparation", label: "Site Preparation" },
    { value: "Equipment Maintenance", label: "Equipment Maintenance" },
    { value: "Subcontracting", label: "Subcontracting" },
    { value: "Facade", label: "Facade" },
    { value: "Interior Design", label: "Interior Design" },
    { value: "Renovation", label: "Renovation" },
    { value: "Cost Control", label: "Cost Control" },
    { value: "Drilling", label: "Drilling" },
    { value: "Budgeting", label: "Budgeting" },
    { value: "Geotechnical Engineering", label: "Geotechnical Engineering" },
    { value: "Scheduling", label: "Scheduling" },
    { value: "Excavation", label: "Excavation" },
    { value: "Grading", label: "Grading" },
    { value: "Earthworks", label: "Earthworks" },
    { value: "Building Design", label: "Building Design" },
    { value: "LEED Certified", label: "LEED Certified" },
    { value: "Green Building", label: "Green Building" },
    { value: "BIM Modeling", label: "BIM Modeling" },
    { value: "CAD Design", label: "CAD Design" },
    { value: "Soil Testing", label: "Soil Testing" },
    { value: "Permitting", label: "Permitting" },
    { value: "Fencing", label: "Fencing" },
    { value: "Waterproofing", label: "Waterproofing" },
    { value: "Façade Restoration", label: "Façade Restoration" },
    { value: "Acoustic Engineering", label: "Acoustic Engineering" },
    { value: "Steel Framing", label: "Steel Framing" },
    { value: "Ventilation", label: "Ventilation" },
    { value: "Stonework", label: "Stonework" },
    { value: "Interior Fit-Out", label: "Interior Fit-Out" },
    { value: "Risk Assessment", label: "Risk Assessment" },
    { value: "Infrastructure Development", label: "Infrastructure Development" },
    { value: "Environmental Impact Assessment", label: "Environmental Impact Assessment" },
    { value: "Landscape Architecture", label: "Landscape Architecture" },
    { value: "Road Construction", label: "Road Construction" },
    { value: "Drafting", label: "Drafting" },
    { value: "Cladding", label: "Cladding" },
    { value: "Tunneling", label: "Tunneling" },
    { value: "Bridge Construction", label: "Bridge Construction" },
    { value: "Pile Driving", label: "Pile Driving" },
    { value: "Dewatering", label: "Dewatering" },
    { value: "Bricklaying", label: "Bricklaying" },
    { value: "Crane Operation", label: "Crane Operation" },
    { value: "Stucco Application", label: "Stucco Application" },
    { value: "Foundation Work", label: "Foundation Work" },
    { value: "Reinforced Concrete", label: "Reinforced Concrete" },
    { value: "Precast Concrete", label: "Precast Concrete" },
    { value: "Earthmoving", label: "Earthmoving" },
    { value: "Sustainable Construction", label: "Sustainable Construction" },
    { value: "Construction Law", label: "Construction Law" },
    { value: "Cost Estimating", label: "Cost Estimating" },
    { value: "Soundproofing", label: "Soundproofing" },
    { value: "Timber Work", label: "Timber Work" },
    { value: "Marine Construction", label: "Marine Construction" },
    { value: "Pipelines", label: "Pipelines" },
    { value: "Traffic Management", label: "Traffic Management" },
    { value: "Solar Installation", label: "Solar Installation" },
    { value: "Thermal Insulation", label: "Thermal Insulation" },
    { value: "Water Supply", label: "Water Supply" },
    { value: "Sanitary Systems", label: "Sanitary Systems" },
    { value: "Civil Works", label: "Civil Works" },
    { value: "Facade Engineering", label: "Facade Engineering" },
    { value: "Site Logistics", label: "Site Logistics" },
    { value: "Trim Work", label: "Trim Work" },
    { value: "Window Installation", label: "Window Installation" },
    { value: "Site Utilities", label: "Site Utilities" },
    { value: "Energy Efficiency", label: "Energy Efficiency" },
    { value: "Hand Tools", label: "Hand Tools" },
    { value: "Power Tools", label: "Power Tools" },
    { value: "Blasting", label: "Blasting" },
    { value: "Survey Equipment", label: "Survey Equipment" },
    { value: "Commercial Construction", label: "Commercial Construction" },
    { value: "Residential Construction", label: "Residential Construction" },
    { value: "Industrial Construction", label: "Industrial Construction" },
    { value: "Value Engineering", label: "Value Engineering" },
    { value: "Water Management", label: "Water Management" },
    { value: "Drainage Systems", label: "Drainage Systems" },
    { value: "Residential Design", label: "Residential Design" },
    { value: "Commercial Design", label: "Commercial Design" },
    { value: "Project Bidding", label: "Project Bidding" },
    { value: "Facilities Management", label: "Facilities Management" },
    { value: "Machinery Operation", label: "Machinery Operation" },
    { value: "Formwork", label: "Formwork" },
    { value: "Rebar", label: "Rebar" },
    { value: "Laser Scanning", label: "Laser Scanning" },
    { value: "Hardscaping", label: "Hardscaping" },
    { value: "Irrigation", label: "Irrigation" },
    { value: "Lighting Design", label: "Lighting Design" },
    { value: "Stormwater Management", label: "Stormwater Management" },
    { value: "Solar Design", label: "Solar Design" },
    { value: "Tile Setting", label: "Tile Setting" },
    { value: "Staircase Construction", label: "Staircase Construction" },
    { value: "Decorative Concrete", label: "Decorative Concrete" },
    { value: "Pavement", label: "Pavement" },
    { value: "Retaining Walls", label: "Retaining Walls" },
    { value: "Curb and Gutter", label: "Curb and Gutter" },
    { value: "Railroad Construction", label: "Railroad Construction" },
    { value: "Industrial Design", label: "Industrial Design" },
    { value: "Client Relations", label: "Client Relations" },
    { value: "Purchasing", label: "Purchasing" },
    { value: "Supply Chain Management", label: "Supply Chain Management" },
    { value: "Energy Management", label: "Energy Management" },
    { value: "Building Codes", label: "Building Codes" },
    { value: "Zoning", label: "Zoning" },
    { value: "Roof Installation", label: "Roof Installation" },
    { value: "Glass Installation", label: "Glass Installation" },
    { value: "Weatherproofing", label: "Weatherproofing" },
    { value: "Energy Modeling", label: "Energy Modeling" },
    { value: "Historic Preservation", label: "Historic Preservation" },
    { value: "Facade Inspection", label: "Facade Inspection" },
    { value: "Ground Improvement", label: "Ground Improvement" },
    { value: "Geospatial Analysis", label: "Geospatial Analysis" },
    { value: "Project Closeout", label: "Project Closeout" },
    { value: "Mold Remediation", label: "Mold Remediation" },
    { value: "Radon Mitigation", label: "Radon Mitigation" },
    { value: "Interior Finishing", label: "Interior Finishing" },
    { value: "Fenestration", label: "Fenestration" },
    { value: "Site Supervision", label: "Site Supervision" },
    { value: "Shop Drawing Review", label: "Shop Drawing Review" },
    { value: "Code Compliance", label: "Code Compliance" },
    { value: "Air Quality Monitoring", label: "Air Quality Monitoring" },
    { value: "Water Treatment", label: "Water Treatment" },
    { value: "Wastewater Management", label: "Wastewater Management" },
    { value: "Sewage Systems", label: "Sewage Systems" },
    { value: "Pest Control", label: "Pest Control" },
    { value: "Waste Management", label: "Waste Management" },
    { value: "Structural Analysis", label: "Structural Analysis" },
    { value: "Seismic Design", label: "Seismic Design" },
    { value: "Fire Alarm Systems", label: "Fire Alarm Systems" },
    { value: "Sprinkler Systems", label: "Sprinkler Systems" },
    { value: "Concrete Testing", label: "Concrete Testing" },
    { value: "Material Testing", label: "Material Testing" },
    { value: "Windows and Doors", label: "Windows and Doors" },
    { value: "Basement Construction", label: "Basement Construction" },
    { value: "Ventilation Systems", label: "Ventilation Systems" },
    { value: "Refrigeration", label: "Refrigeration" },
    { value: "Building Retrofit", label: "Building Retrofit" },
    { value: "Construction Software", label: "Construction Software" },
    { value: "Geomatics", label: "Geomatics" },
    { value: "Contract Negotiation", label: "Contract Negotiation" },
    { value: "Site Analysis", label: "Site Analysis" },
    { value: "Traffic Impact Analysis", label: "Traffic Impact Analysis" },
    { value: "Light Gauge Steel", label: "Light Gauge Steel" },
    { value: "Pool Construction", label: "Pool Construction" },
    { value: "Pond Construction", label: "Pond Construction" },
    { value: "Marina Construction", label: "Marina Construction" },
    { value: "Pre-construction Services", label: "Pre-construction Services" },
    { value: "Contract Writing", label: "Contract Writing" },
    { value: "Thermal Imaging", label: "Thermal Imaging" },
    { value: "Asbestos Abatement", label: "Asbestos Abatement" },
    { value: "Building Envelope", label: "Building Envelope" },
    { value: "Retrofitting", label: "Retrofitting" },
    { value: "Design Coordination", label: "Design Coordination" },
    { value: "Material Procurement", label: "Material Procurement" },
    { value: "Lead Abatement", label: "Lead Abatement" },
    { value: "Prefabrication", label: "Prefabrication" },
    { value: "Value Analysis", label: "Value Analysis" },
    { value: "Digital Modeling", label: "Digital Modeling" },
    { value: "Construction Sales", label: "Construction Sales" },
    { value: "Property Management", label: "Property Management" },
    { value: "Construction Financing", label: "Construction Financing" },
    { value: "Inventory Management", label: "Inventory Management" },
    { value: "Architectural Drafting", label: "Architectural Drafting" },
    { value: "Materials Management", label: "Materials Management" },
    { value: "Geothermal Systems", label: "Geothermal Systems" },
    { value: "Vibration Analysis", label: "Vibration Analysis" },
    { value: "Electrical Systems", label: "Electrical Systems" },
    { value: "HVAC Design", label: "HVAC Design" },
    { value: "Mechanical Systems", label: "Mechanical Systems" },
    { value: "Site Cleanup", label: "Site Cleanup" },
    { value: "Site Security", label: "Site Security" },
    { value: "Earthquake Retrofitting", label: "Earthquake Retrofitting" },
    { value: "Load Analysis", label: "Load Analysis" },
    { value: "Plastering", label: "Plastering" },
    { value: "Thermal Bridging", label: "Thermal Bridging" },
    { value: "Wind Engineering", label: "Wind Engineering" },
    { value: "Lighting Control Systems", label: "Lighting Control Systems" },
    { value: "Sound Control", label: "Sound Control" },
    { value: "Industrial Hygiene", label: "Industrial Hygiene" },
    { value: "Fire Suppression", label: "Fire Suppression" },
    { value: "Lumber", label: "Lumber" },
    { value: "Water Features", label: "Water Features" },
    { value: "Stonework", label: "Stonework" },
    { value: "Excavation", label: "Excavation" },
    { value: "Soil Analysis", label: "Soil Analysis" },
    { value: "Grading", label: "Grading" },
    { value: "Fencing", label: "Fencing" },
    { value: "Formwork", label: "Formwork" },
    { value: "Shoring", label: "Shoring" },
    { value: "Trenching", label: "Trenching" },
    { value: "Urban Planning", label: "Urban Planning" },
    { value: "Aquatic Facility Construction", label: "Aquatic Facility Construction" },
    { value: "Road Construction", label: "Road Construction" },
    { value: "Construction Consulting", label: "Construction Consulting" },
    { value: "Disaster Recovery", label: "Disaster Recovery" },
    { value: "Renovations", label: "Renovations" },
    { value: "Foundations", label: "Foundations" },
    { value: "Blueprint Reading", label: "Blueprint Reading" },
    { value: "Cost Control", label: "Cost Control" },
    { value: "Construction Photography", label: "Construction Photography" },
    { value: "Bidding", label: "Bidding" },
    { value: "Acoustic Engineering", label: "Acoustic Engineering" },
    { value: "Construction Graphics", label: "Construction Graphics" },
    { value: "Lean Construction", label: "Lean Construction" },
    { value: "Site Logistics", label: "Site Logistics" },
    { value: "3D Printing in Construction", label: "3D Printing in Construction" },
    { value: "BIM Coordination", label: "BIM Coordination" },
    { value: "Sustainability", label: "Sustainability" },
    { value: "Solar Installations", label: "Solar Installations" },
    { value: "Building Automation", label: "Building Automation" },
    { value: "Curtain Walls", label: "Curtain Walls" },
    { value: "Timber Construction", label: "Timber Construction" },
    { value: "Green Building", label: "Green Building" },
    { value: "Passive House", label: "Passive House" },
    { value: "LEED Certification", label: "LEED Certification" },
    { value: "Field Supervision", label: "Field Supervision" },
    { value: "Rainwater Harvesting", label: "Rainwater Harvesting" },
    { value: "Geotechnical Engineering", label: "Geotechnical Engineering" },
    { value: "Concrete Repair", label: "Concrete Repair" },
    { value: "Cost Estimation", label: "Cost Estimation" },
    { value: "Permitting", label: "Permitting" },
    { value: "Blueprint Creation", label: "Blueprint Creation" },
    { value: "Subcontracting", label: "Subcontracting" },
    { value: "HVAC Maintenance", label: "HVAC Maintenance" },
    { value: "Tendering", label: "Tendering" },
    { value: "Cladding", label: "Cladding" },
    { value: "Hand Tools", label: "Hand Tools" },
    { value: "Power Tools", label: "Power Tools" },
    { value: "Mechanical Insulation", label: "Mechanical Insulation" },
    { value: "Asphalt", label: "Asphalt" },
    { value: "Traffic Management", label: "Traffic Management" },
    { value: "Digital Construction", label: "Digital Construction" },
    { value: "Construction Analytics", label: "Construction Analytics" },
    { value: "Building Diagnostics", label: "Building Diagnostics" },
    { value: "Pipeline Construction", label: "Pipeline Construction" },
    { value: "Drainage Systems", label: "Drainage Systems" },
    { value: "Civil Works", label: "Civil Works" },
    { value: "Construction Drawings", label: "Construction Drawings" },
    { value: "Waterproofing", label: "Waterproofing" },
    { value: "Façade Engineering", label: "Façade Engineering" },
    { value: "Revit Modeling", label: "Revit Modeling" },
    { value: "CAD Drafting", label: "CAD Drafting" },
    { value: "Window Installation", label: "Window Installation" },
    { value: "Building Science", label: "Building Science" },
    { value: "Bridge Construction", label: "Bridge Construction" },
    { value: "Tunneling", label: "Tunneling" },
    { value: "Marine Construction", label: "Marine Construction" },
    { value: "Piping", label: "Piping" },
    { value: "Drafting", label: "Drafting" },
    { value: "Ventilation", label: "Ventilation" },
    { value: "Geothermal Heating", label: "Geothermal Heating" },
    { value: "Interiors", label: "Interiors" },
    { value: "Building Services", label: "Building Services" },
    { value: "Renewable Energy", label: "Renewable Energy" },
    { value: "Building Systems", label: "Building Systems" },
    { value: "Facade Systems", label: "Facade Systems" },
    { value: "Energy Auditing", label: "Energy Auditing" },
    { value: "Construction Equipment", label: "Construction Equipment" },
    { value: "Subgrade Preparation", label: "Subgrade Preparation" },
    { value: "Masonry Restoration", label: "Masonry Restoration" },
    { value: "Construction Logistics", label: "Construction Logistics" },
    { value: "Budgeting", label: "Budgeting" },
    { value: "Value Engineering", label: "Value Engineering" },
    { value: "Green Roofing", label: "Green Roofing" },
    { value: "Noise Control", label: "Noise Control" },
    { value: "Foundation Repair", label: "Foundation Repair" },
    { value: "Building Restoration", label: "Building Restoration" },
    { value: "Construction Safety", label: "Construction Safety" },
    { value: "Property Development", label: "Property Development" },
    { value: "BIM Management", label: "BIM Management" },
    { value: "Design-Build", label: "Design-Build" },
    { value: "Roof Repair", label: "Roof Repair" },
    { value: "Construction Administration", label: "Construction Administration" },
    { value: "Civil Drafting", label: "Civil Drafting" },
    { value: "Mechanical Drafting", label: "Mechanical Drafting" }
  ];
  
  export default catOptions;
  
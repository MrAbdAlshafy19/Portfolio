/**
 * ====================================================================
 * YAHYA ABDALSHAFY - PORTFOLIO CONFIGURATION
 * ====================================================================
 * Centralized configuration file for the entire portfolio.
 * You can edit your personal details, skill percentages, projects,
 * screenshots, certificates, and contact links directly from this file.
 */

const PORTFOLIO_CONFIG = {
  // Personal & Professional Identity
  personal: {
    fullName: "Yahya Abdalshafy",
    firstName: "Yahya",
    primaryTitle: "Machine Learning Engineer & Data Scientist",
    secondaryTitle: "Python Development | Software Engineering | Intelligent Business Applications",
    rotatingTitles: [
      "Machine Learning Engineer",
      "Data Science Practitioner",
      "Python Developer"
    ],
    status: {
      isAvailable: true,
      text: "Available for Applied Projects & Technical Collaboration"
    },
    profileImage: "assets/images/profile/yahya-portrait.jpg", // Replace with your uploaded portrait
    profilePlaceholder: "assets/images/profile/placeholder-avatar.svg",
    cvPath: "assets/documents/Yahya_Abdalshafy_CV.pdf" // Put your CV PDF file here
  },

  // Contact Information
  contact: {
    email: "abdalshafyyahya@gmail.com",
    phone: "01507313846",
    phoneInternational: "+201507313846",
    whatsapp: "01229881826",
    whatsappLink: "https://wa.me/201229881826",
    location: "Egypt"
  },

  // Social & Professional Profiles
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/", // Add your username
      icon: "github",
      label: "GitHub Profile"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/", // Add your profile handle
      icon: "linkedin",
      label: "LinkedIn Profile"
    },
    {
      name: "Kaggle",
      url: "https://kaggle.com/", // Add your Kaggle username
      icon: "kaggle",
      label: "Kaggle Profile"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/201229881826",
      icon: "whatsapp",
      label: "Chat on WhatsApp"
    },
    {
      name: "Email",
      url: "mailto:abdalshafyyahya@gmail.com",
      icon: "mail",
      label: "Send Direct Email"
    }
  ],

  // Technical Skills Data (Editable self-assessment percentages)
  skills: {
    programming: [
      { name: "Python", score: 70, level: "Applied Proficient", tags: ["Core", "OOP", "Scripting"] },
      { name: "C++", score: 75, level: "Strong Foundation", tags: ["Algorithms", "Problem Solving"] },
      { name: "Java", score: 55, level: "Foundational", tags: ["Core Java", "OOP"] },
      { name: "Object-Oriented Programming", score: 65, level: "Practical", tags: ["Design Patterns", "Clean Code"] },
      { name: "Data Structures & Algorithms", score: 55, level: "Foundational", tags: ["Optimization", "Complexity"] },
      { name: "SQL", score: 60, level: "Practical", tags: ["Queries", "Relational DB"] },
      { name: "Git & GitHub", score: 65, level: "Practical", tags: ["Version Control", "Workflow"] },
      { name: "REST API Fundamentals", score: 50, level: "Foundational", tags: ["Endpoints", "JSON"] },
      { name: "Software Development Fundamentals", score: 65, level: "Practical", tags: ["Architecture", "Modularity"] }
    ],

    dataScience: [
      { name: "NumPy", score: 70, level: "Applied", tags: ["Array Math", "Vectorization"] },
      { name: "Pandas", score: 75, level: "Applied Proficient", tags: ["DataFrames", "Wrangling"] },
      { name: "Data Cleaning", score: 75, level: "Applied Proficient", tags: ["Handling Nulls", "Formatting"] },
      { name: "Data Preprocessing", score: 75, level: "Applied Proficient", tags: ["Scaling", "Encoding"] },
      { name: "Exploratory Data Analysis", score: 70, level: "Applied", tags: ["Insight Discovery", "Distributions"] },
      { name: "Data Visualization", score: 65, level: "Practical", tags: ["Charts", "Storytelling"] },
      { name: "Statistical Analysis", score: 55, level: "Foundational", tags: ["Hypothesis", "Metrics"] },
      { name: "Feature Engineering", score: 65, level: "Practical", tags: ["Creation", "Selection"] },
      { name: "Data Wrangling", score: 65, level: "Practical", tags: ["Pivoting", "Transformation"] },
      { name: "Matplotlib", score: 65, level: "Practical", tags: ["Custom Plots", "Subplots"] },
      { name: "Seaborn", score: 60, level: "Practical", tags: ["Statistical Plots", "Heatmaps"] }
    ],

    machineLearning: [
      { name: "Scikit-learn", score: 70, level: "Applied", tags: ["Modeling", "Pipelines"] },
      { name: "Supervised Learning", score: 70, level: "Applied", tags: ["Classification", "Regression"] },
      { name: "Unsupervised Learning", score: 60, level: "Practical", tags: ["Clustering", "Patterns"] },
      { name: "Logistic Regression", score: 70, level: "Applied", tags: ["Binary", "Multi-class"] },
      { name: "Linear Regression", score: 65, level: "Practical", tags: ["Trends", "Forecasting"] },
      { name: "Decision Trees", score: 70, level: "Applied", tags: ["Interpretability", "Splits"] },
      { name: "Random Forest", score: 75, level: "Applied Proficient", tags: ["Ensemble", "Feature Importance"] },
      { name: "XGBoost", score: 60, level: "Practical", tags: ["Gradient Boosting", "Performance"] },
      { name: "K-Means Clustering", score: 60, level: "Practical", tags: ["Segmentation", "Centroids"] },
      { name: "Classification", score: 70, level: "Applied", tags: ["Precision", "Recall", "ROC-AUC"] },
      { name: "Model Evaluation", score: 65, level: "Practical", tags: ["Confusion Matrix", "F1 Score"] },
      { name: "Cross-Validation", score: 50, level: "Foundational", tags: ["K-Fold", "Overfitting Check"] },
      { name: "Predictive Modeling", score: 65, level: "Practical", tags: ["Business ML", "Pipelines"] },
      { name: "Machine Learning Pipelines", score: 50, level: "Foundational", tags: ["Transformers", "ColumnTransformer"] }
    ],

    toolsAndDeployment: [
      { name: "Jupyter Notebook", score: 75, level: "Applied Proficient", tags: ["EDA", "Prototyping"] },
      { name: "Streamlit", score: 75, level: "Applied Proficient", tags: ["Interactive UI", "Web Apps"] },
      { name: "PyCharm", score: 70, level: "Applied", tags: ["Python IDE", "Debugging"] },
      { name: "VS Code", score: 65, level: "Practical", tags: ["Extensions", "Git Integration"] },
      { name: "Joblib", score: 60, level: "Practical", tags: ["Model Persistence", "Serialization"] },
      { name: "Python Model Integration", score: 65, level: "Practical", tags: ["Inference", "App Hook"] },
      { name: "ML Application Deployment", score: 65, level: "Practical", tags: ["Streamlit Cloud", "Cloud Hosts"] },
      { name: "Data Visualization Dashboards", score: 70, level: "Applied", tags: ["Interactive Filters", "Metrics"] }
    ]
  },

  // Featured Projects Showcase
  projects: [
    {
      id: "banking-fraud-detection",
      title: "Banking Fraud Detection & Customer Intelligence Platform",
      category: "Machine Learning | FinTech | Data Science",
      badge: "Production MVP",
      status: "Live & Deployed",
      statusType: "success",
      shortDescription: "A practical machine learning application designed to support banking operations through high-risk fraud classification, customer risk scoring, segmentation, and intelligent product recommendations.",
      fullDescription: `A comprehensive machine learning platform built to solve real-world banking and FinTech problems. The application merges predictive fraud detection with customer intelligence, giving financial institutions actionable operational insights.

The platform provides an end-to-end user workflow: financial transaction data is preprocessed, evaluated through trained ensemble models (Random Forest & XGBoost), and displayed on an intuitive Streamlit interface where analysts can test scenarios, evaluate risk tiers, and discover customer clusters.`,
      components: [
        {
          title: "1. Fraud Detection Engine",
          details: "Transaction fraud classification powered by optimized Random Forest and XGBoost algorithms. Includes automated preprocessing, skew handling, feature preparation, and an interactive prediction interface for immediate transaction risk scoring."
        },
        {
          title: "2. Customer Risk Assessment",
          details: "Supervised machine learning classification categorizing banking accounts into Low, Medium, and High risk tiers. Backed by rigorous model evaluation metrics and probability scoring."
        },
        {
          title: "3. Customer Segmentation",
          details: "Unsupervised K-Means clustering algorithm that segments accounts based on transactional behavior, financial balance profiles, and activity volume to generate actionable customer intelligence."
        },
        {
          title: "4. Product Recommendation",
          details: "Business-oriented recommendation module providing personalized financial product suggestions aligned with each client's segment and behavioral profile."
        }
      ],
      techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Streamlit", "Joblib"],
      liveDemoUrl: "https://bankingfrauddetectionmvpdemo.streamlit.app/",
      githubUrl: null, // Add your repo link when available
      thumbnail: "assets/images/projects/banking-fraud-thumb.svg",
      screenshots: [
        {
          src: "assets/images/projects/banking-fraud-1.svg",
          caption: "Fraud Detection & Risk Classification Dashboard"
        },
        {
          src: "assets/images/projects/banking-fraud-2.svg",
          caption: "Customer Risk Assessment & Evaluation Metrics"
        },
        {
          src: "assets/images/projects/banking-fraud-3.svg",
          caption: "Customer Segmentation & Behavioral Clustering"
        }
      ]
    },
    {
      id: "energy-consumption-forecasting",
      title: "Energy Consumption & Demand Forecasting Platform",
      category: "Data Science | Machine Learning | Energy Analytics",
      badge: "In Development",
      status: "Under Active Development",
      statusType: "warning",
      shortDescription: "An individual data science and machine learning research project analyzing multi-zone electricity consumption patterns and developing predictive forecasting models based on environmental variables.",
      fullDescription: `An individual research and engineering project focused on multi-zone urban energy demand analysis. Built using the UCI Power Consumption of Tetouan City dataset, this project investigates how weather conditions, environmental factors, and temporal cycles impact power distribution across distinct municipal zones.

Currently advancing through exploratory analysis and feature engineering phases to construct accurate time-series and regression models for electricity demand planning.`,
      datasetInfo: {
        name: "UCI Power Consumption of Tetouan City Dataset",
        observations: "52,417 observations",
        granularity: "10-minute measurement intervals",
        zones: "3 municipal electricity distribution zones",
        features: "Temperature, Humidity, Wind Speed, General Diffuse Flows, Diffuse Flows"
      },
      scope: [
        "Data discovery and structural understanding",
        "Data cleaning and preprocessing for time-series readings",
        "Exploratory Data Analysis across seasonal and diurnal cycles",
        "Time-based feature engineering (hour, day of week, lag metrics)",
        "Electricity consumption pattern analysis per zone",
        "Demand forecasting regression model experiments",
        "Model evaluation, residual analysis, and error benchmarking",
        "Data visualization and actionable operational insights"
      ],
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
      liveDemoUrl: null,
      githubUrl: null,
      thumbnail: "assets/images/projects/energy-forecasting-thumb.svg",
      screenshots: [
        {
          src: "assets/images/projects/energy-forecasting-1.svg",
          caption: "Tetouan City Multi-Zone Energy Consumption Distribution"
        },
        {
          src: "assets/images/projects/energy-forecasting-2.svg",
          caption: "Temporal Feature Analysis & Environmental Correlation Matrix"
        }
      ]
    }
  ],

  // Professional Services
  services: [
    {
      number: "01",
      title: "Data Analysis & Insights",
      problem: "Organizations sit on complex, unformatted operational data without clear visibility into underlying patterns, operational bottlenecks, or actionable business trends.",
      approach: "Conduct systematic data cleaning, outlier handling, exploratory data analysis, and statistical hypothesis validation using Python, Pandas, and interactive visual charts.",
      deliverables: [
        "Structured & cleaned datasets",
        "Exploratory Data Analysis (EDA) notebooks",
        "Statistical findings & anomaly reports",
        "Executive data visualization charts",
        "Actionable business recommendations"
      ]
    },
    {
      number: "02",
      title: "Machine Learning Development",
      problem: "Manual decision-making processes lack predictive precision, causing elevated risks in financial transactions, customer churn, and operational estimates.",
      approach: "Build, cross-validate, and optimize supervised and unsupervised machine learning models (Random Forest, XGBoost, Logistic/Linear Regression) tailored to structured business datasets.",
      deliverables: [
        "Trained predictive classification & regression models",
        "Comprehensive model evaluation reports (ROC-AUC, F1, Confusion Matrix)",
        "Feature importance and correlation analysis",
        "Serialized model artifacts (.joblib / .pkl) ready for integration"
      ]
    },
    {
      number: "03",
      title: "Python Development & Automation",
      problem: "Repetitive manual data workflows, messy spreadsheets, and disconnected data sources waste valuable time and introduce human error.",
      approach: "Engineer clean, maintainable Python scripts and automation pipelines that ingest, parse, clean, transform, and transfer data seamlessly.",
      deliverables: [
        "Automated data extraction & transformation scripts",
        "Data pipeline workflows and scheduling utilities",
        "REST API integration and webhook handlers",
        "Modular and well-documented Python source code"
      ]
    },
    {
      number: "04",
      title: "Customer Analytics & Intelligence",
      problem: "One-size-fits-all customer strategies lead to missed revenue, elevated credit/fraud risks, and ineffective retention campaigns.",
      approach: "Leverage clustering algorithms (K-Means) and risk classification to segment customer bases into actionable personas and behavior-driven tiers.",
      deliverables: [
        "Multi-dimensional customer segmentation profiles",
        "Behavioral risk tier classification (Low / Medium / High)",
        "Data-driven product recommendation logic",
        "Customer intelligence summary dashboards"
      ]
    },
    {
      number: "05",
      title: "Machine Learning Applications",
      problem: "Valuable machine learning code often stays locked inside Jupyter notebooks where non-technical stakeholders cannot test or interact with it.",
      approach: "Package machine learning models and analytical routines into sleek, responsive web applications using Streamlit with real-time prediction inputs and dynamic charts.",
      deliverables: [
        "Interactive Streamlit web application prototypes",
        "Real-time model inference forms & user inputs",
        "Cloud-hosted accessible MVP links",
        "Deployment-ready documentation and dependency specifications"
      ]
    }
  ],

  // Certifications & Professional Training
  certifications: [
    {
      id: "java-core",
      title: "Java Core",
      issuer: "Verified Technical Training",
      category: "Software Engineering Foundation",
      completionDate: "Completed", // Editable completion date
      description: "Comprehensive foundational study in Java programming covering syntax, object-oriented principles, classes, inheritance, polymorphism, and algorithmic problem-solving.",
      topics: [
        "Core Java Syntax & Conventions",
        "Object-Oriented Programming (OOP)",
        "Classes, Methods & Inheritance",
        "Exception Handling & Basic Data Structures"
      ],
      certificateImage: "assets/images/certificates/java-core.svg"
    },
    {
      id: "itida-freelancing",
      title: "Freelancing Training",
      issuer: "Information Technology Industry Development Agency (iTida)",
      category: "Professional Development",
      completionDate: "Completed", // Editable completion date
      description: "Specialized professional program focused on digital service delivery, commercial market positioning, and international freelancing standards.",
      topics: [
        "Freelancing Fundamentals & Ethics",
        "Market Needs & Client Requirement Scoping",
        "Defining Technical Deliverables & Milestones",
        "Client Communication & Project Lifecycle Management",
        "Freelance Platform Positioning & Portfolio Readiness"
      ],
      certificateImage: "assets/images/certificates/itida-freelancing.svg"
    },
    {
      id: "nti-ai-business",
      title: "AI for Business Scholarship",
      issuer: "National Telecommunication Institute (NTI)",
      category: "Artificial Intelligence & Data Science",
      completionDate: "Completed (~90 Hours)", // Editable completion date
      description: "Intensive 90-hour technical scholarship focused on applied artificial intelligence, data science methodologies, and enterprise business applications.",
      topics: [
        "AI Foundations & Business Case Identification",
        "Python Programming for Data Science & Numerical Computing",
        "Data Analysis, Cleaning & Visualization Fundamentals",
        "Supervised Machine Learning Algorithms (Classification & Regression)",
        "Model Training, Validation & Metric Evaluation",
        "Applied ML Solutions for Real-world Business Problems"
      ],
      certificateImage: "assets/images/certificates/nti-ai-business.svg"
    }
  ]
};

// Freeze configuration in development to avoid unintentional mutations
if (typeof Object.freeze === "function") {
  Object.freeze(PORTFOLIO_CONFIG);
}


export const validationRules = {
  dogName: [
    {
      required: true,
      message: "Dog name is required",
    },
    {
      pattern: /^[a-zA-Z\s'-]+$/,
      message: "Dog name can only contain letters and spaces",
    },
    {
      min: 2,
      message: "Dog name must be at least 2 characters",
    },
  ],

  breederName: [
    {
      required: true,
      message: "Breeder name is required",
    },
    {
      min: 2,
      message: "Breeder name must be at least 2 characters",
    },
  ],

  petDateOfBirth: [
    {
      required: true,
      message: "Date of birth is required",
    },
  ],

  petGender: [
    {
      required: true,
      message: "Please select gender",
    },
  ],

  fullName: [
    {
      required: true,
      message: "Please enter your full name",
    },
    {
      pattern: /^[a-zA-Z\s'-]+$/, // Allow letters, spaces, hyphens, apostrophes
      message:
        "Full Name can only contain letters, spaces, hyphens, and apostrophes",
    },
    {
      min: 2,
      message: "Full Name must be at least 2 characters",
    },
    {
      max: 50,
      message: "Full Name cannot exceed 50 characters",
    },
  ],
  username: [
    {
      required: true,
      message: "Please enter your username",
    },
    {
      pattern: /^[a-zA-Z0-9_.-]+$/, // Allow alphanumeric, underscores, hyphens, periods
      message:
        "Username can only contain alphanumeric characters, underscores, hyphens, and periods",
    },
    {
      min: 3,
      message: "Username must be at least 3 characters",
    },
    {
      max: 30,
      message: "Username cannot exceed 30 characters",
    },
  ],
  email: [
    {
      required: true,
      message: "Please enter your email",
    },
    {
      type: "email",
      message: "Please enter a valid email address",
    },
    {
      max: 254,
      message: "Email cannot exceed 254 characters",
    },
  ],
  phone: [
    {
      required: true,
      message: "Please enter your phone number",
    },
    {
      pattern: /^\+?[0-9\s\-()]{7,19}$/,
      message: "Enter a valid phone number",
    },
    {
      validator: (_, value) => {
        if (value && value.trim() === "") {
          return Promise.reject(
            new Error("Phone number cannot contain only spaces")
          );
        }
        return Promise.resolve();
      },
    },
  ],
  password: [
    {
      required: true,
      message: "Please enter your password",
    },
    {
      min: 6,
      message: "Password must be at least 6 characters",
    },
    // Optional: Strong password policy
    {
      pattern:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message:
        "Password must include uppercase, lowercase, number, and special character",
    },
  ],
  confirmPassword: (getFieldValue) => [
    {
      required: true,
      message: "Please confirm your password",
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error("Passwords do not match"));
      },
    }),
  ],

  dateOfBirth: [
    {
      required: true,
      message: "Please select your date of birth",
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value) return Promise.resolve();
        const eighteenYearsAgo = new Date();
        eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
        if (value.toDate() > eighteenYearsAgo) {
          // Ant Design DatePicker value is a moment object
          return Promise.reject(new Error("You must be at least 18 years old"));
        }
        return Promise.resolve();
      },
    }),
  ],
  address: [
    {
      required: true,
      message: "Please enter your address",
    },
    {
      min: 5,
      message: "Address must be at least 5 characters",
    },
    {
      max: 100,
      message: "Address cannot exceed 100 characters",
    },
  ],
  zipCode: [
    {
      required: true,
      message: "Please enter your zip code",
    },
    {
      pattern: /^[0-9]{5}(?:-[0-9]{4})?$/, // Example for US zip code
      message: "Please enter a valid zip code (e.g., 12345 or 12345-6789)",
    },
  ],
  gender: [
    {
      required: true,
      message: "Please select your gender",
    },
  ],
  termsAgreement: [
    {
      validator: (_, value) =>
        value
          ? Promise.resolve()
          : Promise.reject(
              new Error("Please agree to the terms and conditions")
            ),
    },
  ],
  otp: [
    {
      required: true,
      message: "Please enter the OTP",
    },
    {
      pattern: /^[0-9]{4,6}$/, // 4 to 6 digits OTP
      message: "Please enter a valid OTP",
    },
  ],
  url: [
    {
      required: true,
      message: "Please enter a URL",
    },
    {
      type: "url",
      message: "Please enter a valid URL (e.g., https://example.com)",
    },
    {
      max: 2083,
      message: "URL cannot exceed 2083 characters",
    },
    // Add more specific patterns if needed, e.g., for social media links
  ],
};


export const getConfirmPasswordRules = (getFieldValue) => [
    {
        required: true,
        message: "Please confirm your password",
    },
    ({ getFieldValue }) => ({
        validator(_, value) {
            if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error("Passwords do not match"));
        },
    }),
];
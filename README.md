link to project -> login-signup-sigma-seven.vercel.app

# Sign-Up Form Project

This project is a React-based sign-up form with features like password strength calculation, visibility toggle for passwords, and form validation using Formik and Yup.

---

## How to Run the Project

### Prerequisites
- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager installed

### Steps to Run
1. Clone the repository:
   bash
   git clone <repository-url>
   cd <repository-directory>
   

2. Install dependencies:
   bash
   npm install
   # or
   yarn install
   

3. Start the development server:
   bash
   npm start
   # or
   yarn start
   

4. Open the application in your browser:
   
   http://localhost:3000
   

---

## Design Choices Made

1. **Formik and Yup**:
   - **Formik**: Handles form state management and submission seamlessly.
   - **Yup**: Simplifies the definition of validation rules for inputs.

2. **Password Strength Indicator**:
   - A utility function assesses password strength based on:
     - **Weak**: Less than 6 characters.
     - **Moderate**: Contains letters but lacks uppercase/numeric characters.
     - **Strong**: Includes uppercase letters and numeric characters.

3. **Password Visibility Toggle**:
   - Added an eye icon toggle to show or hide the password.
   - Dynamically switches icons based on the visibility state.

4. **User Experience**:
   - Responsive layout for compatibility across different devices.
   - Real-time validation and password strength feedback.

---

## Assumptions and Limitations

### Assumptions:
- Passwords must be **at least 6 characters** long to be valid.
- Password strength is a visual guide, not an enforced requirement.
- The form assumes only basic styling for now.

### Limitations:
- Password strength logic doesn't enforce all security standards (e.g., special characters).
- This is a frontend-only demo with no backend integration.
- Accessibility features are basic and may need improvement for full WCAG compliance.

---

## Future Enhancements

- Add backend functionality for real user registration.
- Improve password strength validation (e.g., include special character checks).
- Enhance UI with animations and advanced styling.
- Expand accessibility for users with assistive technologies.

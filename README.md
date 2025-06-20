# React Native Login Screen 📱

This is a simple React Native app built using Expo. It demonstrates how a basic login screen works, including UI design, input handling, and form validation.


# Features
- Email and Password input fields
- Show/Hide password functionality
- Login button with alert popup showing entered info
- Basic email validation
- Mock `users.json` file for backend integration
- Responsive layout for different screen sizes
- "Forgot Password?" and "Sign Up" links (non-functional for now)

# Project Structure
LoginApp/
    ─ App.js    # Main app file
    ─ components/
       ─ LoginScreen.js    # Contains login screen UI and logic
    ─ backend/
       ─ users.json       # Mock data for email/password
    ─ README.md # You're reading this!


# How It Works

1. UI Components
- The main screen is in `components/LoginScreen.js`
- It uses `TextInput`, `TouchableOpacity`, and `Alert` from React Native.
- Inputs are controlled using local state (`useState`).

2. Input Handling
- When you type in the Email and Password fields, the values are saved in the component state.
- When the Login button is clicked:
  - It checks if both fields are filled.
  - It checks if the email is in a valid format.
  - Then it shows an alert with the entered email and password.

3. Show/Hide Password
- There's a toggle button to show or hide the password while typing.

4. Backend Mock
- There’s a file `backend/users.json` that stores sample login data (just for reference).


# How to Run This Project

1. Create a Folder name LoginApp, open folder in code editor

2. Install Expo CLI (if not already)
`bash`
    npm install -g expo

3. Download Project File, project structure is given above follow that 
`bash`
    cd LoginApp   # come into LoginApp Directory 

4. Install Dependencies
`bash`    
    npm install

5. Start App
`bash`
    expo start

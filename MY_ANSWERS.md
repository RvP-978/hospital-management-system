# My Answers - Hospital Management System Assessment

> **Name:** Vismitha  
> **Date:** 29/12/2025

---

## Part 1: Bug Fixes

### Task 1.1: Filename Spelling Mistake

**What was the wrong filename?**
> middlewear 

**What should it be?**
> middleware 

**Why is correct spelling important in code?**
> correct spelling prevents import errors when other files try to use


### Task 1.2: seed.js Spelling Mistakes

**What word was misspelled?**
> avilability

**How many times did you fix it?**
> 6 times 

**What was the bug on line 64?**
> doc.firstName was not accessible in user scope. fixed by adding `firstName: doc.firstName`

---

### Task 1.3: LocalStorage Bug

**What was the difference between line 74 and line 101?**
> in line 101 JSON.stringify was missing 

**Why was one of them wrong?**
> line 101 was wrong because local storage only store Srings. 

**What does JSON.stringify() do?**
> converts JavaScript objects to JSON strings for storage

---

## Part 2: Understanding and Explanations

### Task 2.1: Login Flow

**1. What happens when a user clicks the "Login" button?**
> calls "handlePatientLogin()" prevent from submit , sends POST request with email/password, stores tokens, redirects to dashboard 

**2. What does fetch() do?**
> Makes HTTP POST request to backend with JSON data, return response object

**3. What gets stored in localStorage after successful login?**
> token and JSON stringified user object (user)

**4. What happens if the login fails?**
> show server error message 

---

### Task 2.2: User Model

**1. What information does a User have? (list the fields)**
> email, password, firstName, age, gender,phone, address, specialization, experience, availability 

**2. What does the pre('save') function do?**
> automatically runs before "user.save()"

**3. Why do we hash passwords before saving them?**
> security, if database is hacked, password can not be read in plain text.

**4. What does the comparePassword method do?**
> compare plain password with hased version 

---

### Task 2.3: Authentication Middleware

**1. What is middleware in Express.js?**
> function thats process requests 

**2. What does authenticateToken check for?**
> 

**3. What happens if no token is provided?**
> return 401 error 

**4. What does next() do?**
> passes control to next middleware 

---

## Part 3: Improvements 

### Option [A]: add a .env.example file

**What I did:**
> created file ".env.example" 

**Answer the question from the task:**
> Env vars: Don't hardcode secrets (DB password, JWT key) in code. Use different values for laptop vs server.
.env: Simple text file with KEY=value lines. dotenv reads it automatically. .env.example shows format without real secrets

---

### Option [B]: add input validation

**What I did:**
> added password validation (should be >6)
  and age validation (range between 1 to 120)

**Answer the question from the task:**
> prevents invalid data and should validate both frontend and backend 

---

### Option [C]: add comments to the code

**What I did:**
> added comments

**Answer the question from the task:**
> helps developers understand quickly
  nakes future changes easier 

---

### Option [D]: improve error message

**What I did:**
> improved error messages 

**Answer the question from the task:**
> Users: "No internet" - check WiFi. "Wrong password" - retry login. Generic "error"-confused, quit app.

Developers: "TypeError fetch" - network issue. "500 error" - backend bug,. generic message


**Thank you for reviewing my work!**

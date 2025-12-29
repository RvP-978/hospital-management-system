# 🏥 Hospital Management System - Code Review Assessment

## Welcome to Ventii's Technical Assessment!

Thank you for sharing your Hospital Management System project! We'd like you to review your own code, find some issues, and make improvements. This assessment is designed to understand how you think about code and solve problems.

> **⏰ Time Limit:** 48 hours  
> **� Tip:** Focus on understanding and explaining, not just fixing

---

## 📋 What's Included

You have received:
- Your **Hospital Management System** code (with some bugs to find)
- `CANDIDATE_ASSESSMENT.md` - This file with instructions
- `MY_ANSWERS.md` - Fill in your answers here

---

## 📋 How to Complete This Assessment

1. **Read** this entire document first to understand what's expected
2. **Find and fix** the bugs mentioned in Part 1
3. **Write comments** in the code explaining what was wrong and why your fix works
4. **Answer all questions** in the `MY_ANSWERS.md` file
5. **Complete 2 tasks** from Part 3 (your choice)
6. **Test** that the app still works after your changes
7. **Submit** your updated code in a new branch as mentioned in "How to Submit" Section

---

##  Part 1: Find and Fix Bugs (Required)

### Task 1.1: Fix the Spelling Mistake in Filename

**Problem:** One of the files has a spelling mistake in its name.

**Your Task:**
- [ ] Find the file with the spelling error (hint: it's related to authentication)
- [ ] Rename it to the correct spelling
- [ ] Update any files that import this file

**In your MY_ANSWERS.md, answer:**
> What was the wrong filename? What should it be? Why is correct spelling important in code?

---

### Task 1.2: Fix the Spelling Mistakes in seed.js

**Problem:** In `seed.js`, there's a word that's spelled wrong multiple times.

**Your Task:**
- [ ] Open `seed.js` and find the misspelled word
- [ ] Fix all instances of this spelling mistake
- [ ] Find another bug on line 64 - a variable is used that doesn't exist

**In your MY_ANSWERS.md, answer:**
> What word was misspelled? How many times did you fix it? What was the bug on line 64?

---

### Task 1.3: Fix the LocalStorage Bug

**Problem:** In `App.jsx`, there's a bug in how we save the doctor's information.

**Hint:** Look at line 74 and line 101. One of them is different from the other. Which one is correct?

**Your Task:**
- [ ] Find the bug and fix it
- [ ] Add a comment explaining what was wrong

**In your MY_ANSWERS.md, answer:**
> What was the difference between line 74 and line 101? Why was one of them wrong? What does `JSON.stringify()` do?

---

## � Part 2: Understand and Explain (Required)

These questions test your understanding. Write your answers in your `MY_ANSWERS.md` file.

### Task 2.1: Explain the Login Flow

Look at the `handlePatientLogin` function in `App.jsx` (lines 61-86).

**Answer these questions:**
1. What happens when a user clicks the "Login" button?
2. What does `fetch()` do?
3. What gets stored in `localStorage` after successful login?
4. What happens if the login fails?

---

### Task 2.2: Explain the User Model

Look at `User.js`.

**Answer these questions:**
1. What information does a User have? (list the fields)
2. What does the `pre('save')` function do?
3. Why do we hash passwords before saving them?
4. What does the `comparePassword` method do?

---

### Task 2.3: Explain the Authentication Middleware

Look at `authMiddlewear.js` (or your renamed file).

**Answer these questions:**
1. What is middleware in Express.js?
2. What does `authenticateToken` check for?
3. What happens if no token is provided?
4. What does `next()` do?

---

## � Part 3: Simple Improvements (Choose 2)

Pick **any 2** of these tasks to complete.

### Option A: Add a .env.example File

**Problem:** The database connection string is hardcoded in `db.js`. This is not a good practice.

**Your Task:**
- [ ] Create a file called `.env.example`
- [ ] Add these variables (with example values, not real secrets):
  ```
  PORT=5000
  MONGODB_URI=mongodb://127.0.0.1:27017/hospital-management
  JWT_ACCESS_SECRET=your_secret_here
  JWT_REFRESH_SECRET=your_secret_here
  ```

**In your MY_ANSWERS.md, answer:**
> Why should we use environment variables instead of hardcoding values? What is a `.env` file used for?

---

### Option B: Add Input Validation

**Problem:** The registration form doesn't check if the data is valid before sending.

**Your Task:**
- [ ] In `App.jsx`, in the `handleRegister` function, add a check:
  - Password should be at least 6 characters
  - Age should be between 1 and 120
- [ ] Show an error message if validation fails

**In your MY_ANSWERS.md, answer:**
> Why is input validation important? Should we validate on frontend, backend, or both?

---

### Option C: Add Comments to the Code

**Problem:** The code has very few comments, making it hard for new developers to understand.

**Your Task:**
- [ ] Add helpful comments to `server.js` explaining what each section does
- [ ] Add comments to at least 3 functions in `App.jsx` explaining what they do

**In your MY_ANSWERS.md, answer:**
> Why are code comments important? When should you write comments and when is code self-explanatory?

---

### Option D: Improve Error Messages

**Problem:** When something goes wrong, the error message just says "Backend not running on port 5000" which isn't always accurate.

**Your Task:**
- [ ] In `App.jsx`, improve the catch blocks to show better error messages
- [ ] Example: Check if it's a network error vs a server error

**In your MY_ANSWERS.md, answer:**
> Why are good error messages important for users? Why are they important for developers?

---

## ✅ Checklist Before Submitting

Make sure you have:

- [ ] Fixed all 3 bugs in Part 1
- [ ] Answered all questions in Part 1 and Part 2 in `MY_ANSWERS.md`
- [ ] Completed 2 tasks from Part 3
- [ ] Added comments in your code explaining your fixes
- [ ] Tested that the app still runs without errors

---

## 📤 How to Submit

1. Create a **new branch** with your name: `assessment/your-name`  
   Example: `assessment/vismitha`
   ```bash
   git checkout -b assessment/your-name
   ```
2. **Commit your changes** with clear commit messages
   ```bash
   git add .
   git commit -m "Fixed bugs and completed assessment"
   ```
3. **Push your branch** to the repository
   ```bash
   git push origin assessment/your-name
   ```
4. **Notify your Ventii contact** with your branch name so they can review

---

## 💡 Tips for Success

- **Take your time** - understanding is more important than speed
- **Explain clearly** - imagine you're teaching someone who doesn't know coding
- **Test your changes** - make sure you didn't break anything
- **Ask if stuck** - it's okay to ask clarifying questions!

---

## 🎯 What We're Looking For

| Skill | What We Want to See |
|-------|---------------------|
| **Debugging** | Can you find and fix bugs? |
| **Understanding** | Can you explain how code works? |
| **Communication** | Can you write clear explanations? |
| **Attention to Detail** | Do you notice small issues? |
| **Problem Solving** | How do you approach problems? |

---

**Good luck! We're excited to see your work.** 🎉

*If you have any questions, don't hesitate to reach out!*

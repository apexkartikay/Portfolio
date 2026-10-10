export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  try {
    const { messages } = req.body || {};
    const lastMsg = (messages && messages[messages.length - 1]?.content) || "";
    const q = lastMsg.toLowerCase();

    let answer = "";
    if (q.includes("war") || q.includes("medical") || q.includes("battlefield") || q.includes("dbms")) {
      answer = "Kartikay engineered the Integrated War Resource & Battlefield Medical Management System using MySQL (3NF normalized schema), Node.js, and Python. It provides real-time casualty triage, blood and equipment dispatch, automated triggers for low-stock alerts, and ACID transaction boundaries.";
    } else if (q.includes("counsel") || q.includes("student") || q.includes("mern") || q.includes("mental")) {
      answer = "The Student Counselling Management System is a MERN stack web app built with React, Node.js, Express, and MongoDB. It features appointment booking, role-based access control (Student/Counsellor/Admin), confidential session notes, and analytics.";
    } else if (q.includes("expense") || q.includes("budget") || q.includes("finance")) {
      answer = "The Expense Tracker is a Python project using structured JSON file handling for persistent data storage, categorized monthly summaries, search filters, and budget ceiling alerts.";
    } else if (q.includes("record") || q.includes("c language") || q.includes("systems") || q.includes("c ")) {
      answer = "The Student Record Management System is built in C with 4-tier Role-Based Access Control (Admin, Staff, User, Guest), password masking, linear search, and persistent binary file handling for academic records.";
    } else if (q.includes("skill") || q.includes("stack") || q.includes("tech")) {
      answer = "Kartikay is skilled in Python, C, C++, Java, JavaScript, React.js, Node.js, Express.js, Django, FastAPI, MySQL, PostgreSQL, MongoDB, Redis, Docker, Git, and Linux.";
    } else if (q.includes("leetcode") || q.includes("dsa") || q.includes("problem")) {
      answer = "Kartikay has solved 180+ problems on LeetCode (@apexkartikay) across Easy (76), Medium (96), and Hard (12), with a focus on DSA, graph algorithms, and dynamic programming.";
    } else if (q.includes("college") || q.includes("education") || q.includes("srm") || q.includes("gpa") || q.includes("cgpa")) {
      answer = "Kartikay is pursuing his B.Tech in Computer Science & Engineering at SRM University, AP with a CGPA of 8.50.";
    } else if (q.includes("leadership") || q.includes("event") || q.includes("club") || q.includes("hackshastra")) {
      answer = "Kartikay serves as Events Lead at Hackshastra and was formerly Events Lead at the Centre of Drone Technology (CDT) at SRM University AP.";
    } else if (q.includes("contact") || q.includes("email") || q.includes("hire")) {
      answer = "You can contact Kartikay directly at kartikmk0402@gmail.com, or check out his GitHub at github.com/apexkartikay and LinkedIn at linkedin.com/in/kartikay-mishra-02644633b.";
    } else {
      answer = "Kartikay Mishra is a Computer Science undergraduate at SRM University AP (CGPA 8.50) skilled in full-stack web development, DBMS, systems programming in C, and problem solving with 180+ LeetCode problems solved. Ask me about his projects, skills, or leadership!";
    }

    return res.status(200).json({ answer });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}

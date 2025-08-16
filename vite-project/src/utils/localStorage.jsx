// utils/data.js

const employees = [
  {
    id: 1,
    firstName: "John",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Prepare Monthly Report",
        taskDescription: "Compile financial data and prepare the monthly report.",
        taskDate: "2025-08-10",
        categories: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Update Client Records",
        taskDescription: "Ensure all client contact details are up to date.",
        taskDate: "2025-08-08",
        categories: "CRM",
        active: true,
        newTask: true,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Team Meeting",
        taskDescription: "Attend and take notes for the weekly team meeting.",
        taskDate: "2025-08-06",
        categories: "Meetings",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Sarah",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Design Homepage Banner",
        taskDescription: "Create a responsive homepage banner for the marketing campaign.",
        taskDate: "2025-08-12",
        categories: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve the authentication error reported by QA.",
        taskDate: "2025-08-07",
        categories: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Write Blog Post",
        taskDescription: "Write a blog post about the latest industry trends.",
        taskDate: "2025-08-09",
        categories:  "Writing",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Raj",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Client Onboarding",
        taskDescription: "Guide new clients through onboarding steps.",
        taskDate: "2025-08-05",
        categories: "Support",
        active: true,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Survey Analysis",
        taskDescription: "Analyze results from recent customer satisfaction survey.",
        taskDate: "2025-08-03",
        categories: "Analytics",
        active: false,
        newTask: true,
        completed: true,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 0,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Social Media Campaign",
        taskDescription: "Launch Instagram ad campaign.",
        taskDate: "2025-08-01",
        categories: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Customer Follow-ups",
        taskDescription: "Email follow-up to premium clients.",
        taskDate: "2025-08-02",
        categories: "Sales",
        active: true,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Ali",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 0,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Database Migration",
        taskDescription: "Move data from old DB to new schema.",
        taskDate: "2025-08-04",
        categories: "Database",
        active: false,
        newTask: true,
        completed: false,
        failed: true
      },
      {
        taskTitle: "API Testing",
        taskDescription: "Manually test all backend endpoints.",
        taskDate: "2025-08-05",
        categories: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: true
      }
    ]
  }
];

const admin = [{
  id: 0,
  firstName: "Admin",
  email: "admin@me.com",
  password: "123"
}];

// Set data to localStorage
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

// Get data from localStorage
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || null;
  return { employees, admin };
};

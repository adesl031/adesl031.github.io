const jobs = [
  {
    title: "Market Analyst Intern",
    company: "Government of Canada",
    location: "Ottawa, ON",
    duration: "4 months",
    image: "Company Logos/GOC.jpg",
    description: "Assist in market research and analysis to support government initiatives. This role involves data collection, analysis, and reporting on market trends. You will gain hands-on experience in market research methodologies and data analysis tools. Ideal for students pursuing a degree in economics, business, or a related field. This internship is perfect for those looking to enhance their analytical skills in a public sector environment. You will work closely with experienced analysts and gain insights into government operations.",
    salary: "CAD 20/hour",
  },
  {
    title: "Finance Analyst Intern",
    company: "Bank of Montreal",
    location: "Montreal, QC",
    duration: "4 months",
    image: "Company Logos/BMO.jpg",
    description: "Support financial analysis and reporting for various banking operations. This role involves data collection, financial modeling, and assisting in the preparation of financial reports. You will gain hands-on experience in financial analysis and reporting. Ideal for students pursuing a degree in finance or a related field. This internship is perfect for those looking to enhance their analytical skills in a dynamic banking environment. You will work closely with experienced finance professionals and gain insights into the banking industry.",
    salary: "CAD 22/hour",
  },
  {
    title: "UX Designer Intern",
    company: "Amazon",
    location: "Vancouver, BC",
    duration: "6 months",
    image: "Company Logos/Amazon.jpg",
    description: "Design user-friendly interfaces and improve user experience for Amazon products. This role involves collaborating with product managers and developers to create intuitive designs. You will gain experience in user research, wireframing, and prototyping. Ideal for students pursuing a degree in UX design or a related field. This internship is perfect for those looking to enhance their design skills in a fast-paced environment. You will work on real projects that impact millions of users worldwide.",
    salary: "CAD 25/hour",
  },
  {
    title: "Mechanical Engineer Intern",
    company: "Bombardier",
    location: "Mississauga, ON",
    duration: "12 months",
    image: "Company Logos/Bombardier.png",
    description: "Assist in the design and development of aircraft systems and components. This role involves working with a team of engineers to create innovative solutions for aviation challenges. You will gain hands-on experience in mechanical engineering principles and practices. This internship is ideal for students pursuing a degree in mechanical engineering or a related field.",
    salary: "CAD 30/hour",
  },
];

document.getElementsByClassName("logo-section")[0].addEventListener("click", () => {
  window.location.href = "index.html";
});

const jobListings = document.getElementById("job-listings");

jobs.forEach((job) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
        <img src="${job.image}" alt="${job.company} Logo">
        <div class="card-content">
          <h4>${job.title}</h4>
          <p><strong>${job.company}</strong></p>
          <p>${job.location}</p>
          <p>${job.duration}</p>
        </div>
      `;

  jobListings.appendChild(card);

  card.addEventListener("click", () => {
    localStorage.setItem("selectedJob", JSON.stringify(job));
    window.location.href = "posting.html";
  });
  const companySelect = document.getElementById("company");
  if (
    ![...companySelect.options].some((option) => option.value === job.company)
  ) {
    const option = document.createElement("option");
    option.value = job.company;
    option.textContent = job.company;
    companySelect.appendChild(option);
  }
});

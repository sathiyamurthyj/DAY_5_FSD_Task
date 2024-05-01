let resume = {
    "personalInfo": {
      "name": "Sathiyamurthy Jagadeesan",
      "email": "sathiyamurthyj1724@gmail.com",
      "mobile": "+919677297439",
      "profileSynopsis": "Well-versed in designing and developing robust software solutions with a deep understanding of programming languages such as JavaScript and Python.",
      "location": {
        "address 1": "12,Flat F1,Amudhas Avinan Kudil",
        "address 2": "3rd Cross Street, Vijayanagar",
        "city": "Chennai",
        "state": "TamilNadu",
        "country": "India"
      },
      "profile": {
        "socialNetwork": "LinkedIn",
        "url": "https://www.linkedin.com/in/sathiyamurthyjagadeesan/"
      }
    },
    "education": [{
      "degree": "Masters",
      "institution": "Clemson University",
      "area": "Mechanical Enggineering",
      "yearOfCompletion": 2014,
      "completed": true,
      "GPA": "3.40"
      },
    {
      "degree": "Graduate",
      "institution": "PSG College of Technology",
      "area": "Production Enggineering",
      "yearOfCompletion": 2009,
      "completed": true,
      "GPA": "8.79"
    }],
    "work": [{
      "companyName": "Volt Workforce Solutions",
      "onsite": "yes",
      "position": "Engine Integration Engineer",
      "startDate": "05-04-2015",
      "endDate": "22-12-2019",
      "summary": "Build and Release of Engine Bill of Materials for John Deere Power Systems",
    },
    {
      "companyName": "Ashok Leyland",
      "onsite": "yes",
      "position": "Product Development Engineer",
      "startDate": "05-10-2009",
      "endDate": "01-04-2012",
      "summary": "Responsible for Integrating Diesel Engines for Rotary Screw Compressor application",  
    }],
    "certificates": [{
      "name": "Python Training",
      "date": "21-03-2022",
      "issuer": "EDX",
    },
    {
      "name": " AWS Cloud Practitioner Essentials",
      "date": "02-12-2022",
      "issuer": "AWS",
    }],
    "skills": [{
      "name": "Web Development",
      "level": "Intermediate",
      "keywords": [
        "HTML",
        "CSS",
        "JavaScript"
      ]
    }],
    "languages": [{
      "language": "Tamil",
      "fluency": "Native speaker"
    },
    {
      "language": "English",
      "fluency": "Intermediate"
    },    
    ]
  };

console.log(resume);

// using for in loop and for of loop to iterate over json object

for(const key in resume.personalInfo){
    if(key === "location"){
        for (const [key, value] of Object.entries(resume.personalInfo.location)){
            console.log(`${key}:${value}`);
        }
    }
    else if(key === "profile"){
        for (const [key, value] of Object.entries(resume.personalInfo.profile)){
            console.log(`${key}:${value}`);
        }
    } else {
        console.log(`${key}:${resume.personalInfo[key]}`);
    }
};

// using for loop  and forEach to iterate over array of objects

for(let i=0; i< resume.work.length;i++){
    console.log(`Work experience ${i+1}`);
    Object.keys(resume.work[i]).forEach((key)=>{
        console.log(`${key}:${resume.work[i][key]}`);
    })
}
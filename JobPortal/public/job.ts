class JobRegistration {
    name: string;
    age: number;
    gender: string;
    jobPreference: string;
    district: string;
    education: string;
    skills: string;
    phone: string;
    experience: string;
    pincode: number;

    constructor(name: string, age: number, gender: string, jobPreference: string, district: string, education: string, skills: string, phone: string, experience: string, pincode: number) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.jobPreference = jobPreference;
        this.district = district;
        this.education = education;
        this.skills = skills;
        this.phone = phone;
        this.experience = experience;
        this.pincode = pincode;
    }

    displayDetails(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Job Preference: ${this.jobPreference}, District: ${this.district}, Education: ${this.education}, Skills: ${this.skills}, Phone: ${this.phone}, Experience: ${this.experience}, Pincode: ${this.pincode}`);
    }
}

const jobRegistration = new JobRegistration("John Doe", 30, "Male", "Software Engineer", "New York", "Bachelor's", "JavaScript, React", "123-456-7890", "5 years", 12345);
jobRegistration.displayDetails();

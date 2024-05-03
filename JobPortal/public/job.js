var JobRegistration = /** @class */ (function () {
    function JobRegistration(name, age, gender, jobPreference, district, education, skills, phone, experience, pincode) {
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
    JobRegistration.prototype.displayDetails = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", Gender: ").concat(this.gender, ", Job Preference: ").concat(this.jobPreference, ", District: ").concat(this.district, ", Education: ").concat(this.education, ", Skills: ").concat(this.skills, ", Phone: ").concat(this.phone, ", Experience: ").concat(this.experience, ", Pincode: ").concat(this.pincode));
    };
    return JobRegistration;
}());
var jobRegistration = new JobRegistration("John Doe", 30, "Male", "Software Engineer", "New York", "Bachelor's", "JavaScript, React", "123-456-7890", "5 years", 12345);
jobRegistration.displayDetails();

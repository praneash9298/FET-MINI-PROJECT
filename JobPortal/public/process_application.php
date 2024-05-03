<?php
$companyName = $_POST['companyName'];
$companyAddress = $_POST['companyAddress'];
$companyVacancy = $_POST['companyVacancy'];
$numApplicants = $_POST['numApplicants'];
$salary = $_POST['salary'];
$experience = $_POST['experience'];
$phoneNumber = $_POST['phoneNumber'];
$companyPinCode = $_POST['companyPinCode'];
$email = $_POST['email'];
$applicationData = array(
    'Company Name' => $companyName,
    'Company Address' => $companyAddress,
    'Labour Vacancy' => $companyVacancy,
    'Number of Applicants' => $numApplicants,
    'Salary' => $salary,
    'Experience Required' => $experience,
    'Phone Number' => $phoneNumber,
    'Company Pin Code' => $companyPinCode,
    'Email' => $email
);
$applicationJSON = json_encode($applicationData);
echo $applicationJSON;
?>

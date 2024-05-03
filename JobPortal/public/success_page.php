<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Application Submitted Successfully</title>
    <style>
    body {
        font-family: Arial, sans-serif;
        background: url('b3.jpg') center center fixed; 
        background-size: cover;
        margin: 0;
        padding: 0;
    }
    .container {
        max-width: 800px;
        margin: 50px auto;
        background-color: rgba(255, 255, 255, 0.7);
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h2 {
        text-align: center;
        color: #333;
    }
    .details {
        margin-top: 20px;
    }
    .details p {
        margin-bottom: 10px;
    }
</style>
</head>
<body>
    <div class="container">
        <h2>Job Application Submitted Successfully</h2>
        <div class="details">
            <p><strong>Company Name:</strong> <?php echo $_GET['companyName']; ?></p>
            <p><strong>Company Address:</strong> <?php echo $_GET['companyAddress']; ?></p>
            <p><strong>Labour Vacancy:</strong> <?php echo $_GET['companyVacancy']; ?></p>
            <p><strong>Number of Applicants:</strong> <?php echo $_GET['numApplicants']; ?></p>
            <p><strong>Salary:</strong> <?php echo $_GET['salary']; ?></p>
            <p><strong>Experience Required:</strong> <?php echo $_GET['experience']; ?> years</p>
            <p><strong>Phone Number:</strong> <?php echo $_GET['phoneNumber']; ?></p>
            <p><strong>Company Pin Code:</strong> <?php echo $_GET['companyPinCode']; ?></p>
            <p><strong>Email:</strong> <?php echo $_GET['email']; ?></p>
        </div>
    </div>
</body>
</html>
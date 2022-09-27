MyNR

Tech stack used

This app was developed using React, NodeJS, Sass, and makes its API calls using Axios

Features and/or usage instructions

This app is intended for use by patients on blood thinners in order to track essential information like their INR, target INR range, medication dosages, and medication interactions.

On the home screen, you can edit the information after each appointment to reflect your upcoming appointment date, your previous appointment date, your INR target range, and your last INR reading. When you toggled to "upcoming appointment" there will be a link for a mock intake form to complete. The bottom left quadrant shows how much you need to take today, and can be toggled between "taken" and the dosage. The last INR reading will have a background color of red if it was out of range, and green if it was in range. 

The schedule tab allows you to edit the dosages for each day, which will then be reflected on the home screen. The current day on the schedule is highlighted.

Finally, the last tab helps you add/delete your other current medications, and provides a resource to look up interactions between medications and your blood thinners.

Installation on developer and production environments

The current .env.sample file should be converted to .env. It should include the following code:

PORT = 8080

BACKEND_URL = http://localhost

NPM i will need to be run to install the following dependencies:
React, React-router-dom, sass, and uuid

In order to get the app up and running, cd into the server directory to run node index, and then cd into the client directory to run NPM Start

API references
This app uses two API calls through the NIH, but neither require authentication keys. The URLs for the calls are generated dynamically based on user input of medication names.

Next steps
Going forward, I am working on building out a backend to allow for data storage for multiple users, and from there will add user authentication to allow for different users to login to see their individual data.

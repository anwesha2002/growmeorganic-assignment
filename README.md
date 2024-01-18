## Overview

This application is a React-based web application developed using TypeScript and Material-UI (MUI). It fetches data from an API and displays it in a data table. The key feature of this application is the ability for users to select department and sub-departments using checkboxes. On selecting a department, all the sub-departments under it gets automatically selected, and vice versa.

![Screenshot 2024-01-18 073626](https://github.com/anwesha2002/growmeorganic-assignment/assets/116761608/396733f5-9cc0-441f-a001-504365e4ff80)

## Features

 - Data Table: Display data from the API in a responsive data table.
 - Checkbox Filters: Enable users to filter data from data table.
 - Automatic Sub-Department Selection: When a user selects a department, all associated sub-departments are automatically selected and vice versa.

## Technologies Used

 - React
 - TypeScript
 - Material-UI (MUI)

## Getting Started

### Prerequisites
 -- Node.js installed
 -- npm (Node Package Manager) installed
 
### Installation
 - Clone the repository:

   ```bash
       git clone https://github.com/your-username/your-repo.git

 - Navigate to the project directory:

       cd your-repo
    
 - Install dependencies:

       npm install
    
 - Usage

       npm start
    
The application will be accessible at http://localhost:3000 by default.

## Configuration

 - src/Data/Network/TableDataApiFetch.tsx: Update the API endpoint and any necessary authentication parameters.
 - src/components/DataTable.tsx: Adjust the data table configuration and appearance.
 - src/components/DepartmentCheckbox.tsx: Modify the checkbox filters and their behavior.
 - src/Model: Contains all the model
 - src/Pages: Contains all the pages
 - src/Context: Contains a context that is used through the application.

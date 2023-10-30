# Exoplanet Prediction Project

## Overview

The Exoplanet Prediction Project is a comprehensive system integrating a React frontend with Vite and a Flask backend. The project involves uploading, processing, and visualizing exoplanet datasets using a Random Forest model. This README provides an overview of the project's architecture, dataset description, detailed phases, and algorithms used.

## Frontend (React with Vite)

### File Upload Component

Allows users to upload data files in various formats (e.g., CSV, Excel).
Sends the uploaded file to the Flask server for processing.

### User Interface Components

Includes components for user interaction, such as input forms and buttons.
Provides a user-friendly interface for uploading data, making predictions, and viewing results.

### Communication

Uses Fetch API or Axios to communicate with the Flask server.
Sends requests for data processing, predictions, and visualizations.

## Backend (Flask)

### Endpoints

- `/predict`: Accepts feature data, applies the Random Forest algorithm, and returns predictions.

### Communication

- Communicates with the frontend using RESTful API endpoints.
- Utilizes Flask routes to handle different types of requests.

### Random Forest Model

- Trained on a labeled exoplanet dataset.
- Utilizes scikit-learn or a similar machine learning library for model training.
- Exposes an API for integration with the Flask server.

## Dataset Description

### Source

Obtained from a reputable astronomical database or a relevant scientific source.

### Attributes

- Stellar parameters (e.g., temperature, luminosity).
- Planetary parameters (e.g., size, orbit characteristics).
- Transit properties (e.g., light curve data during a transit event).

### Labeling

- Labels data as exoplanet or non-exoplanet based on confirmed discoveries.
- Binary classification labels (1 for exoplanet, 0 for non-exoplanet).

## Detailed Phases

### Data Upload and Processing

#### User Upload

- Users upload datasets through the frontend.
- File Upload Component handles the file upload and sends it to the Flask server.

#### Data Validation

- Flask server validates the uploaded data, ensuring it meets format requirements.
- Handles potential errors and informs the user about invalid data.

### Model Training

#### Data Preparation

- Data from the database is prepared for model training.
- Features and labels are extracted from the labeled dataset.

#### Random Forest Training

- Utilizes scikit-learn to train the Random Forest model.
- Optimizes hyperparameters for improved model performance.

### Prediction

#### User Input

- Users input feature data through the frontend interface.
- Input is sent to the Flask server for processing.

#### Random Forest Prediction

- Flask server applies the trained Random Forest model to make predictions.
- Sends the prediction results back to the frontend for display.

### Data Visualization

#### User Request

- Users request visualizations through the frontend interface.
- Requests are sent to the Flask server.

#### Data Retrieval

- Flask server retrieves relevant data from the database for visualization.
- Prepares data for presentation.

## Algorithms

### Random Forest Algorithm

- Ensemble learning method combining multiple decision trees.
- Suitable for classification tasks, including exoplanet detection.
- Provides feature importance for interpretability.

### Training Process

- Involves the creation of decision trees using bootstrapped samples and random feature subsets.
- Aggregates predictions from individual trees to make a final prediction.

### Feature Importance

- Random Forest provides a measure of feature importance.
- Used to understand which features contribute most to predictions.

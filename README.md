# **Doctor Listing Page**

## **Overview**

This is a dynamic, client-side doctor listing web application developed as part of a campus assessment task for the Frontend Developer role. The objective was to build an intuitive, user-friendly interface where users can search for doctors, filter by specific criteria, and sort results, all while ensuring a seamless experience on the client side. The entire project was completed within a 3-hour timeframe.

## **Features**

- **Autocomplete Search**:  
  A search bar that instantly filters doctor names as you type, showing the top 3 matches in a dropdown. Selecting a suggestion or pressing Enter filters the doctor list accordingly.

- **Dynamic Filtering**:  
  - **Consultation Mode**: Users can choose between "Video Consult" or "In Clinic" options.
  - **Specialties**: Users can select multiple specialties to filter the results by doctor specialties.
  - **Sorting**: Sort the doctor list by **fees (ascending)** or **experience (descending)**.

- **Client-Side Logic**:  
  All search, filtering, and sorting functionality happens entirely on the frontend, ensuring fast, real-time responses without needing backend interaction during these operations.

- **Simple, Intuitive UI**:  
  The app is designed to be easy to use with a clean, minimalistic layout. The interface prioritizes user functionality, enabling quick and efficient doctor searches and filtering.

## **How It Works**

1. **Autocomplete Search**:  
   As the user types a doctor’s name in the search bar, the app provides dynamic suggestions based on the top 3 matches. The list filters instantly when a suggestion is selected or when the user presses Enter.

2. **Filter Panel**:  
   The filter panel includes:
   - **Consultation Mode**: Select between Video Consult or In Clinic.
   - **Specialties**: Choose multiple specialties from a list to filter doctors.
   - **Sorting**: Sort doctors by either **fees** (ascending) or **experience** (descending).

3. **API Integration**:  
   The app fetches doctor data from a provided mock API, including doctor names, consultation modes, specialties, experience, and fees. All filtering and sorting operations are handled on the frontend.

4. **Query Parameters**:  
   The app uses URL query parameters to reflect selected filters and search terms. This ensures that filters persist across page navigation and improves the user experience when browsing back and forth.

## **Challenges Faced and Approach**

With only 3 hours to complete the task, the focus was on delivering core functionality while maintaining performance. Key steps included:

- **Client-Side Filtering and Sorting**:  
  All filtering and sorting logic was implemented on the client side to ensure a fast, responsive user experience.

- **API Integration**:  
  The data was successfully fetched from the mock API and rendered dynamically on the page, ensuring that the application was fully functional within the short timeframe.

- **Simplicity in Design**:  
  The design was kept minimalistic and focused on providing the most essential features without overcomplicating the interface.


---

Thank you for reviewing this repo. This project demonstrates my ability to efficiently build functional frontend applications with clean user interfaces and dynamic client-side interactions under tight deadlines.

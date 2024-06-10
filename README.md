# Otaku Nexus

Otaku Nexus is a full-stack blog website designed for anime enthusiasts. It features a responsive user interface built with React for the frontend and a robust backend powered by Next.js. The platform leverages MongoDB for data storage and Prisma for efficient database management and querying.

## Features

- **User Authentication and Authorization**: Secure sign-up and login functionalities.
- **Rich Text Editor**: Create and edit blog posts with a user-friendly editor.
- **API Integration**: Enhanced content through third-party API integrations.
- **Responsive Design**: Seamless use on various devices (desktop, tablet, mobile).

## Technologies Used

- **Frontend**: React
- **Backend**: Next.js
- **Database**: MongoDB, Prisma
- **Styling**: CSS
- **Authentication**: OAuth

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/YoungKing-Joshua/OtakuNexus.git
    cd OtakuNexus
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following variables:
    ```sh
    GOOGLE_ID=your_google_client_id
    GOOGLE_SECRET=your_google_client_secret

    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your_nextauth_secret

    DATABASE_URL=mongodb+srv://your_username:your_password@cluster0.mongodb.net/your_database?retryWrites=true&w=majority

    NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
    ```

    

4. **Run the development server:**
    ```sh
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Database Setup

1. **Prisma Setup:**
    ```sh
    npx prisma init
    ```

2. **Generate Prisma Client:**
    ```sh
    npx prisma generate
    ```

3. **Run Prisma Migrations:**
    ```sh
    npx prisma migrate dev --name init
    ```

## Scripts

- **Start development server:**
    ```sh
    npm run dev
    ```
- **Build for production:**
    ```sh
    npm run build
    ```
- **Start production server:**
    ```sh
    npm start
    ```
- **Run Prisma Studio:**
    ```sh
    npx prisma studio
    ```


## Contact

For any inquiries or feedback, please contact [joshuadeialorse@gmail.com](mailto:joshuadeialorse@gmail.com).

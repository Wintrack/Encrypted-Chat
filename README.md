# Encrypted-chat

Encrypted-chat is a simple, fully encrypted chat application designed to facilitate communication between different users. The primary goal is to ensure the security and privacy of user conversations by implementing end-to-end encryption. The application does not store any data beyond the essential information, such as usernames and passwords.

## Features

- **End-to-End Encryption:** All messages exchanged within the chat are fully encrypted, providing a secure communication environment.
- **Minimal Data Storage:** Encrypted-chat prioritizes user privacy by only storing essential data, such as usernames and passwords, ensuring minimal exposure of user information.
- **User-Friendly Interface:** The chat application is designed with simplicity in mind, offering an intuitive and user-friendly interface for seamless communication.

## Architecture

Encrypted-chat follows the Clean Architecture principles, which aim to create systems that are independent of frameworks, testable, and maintainable. The codebase is organized into several layers, each with its own responsibility:

- `entities/`: Contains the domain models of the application. These are the core business objects used throughout the application.

- `use_cases/`: This layer contains the application-specific business rules. It encapsulates and implements all of the use cases of the system.

- `controllers/`: Acts as the interface adapter layer. Controllers map incoming requests to use cases and return responses.

- `repositories/`: The data access layer provides interfaces to interact with the database. It abstracts the details of data persistence.

- `gateways/`: Defines the interfaces for external services and APIs. This layer allows the application to communicate with external systems.

- `config/`: Contains configuration files and environment-specific settings.

- `app.js`: The entry point of the application. It sets up the server and wires together all the components.

Each layer has a specific role and interacts with the adjacent layer through well-defined interfaces. This separation of concerns ensures that changes in one layer (e.g., database or external services) have minimal impact on other layers.

## Getting Started

Follow these steps to get Encrypted-chat up and running on your local machine:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/encrypted-chat.git
    ```

2. Launch backend:

  ```bash
  cd backend docker compose up -d
  ```

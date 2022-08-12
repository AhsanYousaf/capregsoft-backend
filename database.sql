CREATE DATABASE capregsoft_db;

CREATE TABLE contact_us(
    c_id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    user_message VARCHAR(1000) NOT NULL
);

CREATE TABLE applicant(
    appicant_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    experties VARCHAR(255) NOT NULL,
    previous_jobs BOOLEAN NOT NULL,
    joining_date VARCHAR NOT NULL,
    interview_date VARCHAR NOT NULL,
    current_salary VARCHAR NOT NULL,
    experience VARCHAR NOT NULL,
    resume bytea NOT NULL
);
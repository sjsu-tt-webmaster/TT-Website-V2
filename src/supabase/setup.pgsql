CREATE TABLE members (
    id SERIAL PRIMARY KEY,               
    user_id UUID REFERENCES auth.users(id),  -- Link to the Supabase "auth.users" table
    name VARCHAR(255) NOT NULL,           
    class_year INTEGER NOT NULL,          
    major VARCHAR(255) NOT NULL,          
    linkedin_url VARCHAR(255),           
    photo_url VARCHAR(255),               
    created_at TIMESTAMPTZ DEFAULT NOW(), 
    updated_at TIMESTAMPTZ DEFAULT NOW(), 
    UNIQUE(user_id)                       
);
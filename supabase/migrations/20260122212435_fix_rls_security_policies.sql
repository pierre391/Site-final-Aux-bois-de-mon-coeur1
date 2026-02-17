/*
  # Fix RLS Security Vulnerabilities

  ## Changes Made
  
  1. Security Fixes
    - Remove all insecure RLS policies that use `USING (true)` or `WITH CHECK (true)`
    - Replace with restrictive policies that check for admin role
    
  2. New RLS Policies
    - **Public Read Access**: Anyone can view categories and projects (unchanged)
    - **Admin-Only Write Access**: Only users with 'admin' role in their JWT can modify data
    - Uses `auth.jwt() ->> 'role'` to check for admin privileges
    
  3. Security Benefits
    - Prevents unauthorized data modification
    - Follows principle of least privilege
    - Uses Supabase's built-in JWT role checking
    
  ## Important Notes
  - To grant admin access, set the user's `raw_app_meta_data` with `{"role": "admin"}`
  - This can be done via Supabase Dashboard or SQL: 
    `UPDATE auth.users SET raw_app_meta_data = '{"role": "admin"}' WHERE email = 'admin@example.com';`
*/

-- Drop all insecure policies
DROP POLICY IF EXISTS "Authenticated users can insert categories" ON categories;
DROP POLICY IF EXISTS "Authenticated users can update categories" ON categories;
DROP POLICY IF EXISTS "Authenticated users can delete categories" ON categories;
DROP POLICY IF EXISTS "Authenticated users can insert projects" ON projects;
DROP POLICY IF EXISTS "Authenticated users can update projects" ON projects;
DROP POLICY IF EXISTS "Authenticated users can delete projects" ON projects;

-- Create secure admin-only policies for categories
CREATE POLICY "Only admins can insert categories"
  ON categories FOR INSERT
  TO authenticated
  WITH CHECK (
    (auth.jwt() ->> 'role') = 'admin'
  );

CREATE POLICY "Only admins can update categories"
  ON categories FOR UPDATE
  TO authenticated
  USING (
    (auth.jwt() ->> 'role') = 'admin'
  )
  WITH CHECK (
    (auth.jwt() ->> 'role') = 'admin'
  );

CREATE POLICY "Only admins can delete categories"
  ON categories FOR DELETE
  TO authenticated
  USING (
    (auth.jwt() ->> 'role') = 'admin'
  );

-- Create secure admin-only policies for projects
CREATE POLICY "Only admins can insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (
    (auth.jwt() ->> 'role') = 'admin'
  );

CREATE POLICY "Only admins can update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (
    (auth.jwt() ->> 'role') = 'admin'
  )
  WITH CHECK (
    (auth.jwt() ->> 'role') = 'admin'
  );

CREATE POLICY "Only admins can delete projects"
  ON projects FOR DELETE
  TO authenticated
  USING (
    (auth.jwt() ->> 'role') = 'admin'
  );
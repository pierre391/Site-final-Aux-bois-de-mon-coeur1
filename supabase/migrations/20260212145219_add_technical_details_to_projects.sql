/*
  # Add Technical Details to Projects

  1. Changes
    - Add `technical_details` column to `projects` table
      - Type: text
      - Default: empty string
      - Purpose: Store technical specifications like integrated niches, cable passages, etc.
  
  2. Notes
    - This field will be displayed in the project lightbox alongside other specifications
    - Non-breaking change - existing projects will have an empty string by default
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'technical_details'
  ) THEN
    ALTER TABLE projects ADD COLUMN technical_details text DEFAULT '';
  END IF;
END $$;
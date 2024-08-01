// sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'LearningCENTER',
  title: 'LearningCENTER',
  projectId: '6smqkhnr',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [...schemaTypes],
  },
});

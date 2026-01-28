import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'solar-express',

  projectId: '1tr6q688',
  dataset: 'production',

  plugins: [deskTool(), structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

import { Schema, model } from 'mongoose';
import { ArticleModel } from '../models/article-model';

// Setup schema
const articleSchema = new Schema<ArticleModel>({
  id: { type: String, required: true },
  name: { type: String, required: true },
});

// Export Book model
export const ArticleMongoModel = model<ArticleModel>('Article', articleSchema);

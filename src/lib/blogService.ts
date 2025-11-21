import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { db } from './firebase';
import { BlogPost } from '@/data/blogPosts';

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const q = query(collection(db, 'blogPosts'), orderBy('publishedAt', 'desc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as BlogPost));
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const q = query(collection(db, 'blogPosts'), where('slug', '==', slug));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) return null;
  const doc = querySnapshot.docs[0];
  return { id: doc.id, ...doc.data() } as BlogPost;
};

export const getRelatedPosts = async (category: string, excludeId: string): Promise<BlogPost[]> => {
  const q = query(collection(db, 'blogPosts'), where('category', '==', category), orderBy('publishedAt', 'desc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs
    .filter(doc => doc.id !== excludeId)
    .slice(0, 3)
    .map(doc => ({ id: doc.id, ...doc.data() } as BlogPost));
};